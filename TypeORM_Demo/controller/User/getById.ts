import { userRepo } from "../../Repository/userRepo";
import { Request, Response } from "express";
import { User } from "../../Entities/User";

export const getByIDUser = async (req: Request, res: Response) => {
  try {
    const users: User | null = await userRepo.findOneBy({
      id: req.params.id,
    });

    if (!users) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(users);
  } catch (error: any) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ message: error.message });
  }
};
