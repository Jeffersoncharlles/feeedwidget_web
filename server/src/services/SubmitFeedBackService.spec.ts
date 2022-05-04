import { SubmitFeedBackService } from "./SubmitFeedBackService"

//spies = espiões

const createFeedbackSyp = jest.fn()//função spy

const sendMailSpy = jest.fn()

const submitFeedback = new SubmitFeedBackService(
    // { create: async () => { } },//mock das dependências
    // { sendMail: async () => { } },
    { create: createFeedbackSyp },//mock das dependências e verificar se foi chamada
    { sendMail: sendMailSpy }
)


describe('Submit feedback', () => {
    //isso deveria ser possível enviar o feedback
    it('should be able to submit a feedback', async () => {

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: "example comment",
            screenshot: 'data:image/png;base64,ijslidjiouhj12jl23i2j',
        })).resolves.not.toThrow();//espero que resolva e nao dispare errors

        expect(createFeedbackSyp).toHaveBeenCalled();//tenha chamado
        expect(sendMailSpy).toHaveBeenCalled();//tenha chamado
    })

    //isso deveria nao ser possível enviar feedback sem type
    it('should not be able to submit feedback without type', async () => {

        await expect(submitFeedback.execute({
            type: '',
            comment: "example comment",
            screenshot: 'data:image/png;base64,ijslidjiouhj12jl23i2j',
        })).rejects.toThrow();//espero que rejeite e nao dispare errors
    })

    //isso deveria nao ser possível enviar feedback sem comment
    it('should not be able to submit feedback without type', async () => {

        await expect(submitFeedback.execute({
            type: 'Bug',
            comment: "",
            screenshot: 'data:image/png;base64,ijslidjiouhj12jl23i2j',
        })).rejects.toThrow();//espero que rejeite e nao dispare errors
    })

    //isso deveria nao ser possível enviar feedback com uma screenshot invalid
    it('should not be able to submit feedback with an invalid screenshot', async () => {

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: "example comment",
            screenshot: 'test.jpg',
        })).rejects.toThrow();//espero que rejeite e nao dispare errors
    })
})