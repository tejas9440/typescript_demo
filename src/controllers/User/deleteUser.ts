import { Request, Response } from "express";
import { IUser } from "./user.class";
import { pool } from "../../service/database/index";

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await pool.query<IUser>(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error: any) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: error.message });
  }
};
