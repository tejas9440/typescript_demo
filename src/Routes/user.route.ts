import { Router } from "express";
const router = Router();
import { getAll } from "../controllers/User/getAllUser";
import { createUser } from "../controllers/User/createUser";
import { getByID } from "../controllers/User/getByID";
import { updateUser } from "../controllers/User/updateUser";
import { deleteUser } from "../controllers/User/deleteUser";

router.route("/").get(getAll).post(createUser);
router.route("/:id").get(getByID).put(updateUser).delete(deleteUser);

module.exports = router;
