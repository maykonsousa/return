import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateRequestUseCase } from "./UpdateRequestUseCase";


export class UpdateRequestController {
  async handle(req: Request, res: Response) {
    const { comment } = req.body;
    const { requestId } = req.params;
    const { id:userId } = req.user;
    const updateRequestUseCase = container.resolve(UpdateRequestUseCase);
try {
  const newRequest = await updateRequestUseCase.execute({
    requestId, 
    comment, 
    userId});
  return res.status(200).json(newRequest);
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
