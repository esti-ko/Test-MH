import express, { Express, Request, Response  } from 'express';
const order=require("../Controllers/order");
const router=express.Router();

router.route("/")
.post(async function (req:Request, resp:Response) {
    let body = req.body;
    console.log('AAA',req.body)
    let data = await order.create(body);
    return resp.json(data);
})

module.exports=router;