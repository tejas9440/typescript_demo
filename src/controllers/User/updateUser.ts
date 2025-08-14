import { Request, Response } from "express";
import { IUser } from "./user.class";
import { pool } from "../../service/database/index";

export const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user: IUser = req.body;
    const result = await pool.query<IUser>(
      "UPDATE users SET phoneNo = $1, password = $2 WHERE id = $3 RETURNING *",
      [user.phoneNo, user.password, id]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(result.rows);
  } catch (error: any) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: error.message });
  }
};
