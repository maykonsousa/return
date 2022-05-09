import {inject, injectable} from 'tsyringe'
import { IRequestsRepository } from "../../../repositories/RequestsRepository";
import {NodemailerMailAdapter} from '../../../adapters/nodemailer/nodemailer-mail-adapter'


interface SendRequestUseCaseDTO {
  userId: string;
  type: string;
  comment: string;
  screenshot?: string;
}
@injectable()
export class SendRequestUseCase {
  constructor(
    @inject('RequestsRepository')
    private requestRepository: IRequestsRepository,
  ) {}

  async execute(requestData: SendRequestUseCaseDTO) {
    const { userId, type, comment, screenshot } = requestData;

    const nodemailerMailAdapter = new NodemailerMailAdapter();
    

    if(!userId) {
      throw new Error('User id is required');
    }

    if (!type) {
      throw new Error('Type is required.');
    }

    if (!comment) {
      throw new Error('Comment is required.');
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format.');
    }

    const request = await this.requestRepository.create({
      userId,
      type,
      comment,
      screenshot,
    });

    await nodemailerMailAdapter.sendMain({
      subject: 'Novo feedback',
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
        
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        screenshot ? `<img src="${screenshot}" width={320} />` : ``,
        `</div>`,
      ].join('\n'),
    });

    return request;
  }
}
