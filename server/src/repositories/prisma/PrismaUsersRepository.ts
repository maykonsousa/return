import { prisma } from "../../prisma";
import { IDataUserModel, IUserCreateData, IUsersRepository } from "../UsersRepository";

interface UpdateData{
  
  id: string;
  name?: string;
  email?: string;
  password?: string;
  
}

export class PrismaUsersRepository implements IUsersRepository {
;
  
  async create({ name, email, username, password, isAdmin }: IUserCreateData): Promise<IDataUserModel> {
    const user = await prisma.user.create({
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
    const Users = await prisma.user.findMany().then((Users) => Users as IDataUserModel[]);
    return Users;
  }

  async getById(id: string): Promise<IDataUserModel> {
    const User = await prisma.user.findUnique({where: {id}}).then((User) => User as IDataUserModel);
    return User;
  }



  async update({id, name, email, password }:UpdateData): Promise<IDataUserModel> {
    const User = await prisma.user.update({
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
    await prisma.user.delete({
      where: {id}
    })
}


}