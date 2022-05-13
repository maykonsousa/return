import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteRequestUseCase } from "./DeleteRequestUseCase";



export class DeleteRequestController {
  async handle(req: Request, res: Response) {
    const {id:userId} = req.user;
    const {requestId} = req.params;

   const deleteRequestUseCase = container.resolve(DeleteRequestUseCase); 

   try {
     await deleteRequestUseCase.execute({userId, requestId});
     return res.status(200).json({message:"Request deleted"});
   } catch (error) {
     if(error instanceof Error){
       return res.status(400).json({
         message: error.message
       });
     }
      res.status(500).json({error:"Unknow error"});
   }   
}
}