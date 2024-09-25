const express =require("express");

const route =express.Router();


route.get("/mardetail",(req,res)=>{
  res.send("<h1>This is marinfor detail")
})

route.get("/marbanner",(req,res)=>{
    res.send("<h1>This is marinfor banner")
  })

  route.get("/martv",(req,res)=>{
    res.send("<h1>This is marinfor tv")
  })

  route.get("/marnewspaper",(req,res)=>{
    res.send("<h1>This is marinfor newspaper")
  })

module.exports=route;