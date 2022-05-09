import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";


export class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);
    try {
      const { user, token } = await authenticateUserUseCase.execute({
        email,
        password,
      })

      return response.status(200).json({ user, token });
    } catch (error) {
      if(error instanceof Error){
        return response.status(400).json({error: error.message});
    }
      return response.status(500).json({error: "Unknown error"});
      }

  }
}