import { Request, Response } from "express";
import { IUser } from "./user.class";
import { pool } from "../../service/database/index";

export const getByID = async (req: Request, res: Response) => {
  try {
    const result = await pool.query<IUser>(
      "SELECT * FROM users WHERE id = $1",
      [req.params.id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(result.rows[0]);
  } catch (error: any) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: error.message });
  }
};
