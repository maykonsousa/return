import { prisma } from "../../prisma";
import { IDataRequestModel, IRequestCreateData, IRequestsRepository } from "../RequestsRepository";

interface UpdateData{
  
  comment: string;
  screenshot?: string;
}

export class PrismaRequestsRepository implements IRequestsRepository {
;
  
  async create({ userId, type, comment, screenshot }: IRequestCreateData): Promise<IDataRequestModel> {
    const request = await prisma.request.create({
      data: {
        userId,
        type,
        comment,
        screenshot,

      },
    }).then((request) => request as IDataRequestModel);

    return request;
  }

  async getAll(): Promise<IDataRequestModel[]> {
    const requests = await prisma.request.findMany().then((requests) => requests as IDataRequestModel[]);
    return requests;
  }

  async getById(id: string): Promise<IDataRequestModel> {
    const request = await prisma.request.findUnique({where: {id}}).then((request) => request as IDataRequestModel);
    return request;
  }

  async getByType(type: string): Promise<IDataRequestModel[]> {
    const requests = await prisma.request.findMany({where: {type}}).then((requests) => requests as IDataRequestModel[]);
    return requests;
  }

  async update(id: string, comment: string): Promise<IDataRequestModel> {
    const request = await prisma.request.update({
      where: {id},
      data: {
        comment
      }
    }
    ).then((request) => request as IDataRequestModel);
    return request;
}

  async delete(id: string): Promise<void> {
    await prisma.request.delete({
      where: {id}
    })
}


}