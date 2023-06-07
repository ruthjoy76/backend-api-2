import express from "express";
import loginControllerr from "../controllers/loginController.js";

const loginRouter = express.Router();

loginRouter.post("/", loginControllerr.login);

export default loginRouter;