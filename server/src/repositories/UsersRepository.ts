export interface IUserCreateData  {
  name: string;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export interface IDataUserModel {
  id: string;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
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

  getById: (id: string) => Promise<IDataUserModel>;
  getByEmail: (email: string) => Promise<IDataUserModel>;
  getAll: () => Promise<IDataUserModel[]>;

  update: (data: UpdateUserData) => Promise<IDataUserModel>;

  delete: (id: string) => Promise<void>;


}
