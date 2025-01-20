const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    role_name: { type: String, required: true },
    is_Active: { type: Boolean, default: true },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "created_At",
      updatedAt: "updated_At",
    },
  }
);

class Roles extends mongoose.model {}

schema.LoadClass(Roles);
mongoose.exports = mongoose.model("roles", schema);
