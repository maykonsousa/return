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

interface UpdateRequestData {
  comment: string;
  id: string;
}

export interface IRequestsRepository {
  create: (data: IRequestCreateData) => Promise<IDataRequestModel>;

  getAll: () => Promise<IDataRequestModel[]>;

  getById: (id: string) => Promise<IDataRequestModel>;

  getByType: (type: string) => Promise<IDataRequestModel[]>;

  update: ({id, comment}:UpdateRequestData) => Promise<IDataRequestModel>;

  delete: (id: string) => Promise<void>;


}
