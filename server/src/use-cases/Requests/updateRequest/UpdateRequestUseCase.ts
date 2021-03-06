import { inject, injectable } from "tsyringe";
import { IRequestsRepository } from "../../../repositories/RequestsRepository";

interface IUpdateRequestDTO {
  requestId: string;
  message: string;
  userId: string;
}

@injectable()
export class UpdateRequestUseCase {
  constructor(
    @inject("RequestsRepository")
    private requestRepository: IRequestsRepository
  ) {}
  async execute({requestId, message, userId}: IUpdateRequestDTO) {
    console.log("requestId", requestId);
    const request= await this.requestRepository.getById(requestId);
        if(!request){
      throw new Error("Request not found");
    }
    if(request.userId !== userId){
      throw new Error("You can't update this request");
    }

   
   try {
     const updatedRequest = await this.requestRepository.update({requestId, message});
      return updatedRequest;
   } catch (error) {
     throw new Error("unable to update request");
   }



}
}