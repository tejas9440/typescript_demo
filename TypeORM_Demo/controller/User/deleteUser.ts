import { userRepo } from "../../Repository/userRepo";
import { Request, Response } from "express";

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const result = await userRepo.delete(req.params.id);
    if (result.affected === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User Successfully Deleted!!" });
  } catch (error: any) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ message: error.message });
  }
};
