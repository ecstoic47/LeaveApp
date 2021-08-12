const mongoose = require("mongoose");

const desigSchema = mongoose.Schema(
  {
    designationtName: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Designation", desigSchema);
