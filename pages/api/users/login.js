import dbConnect from "../../../lib/dbConnect";
import jwt from "jsonwebtoken";

import bcryptjs from "bcryptjs";

import UserAuth from "../../../models/userAuth";

const JWT_ACCESS_SECRET = process.env.ACCESS_SECRET;
const JWT_REFRESH_SECRET = process.env.REFRESH_SECRET;

export default async function handler(req, res) {
  const { username, password } = req.body;

  await dbConnect();

  // Find user from database
  const user = await UserAuth.findOne({ username }).lean();

  const userData = { id: user._id, username: user.username };

  // Check if user exists
  if (!user) {
    return res
      .status(401)
      .json({ status: "error", error: "Invalid Username/Password" });
  }

  // JWT Generation
  if (await bcryptjs.compare(password, user.password)) {
    // generate access-token
    const accessToken = await jwt.sign(userData, JWT_ACCESS_SECRET, {
      expiresIn: "10m",
    });
    console.log("Access-Token: ", accessToken);

    // generate refresh-token
    const refreshToken = await jwt.sign(userData, JWT_REFRESH_SECRET);
    await UserAuth.findOneAndUpdate(
      { username: username },
      { refreshToken: refreshToken }
    );

    console.log("Refresh-Token: ", refreshToken);

    return res.json({
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
  }
}
