import { userRepo } from "../../Repository/userRepo";
import { Request, Response } from "express";
import { User } from "../../Entities/User";

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user: User | null = await userRepo.findOneBy({
      id: req.params.id,
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    userRepo.merge(user, req.body);
    const updatedUser: User = await userRepo.save(user);

    res.status(200).json(updatedUser);
  } catch (error: any) {
    console.error("Error fetching user:", error.message);
    res.status(500).json({ message: error.message });
  }
};
