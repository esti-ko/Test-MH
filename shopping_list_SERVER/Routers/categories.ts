import express, { Express, Request, Response , Application } from 'express';
const categories=require("../Controllers/categories");
const router=express.Router();

router.route("/get").get(async function(req:Request,resp:Response){
    let data=await categories.get();
    console.log('aaaaaaaaaa',data)
    return resp.json(data);
})

module.exports=router;