import { Request, Response } from "express";
import {container} from 'tsyringe';

import { SendRequestUseCase } from "./SendRequestUseCase";


export class SendRequestController {
 

  async handle(req:Request, res:Response) {

const sendRequestUseCase = container.resolve(SendRequestUseCase);
    const { type, comment, screenshot } = req.body;
    const userId = 'b29e9757-082e-492e-a5fb-217322502fd2';

    try {
    

      const request = await sendRequestUseCase.execute({
        userId,
        type,
        comment,
        screenshot,

      })

   

      return res.status(201).json(request);

    } catch (error) {
     if(error instanceof Error) {
       return res.status(400).json({error: error.message});
    }
    return res.status(500).json({error: 'Internal server error'});
  }
}
}