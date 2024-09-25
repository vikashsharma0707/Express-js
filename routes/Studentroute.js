const express = require("express");
const route = express.Router();
route.get("/stuinfo",(req,res)=>{
    res.send("<h1> This is stu infor")
})

route.get("/stufees",(req,res)=>{
    res.send("<h1> This is stufees")
})

route.get("/sturesult",(req,res)=>{
    res.send("<h1> This is stu result")
})

route.get("/stuobject",(req,res)=>{
    res.send("<h1> This is stu object")
})

module.exports=route