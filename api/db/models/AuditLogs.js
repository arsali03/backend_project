const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    level: String,
    email: String,
    location: String,
    proc_type: String,
    log: String,
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "created_At",
      updatedAt: "updated_At",
    },
  }
);

class AuditLogs extends mongoose.model {}

schema.LoadClass(AuditLogs);
mongoose.exports = mongoose.model("audit_logs", schema);
