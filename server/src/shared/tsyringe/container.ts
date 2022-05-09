import {container} from 'tsyringe';
import { PrismaRequestsRepository } from '../../repositories/prisma/PrismaRequestsRepository';
import { IRequestsRepository } from '../../repositories/RequestsRepository';

container.registerSingleton<IRequestsRepository>("RequestsRepository", PrismaRequestsRepository);