import {container} from 'tsyringe';
import { PrismaRequestsRepository } from '../../repositories/prisma/PrismaRequestsRepository';
import { PrismaUsersRepository } from '../../repositories/prisma/PrismaUsersRepository';
import { IRequestsRepository } from '../../repositories/RequestsRepository';
import { IUsersRepository } from '../../repositories/UsersRepository';

container.registerSingleton<IRequestsRepository>("RequestsRepository", PrismaRequestsRepository);
container.registerSingleton<IUsersRepository>("UsersRepository", PrismaUsersRepository);