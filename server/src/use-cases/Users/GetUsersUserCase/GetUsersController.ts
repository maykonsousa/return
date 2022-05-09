import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetUsersUseCase } from "./GetUsersUseCase";

interface GetUserProps {
  id?: string;
  email?: string;
}


export class GetUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, email } = request.query;
    const getusersUseCase = container.resolve(GetUsersUseCase);

    try {
      const users = await getusersUseCase.execute({ id, email } as GetUserProps);
      return response.status(200).json(users);
    } catch (error) {
      if(error instanceof Error){
        return response.status(400).json({error: error.message});
    }
      return response.status(500).json({error: "Unknown error"});

      }
  }
}