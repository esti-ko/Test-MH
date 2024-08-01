import * as mongooseLibrary from "mongoose";
const mongoose = mongooseLibrary;

interface IProduct {
    name?: String
    category?: String
    quantity?: Number
 }
const Schema = mongoose.Schema;

const productSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    category: { type: String, required: true },
    quantity: Number
  });
let orderSchema=new Schema({
    order: [productSchema]
})

module.exports =mongoose.model('orders',orderSchema);