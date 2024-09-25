const express =require("express");
const route =express.Router();

route.get("/emplist",(req,res)=>{
   res.send("<h1>This is employee list")
})

route.get("/empdetail",(req,res)=>{
    res.send("<h1>This is employee detail ")
 })

 route.get("/empsalary",(req,res)=>{
    res.send("<h1>This is employee salary")
 })

 route.get("/empinfo",(req,res)=>{
    res.send("<h1>This is employee info")
 })

module.exports = route;


