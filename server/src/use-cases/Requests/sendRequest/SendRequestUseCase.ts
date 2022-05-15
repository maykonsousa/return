import {inject, injectable} from 'tsyringe'
import { IRequestsRepository } from "../../../repositories/RequestsRepository";
import {NodemailerMailAdapter} from '../../../adapters/nodemailer/nodemailer-mail-adapter'


interface SendRequestUseCaseDTO {
  userId: string;
  type: string;
  message: string;
  screenshot?: string;
}
@injectable()
export class SendRequestUseCase {
  constructor(
    @inject('RequestsRepository')
    private requestRepository: IRequestsRepository,
  ) {}

  async execute(requestData: SendRequestUseCaseDTO) {
    const { userId, type, message, screenshot } = requestData;

    const nodemailerMailAdapter = new NodemailerMailAdapter();
    

    if(!userId) {
      throw new Error('User id is required');
    }

    if (!type) {
      throw new Error('Type is required.');
    }

    if (!message) {
      throw new Error('message is required.');
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format.');
    }

    const request = await this.requestRepository.create({
      userId,
      type,
      message,
      screenshot,
    });

    await nodemailerMailAdapter.sendMain({
      subject: 'Novo feedback',
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
        
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${message}</p>`,
        screenshot ? `<img src="${screenshot}" width={320} />` : ``,
        `</div>`,
      ].join('\n'),
    });

    return request;
  }
}
