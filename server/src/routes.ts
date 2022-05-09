import express from 'express';
import { SendRequestController } from './use-cases/Requests/sendRequest/SendRequestController';



export const routes = express.Router();

const sendRequestController = new SendRequestController();

//create a new request
routes.post('/requests', sendRequestController.handle);


