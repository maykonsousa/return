import { inject, injectable } from "tsyringe";
import {hash} from 'bcrypt'
import { IUsersRepository, IUserCreateData, IDataUserModel  } from "../../../repositories/UsersRepository";


@injectable()
export class CreateUserUseCase {
  constructor( 
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ){}

  async execute({name, username, email, password, isAdmin}: IUserCreateData): Promise<IDataUserModel> {

    if(!name) throw new Error("Name is required");
    if(!username) throw new Error("Username is required");
    if(!email) throw new Error("Email is required");
    if(!password) throw new Error("Password is required");
    const userAlreadyExists = 
    await this.usersRepository.getByEmail(email) || 
    await this.usersRepository.getById(username); 
    if(userAlreadyExists) throw new Error("User already exists");

    const hashedPassword = await hash(password, 8);

    const user = await this.usersRepository.create({
      name, 
      username, 
      email, 
      password: hashedPassword, 
      isAdmin});
    return user;
}
}