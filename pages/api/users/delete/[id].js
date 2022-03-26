import dbConnect from "../../../../lib/dbConnect";

import User from "../../../../models/user";

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();

  await User.findOneAndDelete({ _id: id });

  res
    .status(200)
    .json({ status: "ok", message: "User successfully deleted.." });
}
