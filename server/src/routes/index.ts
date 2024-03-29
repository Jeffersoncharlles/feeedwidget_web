import { Router } from "express";
import { NodemailerMailAdapter } from "../adapters/nodemailer/nodemailerMailAdapter";
import { PrismaFeedbacksRepository } from "../repositories/prisma/prismaFeedbacksRepository";
import { SubmitFeedBackService } from "../services/SubmitFeedBackService";

const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
const nodemailerMailAdapter = new NodemailerMailAdapter()
const submitFeedBackService = new SubmitFeedBackService(prismaFeedbacksRepository, nodemailerMailAdapter)

const Routes = Router()

Routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body
    try {
        await submitFeedBackService.execute({ type, comment, screenshot })
        return res.status(201).send()
    } catch (error) {
        console.log(error)
        return res.status(500).send()
    }
})


export { Routes }