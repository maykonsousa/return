import { api } from "../lib/api"


export const GetRequestsService = async ()  => {
  try {
    const response = await api.get("/requests")
    return {data: response.data, message: "Lista de solicitações atualizada com sucesso", type: "success"}
  } catch (error) {
    return {data: null, message: "Erro ao atualizar lista de solicitações", type: "error"}
  }
}