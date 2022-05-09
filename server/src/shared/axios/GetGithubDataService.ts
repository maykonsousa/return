import { githubApi } from "./Api";

interface GithubUser {

  avatar_url: string;
  bio: string;
  blog: string;
  company: string;
  email: string;
  html_url: string;
  login: string;
  name: string;
    
}


export const GetGithubDataService = async (username: string) => {
  try {
    const result = await githubApi.get<GithubUser>(`/users/${username}`);
  return result.data;

  } catch (error) {
    throw new Error('User not found');
  
  }
}