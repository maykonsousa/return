import { api } from "../lib/api"



export const DeleteRequestService = async (requestId:string)=>{
  try {
    await api.delete(`/requests/${requestId}`)
    return {data:null, type:"success", message:"Requisição excluída com sucesso"}
  } catch (error) {
    return {data:null, type:"error", message:"Erro ao excluir requisição"}
  }
}