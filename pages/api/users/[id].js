import dbConnect from "../../../lib/dbConnect";

import User from "../../../models/user";

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();

  const user = await User.findOne({ _id: id });

  // console.log(user);
  res.status(200).json({ status: "ok", user: user });
}
