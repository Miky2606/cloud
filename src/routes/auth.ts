import { Router } from "express";
import { verified } from "../middleware/verified";
import { authSchema } from "../controllers/auth/auth.schema";
import { authLogin } from "../controllers/auth/auth.controller";

const route = Router();

route.post("/hola", verified(authSchema, authLogin));

export default route;
