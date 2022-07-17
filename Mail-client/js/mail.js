function createMailListItem({
  id = "",
  name = "",
  title = "",
  time = "",
  content = "",
} = {}) {
  const container = document.createElement("div");
  container.classList.add("app-mail-item");
  container.setAttribute("data-email-id", id);

  const header = document.createElement("div");
  header.classList.add("app-mail-item__header");
  container.appendChild(header);

  const nameEl = document.createElement("div");
  nameEl.textContent = name;
  header.appendChild(nameEl);

  const timeEl = document.createElement("div");
  timeEl.textContent = time;
  header.appendChild(timeEl);

  const titleEl = document.createElement("div");
  titleEl.textContent = title;
  titleEl.classList.add("app-mail-item__title");
  container.appendChild(titleEl);

  const contentEl = document.createElement("div");
  contentEl.textContent = content;
  contentEl.classList.add("app-mail-item__content");
  container.appendChild(contentEl);

  return container;
}

class MailListController {
  constructor(mailListContainerElement) {
    if (!mailListContainerElement) {
      throw Error("Need mail list container element to attach items to.");
    }
    this.mailListContainerElement = mailListContainerElement;
    this.mailFetcher = new MailClient.MailFetcher();
    this.dataByMailType = {};
  }

  async loadEmails(type) {
    this.mailListContainerElement.innerHTML = "";
    const { data, error } = await this.mailFetcher.fetchMails(type);
    if (error) {
      console.error(error);
      return;
    }
    this.dataByMailType[type] = data;
    data
      .map(({ from, subject, body, timestamp }) =>
        createMailListItem({
          name: from,
          time: new Date(timestamp).toLocaleDateString(),
          title: subject,
          content: body,
        })
      )
      .forEach((el) => this.mailListContainerElement.appendChild(el));
  }

  getCachedMail(id) {
    for (let dataList in this.dataByMailType) {
      const mail = dataList.find((el) => el.id === id);
      if (mail) return mail;
    }
  }
}

window.MailClient = Object.assign(window.MailClient || {}, {
  MailListController,
});
