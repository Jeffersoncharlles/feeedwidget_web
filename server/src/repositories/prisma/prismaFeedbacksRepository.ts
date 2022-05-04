import { prisma } from "../../database/prisma";
import { FeedbacksRepository, IFeedBackCreate } from "../feedbacksRepository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create({ type, comment, screenshot }: IFeedBackCreate) {
        await prisma.feedBack.create({
            data: {
                type,
                comment,
                screenshot
            }
        })
    }
}