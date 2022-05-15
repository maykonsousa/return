export interface IRequestCreateData  {
  type: string;
  userId: string;
  message: string;
  screenshot?: string;
}

export interface IDataRequestModel {
  id: string;
  type: string;
  message: string;
  screenshot: string | null;
  userId: string;
  createdAt: Date;
  updatedAt: Date;

}

interface UpdateRequestData {
  requestId: string;
  message: string;
}

export interface IRequestsRepository {
  create: (data: IRequestCreateData) => Promise<IDataRequestModel>;

  getAll: () => Promise<IDataRequestModel[]>;

  getById: (id: string) => Promise<IDataRequestModel>;

  getByType: (type: string) => Promise<IDataRequestModel[]>;

  getByUserId: (userId: string) => Promise<any[]>;

  update: (data: UpdateRequestData) => Promise<IDataRequestModel>;

  delete: (id: string) => Promise<void>;


}
