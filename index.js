var express = require("express")
var app=express();

app.get("/",(req,res)=>{
   res.send("<h1> Home page")
})

app.get("/about",(req,res)=>{
    res.send("<h1> about page")
 })

 app.get("/contact",(req,res)=>{
    res.send("<h1> contact page")
 })

 app.listen(2000);
