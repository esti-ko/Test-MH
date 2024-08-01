const mongoose=require("mongoose");

let Schema=new mongoose.Schema(
    {
     "name":String
    } ,{versionKey:false}
)

module.exports =mongoose.model('Categories',Schema);
