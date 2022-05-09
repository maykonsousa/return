import { inject, injectable } from "tsyringe";
import { IDataUserModel, IUsersRepository } from "../../../repositories/UsersRepository";


interface findUserProps{
  id?: string;
  email?: string;
}

@injectable()
export class GetUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository) {}

    async execute({id, email}:findUserProps): Promise<IDataUserModel | IDataUserModel[]> {
     
     if(id){
      try {
        const user = await this.usersRepository.getById(id);
        return user;
      } catch (error) {
        throw new Error("User not found");
      }
     }

     if(email){
      try {
        const user = await this.usersRepository.getByEmail(email);
        return user;
      } catch (error) {
        throw new Error("User not found");
      }
     }

     try {
       const users = await this.usersRepository.getAll();
       return users;
     } catch (error) {
        throw new Error("User not found");
     }

}
}