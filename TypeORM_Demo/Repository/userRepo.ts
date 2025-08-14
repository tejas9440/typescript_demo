import { AppDataSource } from "../config/db";
import { User } from "../Entities/User";
export const userRepo = AppDataSource.getRepository(User);
