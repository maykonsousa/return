import { api } from "../lib/api";

interface CreateUserdataRequest {
  name: string;
  email: string;
  password: string;
  username: string;
}


export const CreateuserService = async ({name, username, email, password}:CreateUserdataRequest) =>{
    try {
      const newUser = await api.post('/users', {
        name,
        username,
        email,
        password
      })
      return {status: "success", data: newUser.data, message: "Usuário criado com sucesso. Redirecionando para página de login"}
    
    } catch (error) {
    
      if(error instanceof Error){
        return {status: "error", data: null, message:"Falha na criação do usuário. Verifique os dados e tente novamente."}
     }
      return {status: "error", data: null, message: "Erro ao criar usuário"}
  }
}



