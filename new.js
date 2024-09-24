var express= require("express");
var app =express();

app.get("/",(req,res)=>{
   res.send("<h1>This is express js program ");
})

app.listen(1000)