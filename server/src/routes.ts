import express from 'express';
import { EnsureAuthenticated } from './shared/middlewares/EnsureAuthenticated';
import { SendRequestController } from './use-cases/Requests/sendRequest/SendRequestController';
import { AuthenticateUserController } from './use-cases/Users/AuthenticateUserUseCase/AuthenticateUserController';
import { CreateUserController } from './use-cases/Users/CreateUserUseCase/CreateUserController';
import { GetRequestController } from './use-cases/Requests/getRequest/GetRequestController';
import { UpdateRequestController } from './use-cases/Requests/updateRequest/UpdateResquestController';
import { DeleteRequestController } from './use-cases/Requests/deleteResquest/DeleteRequestController';



export const routes = express.Router();

const sendRequestController = new SendRequestController();
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const getRequestController = new GetRequestController();
const updateRequestController = new UpdateRequestController();
const deleteRequestController = new DeleteRequestController();



routes.post('/users', createUserController.handle);
routes.post('/users/session', authenticateUserController.handle);


routes.use(EnsureAuthenticated)
routes.post('/requests', sendRequestController.handle);
routes.get('/requests', getRequestController.handle);
routes.put('/requests/:requestId', updateRequestController.handle);
routes.delete('/requests/:requestId', deleteRequestController.handle);


