const mongoose=require("mongoose");
//const mongoose.set("strictQuery", true);
module.exports.conecttoMongoDB= async ()=>{
try { 
    mongoose.connect (process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true 
    });
    console.log('connection a la base de données');
}catch (error){
    console.log('Erreur de connection a la base de donnés');
}
}