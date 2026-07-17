const mongoose = require("mongoose");

const historySchema = new mongoose.Schema(
{
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    newsText:{
        type:String,
        required:true
    },

    prediction:{
        type:String,
        required:true
    },

    confidence:{
        type:Number,
        required:true
    }

},
{
    timestamps:true
}
);


module.exports = mongoose.model(
    "History",
    historySchema
);