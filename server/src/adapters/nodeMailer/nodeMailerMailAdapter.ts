import nodemailer from "nodemailer";
import { MailAdapter, sendMailData } from "../MailAdapter";


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "77c4b987455def",
    pass: "2fbc05a7a742ac"
  }
});


export class NodeMailerMailAdapter implements MailAdapter {
  async sendMail({subject, body }: sendMailData): Promise<void> {

    
    await transport.sendMail({
    from: 'Feedback <maykon.sousa@hotmail.com>',
    to: 'maykon.sousa@hotmail.com',
    subject,
    html: body
  })
  }

}