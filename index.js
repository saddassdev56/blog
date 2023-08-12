const express =require("express");
const app =express(); 
// dotenv
require("dotenv").config({path:"./config/.env"});
// Database 
 require("./config/database").conecttoMongoDB()

 // server 
 app.listen(process.env.PORT, ()=>console.log("Le server toune bien sur le "+ process.env.PORT));
