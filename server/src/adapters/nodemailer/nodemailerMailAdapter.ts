import { ISendMaid, MailAdapter } from "../MailAdapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "43b85e492c044d",
        pass: "f7cb798f38fc5b"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: ISendMaid) {
        await transport.sendMail({
            from: 'Equipe feedGet <oi@feedget.com>',
            to: "Jefferson Charlles <contato@jefferdeveloper.com>",
            subject,
            html: body
        })
    }
}