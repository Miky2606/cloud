import express from "express";
import cors from "cors";
import { route } from "./routes";
import { config } from "dotenv";
import multer from "multer";
const app = express();
config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(route);

app.listen("3001", () => {
  console.log("created");
});
