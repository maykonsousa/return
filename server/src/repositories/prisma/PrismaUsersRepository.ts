import { prisma } from "../../prisma";
import { IDataUserModel, IUserCreateData, IUsersRepository } from "../UsersRepository";

interface UpdateData{
  
  id: string;
  name?: string;
  email?: string;
  password?: string;
  
}

export class PrismaUsersRepository implements IUsersRepository {
    
  async create({ name, email, username, password, isAdmin }: IUserCreateData): Promise<IDataUserModel> {
    const user = await prisma.users.create({
      data:{
        name,
        email,
        username,
        password,
        isAdmin
      }
    }).then((user) => user );

    return user;
  }

  async getAll(): Promise<IDataUserModel[]> {
    const Users = await prisma.users.findMany().then((Users) => Users as IDataUserModel[]);
    return Users;
  }

  async getById(id: string): Promise<IDataUserModel> {
    const User = await prisma.users.findUnique({where: {id}}).then((user) => user as IDataUserModel);
    return User;
  }

  async getByEmail(email: string): Promise<IDataUserModel> {
    const User = await prisma.users.findFirst({where: { email }}).then((user) => user as IDataUserModel);
    return User;
  }

 


  async update({id, name, email, password }:UpdateData): Promise<IDataUserModel> {
    const User = await prisma.users.update({
      where: {id},
      data: {
        name,
        email,
        password,
      }
    }
    ).then((User) => User as IDataUserModel);
    return User;
}

  async delete(id: string): Promise<void> {
    await prisma.users.delete({
      where: {id}
    })
}


}