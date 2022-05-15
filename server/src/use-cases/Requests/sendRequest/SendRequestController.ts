import { Request, Response } from "express";
import {container} from 'tsyringe';

import { SendRequestUseCase } from "./SendRequestUseCase";


export class SendRequestController {
 

  async handle(req:Request, res:Response) {

const sendRequestUseCase = container.resolve(SendRequestUseCase);
    const { type, message, screenshot } = req.body;
    const userId = req.user.id;
    try {
    

      const request = await sendRequestUseCase.execute({
        userId,
        type,
        message,
        screenshot,

      })

   

      return res.status(201).json(request);

    } catch (error) {
     if(error instanceof Error) {
       return res.status(400).json({error: error.message});
    }
    return res.status(500).json(error);
  }
}
}