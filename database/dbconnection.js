import mongoose from "mongoose";


 const  dbconnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbname:"RESTORENT"
    }).then(()=>{
        console.log("connected to database successfully");
    }).catch(err=>{
        console.log(`some error accured while connecting ${err}`);
    });
};


export default dbconnection;