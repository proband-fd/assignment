class MailboxController {
  constructor(mailboxElements) {
    if (!mailboxElements) {
      throw new Error("No mailbox navigation elements passed");
    }
    this.mailboxElements = mailboxElements;
  }

  attachLoadMailbox(onLoadMailbox) {
    for (let el of this.mailboxElements) {
      console.log(el);
      el.addEventListener("click", () => {
        const type = el.dataset.emailType;
        onLoadMailbox(type);
      });
    }
  }
}

window.MailClient = Object.assign(window.MailClient || {}, {
  MailboxController,
});
