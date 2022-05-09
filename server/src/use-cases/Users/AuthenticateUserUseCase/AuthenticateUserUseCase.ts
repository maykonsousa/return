import { inject, injectable } from "tsyringe";
import {compare} from 'bcrypt'
import { IUsersRepository } from "../../../repositories/UsersRepository";
import {sign} from 'jsonwebtoken'


interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    username: string;
    email: string;
  };
  token: string;
}


@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ){}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.getByEmail(email);
    const paswordMatched = await compare(password, user.password);

    if(!user || !paswordMatched) throw new Error("Invalid credentials"); 

    const token = sign({}, `e91ddb53294154a97d3d0bdb39e75024`, {
      subject: user.id,
      expiresIn: `${process.env.TOKEN_EXPIRES_IN}`,

    })

    return {
      user:{
        username: user.username,
        email: user.email,
       
      },
      token,
    }
    
    
}
}