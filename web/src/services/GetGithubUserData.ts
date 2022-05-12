import axios from "axios";


export const getGithubData = async (username:string) => {
  
  if(!username) {
    return {
      data: null,
      type:"error",
      message: "nome de usuário não informado"
    }
  }

  try {
    const response = await axios.get(`https://api.github.com/users/${username}`).then(res => res.data);

    if(!response?.name){
      return {
        data: null,
        type:"error",
        message: "usuário não encontrado"
      }
    }
    return {
      data: response,
      type:"success",
      message: "Usuário Localizado. Preencha os dados e finalize o seu cadastro"
    }
    
  } catch (error) {
    return {
      data: null,
      type:"error",
      message: "jusuário não encontrado"
    }
  }
  
 
};