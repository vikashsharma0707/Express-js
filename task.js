
const express= require("express")
const app=express();
    
const employee = require("./Task/Employee");
const marketing =require("./Task/Marketing");
const production =require("./Task/Production")
const employ =require("./Task/Employe")

app.use("/Employee",employee);
app.use("/Marketing",marketing);
app.use("/Production",production);
app.use("/Employe",employ)

app.listen(5005,()=>{
 console.log("server is running");
});