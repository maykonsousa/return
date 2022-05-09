import express from 'express';
import { EnsureAuthenticated } from './shared/middlewares/EnsureAuthenticated';
import { SendRequestController } from './use-cases/Requests/sendRequest/SendRequestController';
import { AuthenticateUserController } from './use-cases/Users/AuthenticateUserUseCase/AuthenticateUserController';
import { CreateUserController } from './use-cases/Users/CreateUserUseCase/CreateUserController';
import { GetUsersController } from './use-cases/Users/GetUsersUserCase/GetUsersController';



export const routes = express.Router();

const sendRequestController = new SendRequestController();
const createUserController = new CreateUserController();
const getusersController = new GetUsersController();
const authenticateUserController = new AuthenticateUserController();

//create a new request

routes.post('/users', createUserController.handle);
routes.post('/users/session', authenticateUserController.handle);


routes.use(EnsureAuthenticated)
routes.post('/requests', sendRequestController.handle);
routes.get('/users', getusersController.handle);


