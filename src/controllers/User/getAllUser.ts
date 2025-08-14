import { Request, Response } from "express";
import { IUser } from "./user.class";
import { pool } from "../../service/database/index";

export const getAll = async (req: Request, res: Response) => {
  try {
    const result = await pool.query<IUser>("SELECT * FROM users");
    res.status(200).json(result.rows);
  } catch (error: any) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: error.message });
  }
};
