import { MailAdapter, SendMailData } from "../mail-adpter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c780f7fe235a11",
    pass: "8780deebad9ba3",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Alessandro Demarche <ale@gmail.com>",
      subject,
      html: body,
    });
  }
}
