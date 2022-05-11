import { api } from "../lib/api"

interface IResquestProps {
  email: string;
  password: string;
}

export const LoginUserService = async ({email, password}:IResquestProps) => {
  try {
    const response = await api.post('/users/session', {
      email,
      password
    }).then(res => res.data);
    return {type: "success", data: response, message: "Seja bem-vindo"}
  } catch (error) {
    return {type: "error", data: null, message: "Usuário ou senha inválidos. Verifique se os dados digitados estão corretos"}
  }
}