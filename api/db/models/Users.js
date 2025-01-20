const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    is_Active: { type: Boolean, default: true },
    first_Name: String,
    last_Name: String,
    phone_Number: String,
  },
  {
    timestamps: {
      createdAt: "created_At",
      updatedAt: "updated_At",
    },
  }
);

class Users extends mongoose.model {}

schema.LoadClass(Users);
mongoose.exports = mongoose.model("users", schema);
