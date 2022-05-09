export interface IRequestCreateData  {
  type: string;
  userId: string;
  comment: string;
  screenshot?: string;
}

export interface IDataRequestModel {
  id: string;
  type: string;
  comment: string;
  screenshot?: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;

}

export interface IRequestsRepository {
  create: (data: IRequestCreateData) => Promise<IDataRequestModel>;

  getAll: () => Promise<IDataRequestModel[]>;

  getById: (id: string) => Promise<IDataRequestModel>;

  getByType: (type: string) => Promise<IDataRequestModel[]>;

  update: (id: string, comment: string) => Promise<IDataRequestModel>;

  delete: (id: string) => Promise<void>;


}
