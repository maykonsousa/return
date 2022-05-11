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
    id: string;
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

    const token = sign({}, `${process.env.TOKEN_SECRET}`, {
      subject: user.id,
      expiresIn: `${process.env.TOKEN_EXPIRES_IN}`,

    })

    return {
      user:{
        id: user.id,
        username: user.username,
        email: user.email,
       
      },
      token,
    }
    
    
}
}