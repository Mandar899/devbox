const mongoose = require("mongoose");

const userAuthSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    refreshToken: {
      type: String,
      required: true,
    },
  },
  {
    //   Renames the collection
    collection: "userAuth",
  }
);

const userAuthModel =
  mongoose.models.userAuthSchema ||
  mongoose.model("userAuthSchema", userAuthSchema);

export default userAuthModel;
