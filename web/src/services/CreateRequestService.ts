import { api } from "../lib/api";

interface IRequestProps{
  type: string;
  message: string;
  screenshot: string | null;

}

export const CreateRequestService = async (data: IRequestProps) => {
  try {
    const response = await api.post('/requests', data);
    return {data: response.data, type: 'success', message:"Requisição enviada com sucesso! Em Breve você receberá um email com a resposta."};
  } catch (error) {
    return {data: null, type: 'error', message: "falha ao enviar requisição. Tente novamente mais tarde."};
  }

}