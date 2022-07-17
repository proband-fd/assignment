class MailFetcher {
  async fetchMails(type) {
    if (!["inbox", "sent", "trash"].includes(type)) {
      return { data: null, error: new Error("Wrong email type used.") };
    }
    try {
      const data = await (await fetch("/json/data.json")).json();
      return { data: data[type], error: null };
    } catch (e) {
      return {
        data: null,
        error: e,
      };
    }
  }
}

window.MailClient = Object.assign(window.MailClient || {}, { MailFetcher });
