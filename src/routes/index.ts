import fs from "fs";
import { Router } from "express";

const route = Router();

const getFile = (name: string) => {
  return name.split(".").shift();
};

fs.readdirSync("./src/routes").filter(async (file) => {
  const name = getFile(file);
  if (name !== "index") {
    const import_get = await import(`./${file}`);

    route.use(`/${name}`, import_get.default);
  }
});

export { route };
