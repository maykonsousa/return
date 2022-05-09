export interface IUserCreateData  {
  name: string;
  userId: string;
  email: string;
  password: string;
}

export interface IDataUserModel {
  id: string;
  name: string;
  email: string;
  password: string;
  isAdmin: string;
  createdAt: Date;
  updatedAt: Date;

}

interface UpdateUserData {
  id: string;
  name?: string;
  email?: string;
  password?: string;
}

export interface IUsersRepository {
  create: (data: IUserCreateData) => Promise<IDataUserModel>;

  getAll: () => Promise<IDataUserModel[]>;

  getById: (id: string) => Promise<IDataUserModel>;

  getByType: (type: string) => Promise<IDataUserModel[]>;

  update: (data: UpdateUserData) => Promise<IDataUserModel>;

  delete: (id: string) => Promise<void>;


}
