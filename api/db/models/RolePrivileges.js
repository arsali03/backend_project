const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    role_id: { type: mongoose.SchemaTypes.ObjectId, required: true },
    permission: { type: String, required: true },
    created_by: { type: mongoose.SchemaTypes.ObjectId, required: true },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "created_At",
      updatedAt: "updated_At",
    },
  }
);

class RolePrivileges extends mongoose.model {}

schema.LoadClass(RolePrivileges);
mongoose.exports = mongoose.model("role_privileges", schema);
