import { inject, injectable } from "tsyringe";
import { IRequestsRepository } from "../../../repositories/RequestsRepository";



interface deleteRequestUseCaseDTO {
  userId: string;
  requestId: string;
}
@injectable()
export class DeleteRequestUseCase {
  constructor(
    @inject("RequestsRepository")
    private feedbackRepository: IRequestsRepository,
  ) {}
   
  async execute({userId, requestId}: deleteRequestUseCaseDTO) {
   

    if(!userId) {
      throw new Error('User id is required');
    }

    if(!requestId) {
      throw new Error('Request id is required');
    }

    const request = await this.feedbackRepository.getById(requestId);
    const userIsOwner = request.userId === userId;

    if(!userIsOwner) {
      throw new Error('User is not owner of this request');
    }

    try {
      await this.feedbackRepository.delete(requestId);
    } catch (error) {
      throw new Error('Error deleting request');
    }

    
  
   
  }
}
