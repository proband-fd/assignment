document.addEventListener("DOMContentLoaded", init);

async function init() {
  const mailListController = new MailClient.MailListController(
    document.querySelector("#mail-list")
  );

  const mailboxController = new MailClient.MailboxController(
    document.querySelectorAll(".app-navigation__list-item")
  );

  mailboxController.attachLoadMailbox((type) => {
    mailListController.loadEmails(type);
  });

  await mailListController.loadEmails("inbox");
}
