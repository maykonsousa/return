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
    console.log(response)
  } catch (error) {
    console.log("deu erro")
  }
}