import express from 'express';
import { SendRequestController } from './use-cases/Requests/sendRequest/SendRequestController';
import { CreateUserController } from './use-cases/Users/CreateUserUseCase/CreateUserController';
import { GetUsersController } from './use-cases/Users/GetUsersUserCase/GetUsersController';



export const routes = express.Router();

const sendRequestController = new SendRequestController();
const createUserController = new CreateUserController();
const getusersController = new GetUsersController();

//create a new request
routes.post('/requests', sendRequestController.handle);


routes.post('/users', createUserController.handle);
routes.get('/users', getusersController.handle);


