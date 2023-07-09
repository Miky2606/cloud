import { Request, Response } from "express";
import { adapterLogin, adapterSignin } from "./auth.adapter";
import { connect } from "../../db/connect.db";
import User from "./auth.schema.db";
import { createToken, verifyToken } from "../../jwt/jwt";
import { compare, hash } from "./encrypt.pwd";

export const authSignin = async (req: Request, res: Response) => {
  try {
    await connect();
    const request = adapterSignin(req.body);
    const findUser = await User.find({
      $or: [{ email: request.email }, { user: request.user }],
    });
    if (findUser.length > 0)
      return res.status(401).json({
        message: "User Exist",
      });
    request.password = await hash(request.password);
    const create_user = new User(request);
    const created = await create_user.save();
    const token = await createToken(created.id, "1w");
    res.json({ message: "User Created", token: token });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const authLogin = async (req: Request, res: Response) => {
  try {
    connect();
    const request = adapterLogin(req.body);
    const find_user = await User.find({ email: request.email });

    if (find_user.length === 0)
      return res.status(404).json({
        message: "User not exist",
      });

    const comparePassword = await compare(
      request.password,
      find_user[0].password
    );

    if (comparePassword === false)
      return res.status(401).json({ message: "Password incorrect" });

    const token = await createToken(find_user[0].id, "1w");

    res.status(200).json({ message: "Access Success", token: token });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const userGet = async (req: Request, res: Response) => {
  try {
    connect();
    if (req.headers.bearer === undefined)
      return res.status(400).json({
        message: "Token undefined",
      });

    const verified = await verifyToken(req.headers.bearer as string);
    if (verified === null)
      return res.status(404).json({
        message: "Error with the Token",
      });
    const user_find = await User.findById(verified.id, { password: 0 });
    res.status(200).json({
      message: user_find,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
