// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../../lib/dbConnect";

import bcrypt from "bcryptjs";

import User from "../../../models/user";
import UserAuth from "../../../models/userAuth";

export default async function handler(req, res) {
  await dbConnect();

  try {
    const { email, password, username } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      username,
    });

    const refreshToken = "randomstring";

    // Sending hashed password in userauth
    await UserAuth.create({
      username: username,
      password: hashedPassword,
      refreshToken: refreshToken,
    });

    // log user
    console.log(user);
    res
      .status(200)
      .json({ status: "ok", message: "User successfully registered..." });
  } catch (err) {
    console.error("Error: ", err);
    res.status(400).json({ status: "error", message: "Error Occured!" });
  }
}
