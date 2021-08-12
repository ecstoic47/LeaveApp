const mongoose = require("mongoose");

const deptSchema = mongoose.Schema(
  {
    departmentName: {
      type: String,
      required: true,
      unique: true,
    }
  
  },
  { timestamps: true }
);

module.exports = mongoose.model("Department", deptSchema);