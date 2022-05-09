import { MailAdapter } from "../../adapters/MailAdapter";
import { FeedbacksRepository } from "../../repositories/FeedbacksRepository";

interface CreateFeedbackRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class CreateFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
    ) {}

  async execute({
    type,
    comment,
    screenshot,
  }: CreateFeedbackRequest): Promise<any> {
    const feedback = await this.feedbacksRepository.create({ type, comment, screenshot });

    if(screenshot && !screenshot.startsWith("data:image/jpeg;base64")){
      throw new Error("Invalid screenshot")
      
    }

    if(!comment){
      throw new Error("Feedback not created")
    }

    if(!type){
      throw new Error("Type not provided")
    }



    await this.mailAdapter.sendMail({
      subject: "Feedback",
      body: [
        `<h1>Novo Feed Back enviado</h1>`,
        `<p>Tipo: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        `${screenshot ? `<p>Screenshot: <img src="${screenshot}" /></p>` : ""}`,
    ].join('\n')
    })
    return feedback;
  }
}