import dbConnect from "../../../lib/dbConnect";

import User from "../../../models/user";

export default async function handler(req, res) {
  await dbConnect();

  const users = await User.find();
  // console.log(users);
  res.status(200).json({ status: "ok", users: users });
}
