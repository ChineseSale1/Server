const mongoose= require("mongoose");

const userSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId(),
    user_first_name:{type:String,match:/[a-z A-Z]/},
    user_last_name:{type:String,match:/[a-z A-Z]/},
    user_phone:{type:String,match:/[0-9]{9,11}/},
    arr_orders: [new mongoose.Schema({
        item_id:{type:Number},
    item_name:{type:String,match:/ [A-Za-z]/},
    item_description:{type: String},
    price:{type:Number,match:/ ^[1-9] /}
    })]
}) 
const User=Schema.model("users",userSchema);
module.exports(User,userSchema);