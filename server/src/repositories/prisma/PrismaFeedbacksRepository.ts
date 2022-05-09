import { FeedbackCreateData, FeedbacksRepository } from "../FeedbacksRepository";
import {prisma} from '../../prisma'

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({type, comment, screenshot}: FeedbackCreateData) {
    const feedback = await prisma.feedback.create({
      data: {
        type,   
        comment,      
        screenshot
      },
    });

    return feedback;
  }
}