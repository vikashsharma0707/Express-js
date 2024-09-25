const express =require("express");

const route = express.Router();



route.get("/prodetail",(req,res)=>{
    res.send("<h1>This is production detail")
 });

 route.get("/prosel",(req,res)=>{
    res.send("<h1>This is production sel")
 });

 route.get("/prounit",(req,res)=>{
    res.send("<h1>This is production unit")
 });

 route.get("/prodis",(req,res)=>{
    res.send("<h1>This is production distribution")
 });

module.exports =route; 