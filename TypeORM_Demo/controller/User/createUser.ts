import { Request, Response } from "express";
import { userRepo } from "../../Repository/userRepo";
import { User } from "../../Entities/User";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { phoneNo, password } = req.body;
    const user: User = userRepo.create({ phoneNo, password });

    await userRepo.save(user);
    res.status(201).json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
