import { userRepo } from "../../Repository/userRepo";
import { Request, Response } from "express";
import { User } from "../../Entities/User";

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const users: User[] = await userRepo.find();
    res.status(200).json(users);
  } catch (error: any) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ message: error.message });
  }
};
