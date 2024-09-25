const express = require("express");

const app=express();

const stuRoute =require("./routes/Studentroute");
const tecroute =require("./routes/Teacherrouter")


app.use("/students/",stuRoute);
app.use("/teacher",tecroute)


app.listen(8001,()=>{
    console.log("server is running");
})
