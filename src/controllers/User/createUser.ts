import { Request, Response } from "express";
import { IUser } from "./user.class";
import { pool } from "../../service/database/index";

export const createUser = async (req: Request, res: Response) => {
  try {
    const user: IUser = req.body;
    const newUser = await pool.query<IUser>(
      "INSERT INTO users (phoneNo,password) VALUES ($1, $2) RETURNING *",
      [user.phoneNo, user.password]
    );
    res.status(201).json(newUser.rows[0]);
  } catch (error: any) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: error.message });
  }
};
