import { Router } from "express";
import { verified } from "../middleware/verified";
import { authSchema, authSchemaLogin } from "../controllers/auth/auth.schema";
import {
  authLogin,
  authSignin,
  userGet,
} from "../controllers/auth/auth.controller";

const route = Router();

route.post("/signin", verified(authSchema, authSignin));
route.post("/login", verified(authSchemaLogin, authLogin));
route.get("/user", userGet);

export default route;
