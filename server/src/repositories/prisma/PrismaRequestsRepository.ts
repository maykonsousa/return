import { PrismaClientValidationError } from "@prisma/client/runtime";
import { prisma } from "../../prisma";
import { IDataRequestModel, IRequestCreateData, IRequestsRepository } from "../RequestsRepository";

interface UpdateData{
  requestId: string;
  message: string;
}

export class PrismaRequestsRepository implements IRequestsRepository {
  
;
  
  async create({ userId, type, message, screenshot }: IRequestCreateData): Promise<IDataRequestModel> {
    const request = await prisma.requests.create({
      data: {
        userId,
        type,
        message,
        screenshot,

      },
    }).then((request) => request as IDataRequestModel);

    return request;
  }

  async getAll(): Promise<IDataRequestModel[]> {
    const requests = await prisma.requests.findMany().then((requests) => requests as IDataRequestModel[]);
    return requests;
  }

  async getById(id: string): Promise<IDataRequestModel> {
    const request = await prisma.requests.findUnique({where: {id}}).then((request) => request as IDataRequestModel);
    return request;
  }

  async getByType(type: string): Promise<IDataRequestModel[]> {
    const requests = await prisma.requests.findMany({where: {type}}).then((requests) => requests as IDataRequestModel[]);
    return requests;
  }

  async getByUserId(userId: string): Promise<IDataRequestModel[]> {
    const requests = await prisma.requests.findMany({where: {userId}}).then((requests) => requests);
    return requests;
  }

  async update({requestId, message }:UpdateData): Promise<IDataRequestModel> {
    const request = await prisma.requests.update({
      where: {id: requestId},
      data: {
        message
      }
    }
    ).then((request) => request as IDataRequestModel);
    return request;
}

  async delete(id: string): Promise<void> {
    await prisma.requests.delete({
      where: {id}
    })
}


}