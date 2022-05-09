import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, username, email, password } = request.body;
    const isAdmin = false;
    const createUserUseCase = container.resolve(CreateUserUseCase);
    try {
       const user = await createUserUseCase.execute({ name, username, email, password, isAdmin });
       return response.status(201).json(user);
    } catch (error) {
      if(error instanceof Error) {
        return response.status(400).json({ error: error.message });
    }
    return response.status(500).json({ error: "Unknown error" });
}
  }
}