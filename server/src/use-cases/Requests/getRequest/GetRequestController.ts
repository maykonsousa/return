import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetRequestUseCase } from "./GetRequestUseCase";

export class GetRequestController {

  async handle(req: Request, res: Response): Promise<Response> {
    const userId = req.user.id;
    const getRequestUseCase = container.resolve(GetRequestUseCase);
    try {
      const requests = await getRequestUseCase.execute(userId);
    return res.status(200).json(requests);
    } catch (error) {
      if(error instanceof Error) {
        return res.status(400).json({error: error.message});
    }
    return res.status(500).json(error);
}
  }
}