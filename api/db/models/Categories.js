const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    is_Active: { type: Boolean, default: true },
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

class Categories extends mongoose.model {}

schema.LoadClass(Categories);
mongoose.exports = mongoose.model("categories", schema);
