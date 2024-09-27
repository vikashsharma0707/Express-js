


const express =require("express");
const app = express();
const StuRoute = require("./routes/Studentroute")

app.use("/students",StuRoute);


app.listen(8005,()=>{
    console.log("server is running in 8005")
})