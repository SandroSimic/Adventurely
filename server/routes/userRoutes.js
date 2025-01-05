import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";
//import generateToken from "../utils/generateToken.js";

const router = express.Router();

router.route("/registerUser").post(registerUser);

router.route("/login").post(loginUser);

export default router;
