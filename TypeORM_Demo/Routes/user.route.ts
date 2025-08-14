import { Router } from "express";
import { createUser } from "../controller/User/createUser";
import { getAllUser } from "../controller/User/getAllUser";
import { getByIDUser } from "../controller/User/getById";
import { deleteUser } from "../controller/User/deleteUser";
import { updateUser } from "../controller/User/updateUser";

const router = Router();

router.route("/").post(createUser).get(getAllUser);

router.route("/:id").get(getByIDUser).delete(deleteUser).patch(updateUser);

export default router;
