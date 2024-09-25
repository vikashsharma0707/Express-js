const express =require("express");

const route =express.Router();

route.get("/teacherinfo",(req,res)=>{
    res.send("<h1>This is teacher infor")
})

route.get("/teacherfees",(req,res)=>{
    res.send("<h1>This is teacher infor")
})

route.get("/teacherresult",(req,res)=>{
    res.send("<h1>This is teacher infor")
})

route.get("/teachersalary",(req,res)=>{
    res.send("<h1>This is teacher infor")
})

module.exports= route;