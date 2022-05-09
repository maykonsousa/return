

import { IRequestsRepository } from '../../repositories/RequestsRepository';

interface deleteRequestUseCaseDTO {
  userId: string;
  requestId: string;
}

export class SendReequestUseCase {
  constructor(
    private feedbackRepository: IRequestsRepository,

  ) {}

  async execute({userId, requestId}: deleteRequestUseCaseDTO) {
   

    if(!userId) {
      throw new Error('User id is required');
    }

    if(!requestId) {
      throw new Error('Request id is required');
    }

    await this.feedbackRepository.delete(requestId);
  
   
  }
}
