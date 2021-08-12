const mongoose = require ("mongoose");

const leaveInfoSchema = mongoose.Schema(
    {
        applicant:{
            type:String,
        },

        fullname:{
            type:String
        },

        designation:{
            type:String
        },

        department:{
            type:String
        },

        leaveType:{
            type:String,
            required:true

        },

        startDate:{
            type:Date,
            required:true

        },

        endDate:{
            type:Date,
            required:true

        },

        duration:{
            type:Number,
            required:true
        },

        reason:{
            type:String,
            required:true
        },

        location:{
            type:String,
        },
        
        contact:{
            type:String
        },

        approver:{
            type:String,
            required:true
        },

        status:{
            type:String,
            default:"In approval"
        },

        remarks:{
            type:String,
            default:""
        }

    },
    
    { timestamps: true }
);

module.exports = mongoose.model("LeaveInfo", leaveInfoSchema);