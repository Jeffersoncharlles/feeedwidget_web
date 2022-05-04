import { MailAdapter } from "../adapters/MailAdapter";
import { FeedbacksRepository } from "../repositories/feedbacksRepository";

interface ISubmitFeedBack {
    type: string;
    comment: string;
    screenshot?: string;
}

class SubmitFeedBackService {
    constructor(
        private feedBacksRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter,
    ) { }

    async execute({ screenshot, comment, type }: ISubmitFeedBack) {

        await this.feedBacksRepository.create({
            screenshot, comment, type
        })

        await this.mailAdapter.sendMail({
            subject: 'Novo feedback',
            body: [
                `<div style="font-family: sans-serif; font-size:16px; color:#333; ">`,
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                `</div>`
            ].join('\n')
        })
    }
}

export { SubmitFeedBackService }