import {Request, Response, Router} from 'express'
import { PrismaFeedbacksRepository } from './repositories/prisma/PrismaFeedbacksRepository';
import { CreateFeedbackUseCase } from './useCases/CreateFeedback/CreateFeedbackUseCase';
import { NodeMailerMailAdapter } from './adapters/nodeMailer/nodeMailerMailAdapter';

export const routes = Router()





routes.post('/feedbacks', async (req:Request, res: Response ) => {
  const { type, comment, screenshot } = req.body
  const nodeMailerMailAdapter = new NodeMailerMailAdapter()
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  const createFeedbackUseCase = new CreateFeedbackUseCase(prismaFeedbacksRepository, nodeMailerMailAdapter)
  try {
    const feedback = await createFeedbackUseCase.execute({ type, comment, screenshot })
    return res.status(201).json(feedback)
  } catch (error: any) {
    return res.status(400).json({ error: error?.message })
    
  }



  
  
})