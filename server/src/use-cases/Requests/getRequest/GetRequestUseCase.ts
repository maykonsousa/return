import { inject, injectable } from "tsyringe";
import { IDataRequestModel, IRequestsRepository } from "../../../repositories/RequestsRepository";


@injectable()
export class GetRequestUseCase {
  constructor(
    @inject("RequestsRepository")
    private requestRepository: IRequestsRepository
    ) {}

    async execute(userId: string): Promise<IDataRequestModel[]> {
      try {
        const requests = await this.requestRepository.getByUserId(userId);
        return requests;
      } catch (error) {
        throw new Error("Request not found");
      }
}
}