import express, { Request, Response } from "express";
import cors from "cors";
import { route } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(route);

app.listen("3001", () => {
  console.log("created");
});
