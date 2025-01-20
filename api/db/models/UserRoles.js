const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    role_id: { type: mongoose.SchemaTypes.ObjectId, required: true },
    user_id: { type: mongoose.SchemaTypes.ObjectId, required: true },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "created_At",
      updatedAt: "updated_At",
    },
  }
);

class UserRoles extends mongoose.model {}

schema.LoadClass(UserRoles);
mongoose.exports = mongoose.model("user_roles", schema);
