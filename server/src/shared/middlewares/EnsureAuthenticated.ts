import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { PrismaUsersRepository } from "../../repositories/prisma/PrismaUsersRepository";

interface IPayload {
  sub: string;
}


export const EnsureAuthenticated = async (req:Request, res:Response, next:NextFunction) => {
  const authHeader = req.headers.authorization;
  2
  if(!authHeader){
    return res.status(401).json({error: "Token not provided"});
  }
  const [, token] = authHeader.split(" ");

  try {
    const {sub:user_id} = verify(token, `e91ddb53294154a97d3d0bdb39e75024` ) as IPayload;
    
    const usersRepository = new PrismaUsersRepository();
    const user = await usersRepository.getById(user_id);
    if(!user) {
      return res.status(401).json({error: "User not found"});
    };
    
    req.user = {
      id: user.id,
    }
    
    return next();
    
  } catch (error) {
    res.status(500).json(error);
  }
}