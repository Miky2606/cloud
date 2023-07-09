import mongoose from "mongoose";

export const connect = async () => {
  const DB = process.env.DB ?? "";
  try {
    await mongoose.connect(DB);
  } catch (error) {
    throw new Error(`${error}`);
  }
};
