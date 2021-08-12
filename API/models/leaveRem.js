const mongoose = require("mongoose");

const leaveRemSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },

    annualLeaveTaken :{
        type: Number
    },

    casualLeaveTaken :{
        type: Number
    },

    sickLeaveTaken :{
        type : Number
    },

    annualLeaveRem :{
        type: Number,
    },

    casualLeaveRem :{
        type: Number,
    }
  
  },
  { timestamps: true }
);

module.exports = mongoose.model("LeaveRem", leaveRemSchema);