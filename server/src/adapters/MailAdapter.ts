
export interface ISendMaid {
    subject: string;
    body: string;
}

export interface MailAdapter {
    sendMail: (data: ISendMaid) => Promise<void>;
}