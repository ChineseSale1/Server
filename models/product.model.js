const mongoose=require("mongoose");
const productSchema=mongoose.Schema({
    item_name:{type:String,match:/ [A-Za-z]/},
    item_description:{type: String},
    item_price:{type:Number,match:/ ^[1-9] /}
})
//טבלה Product  
const Product=mongoose.model("products",productSchema);
module.exports(Product,productSchema);