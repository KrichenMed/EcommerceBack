const mongoose = require("mongoose");

const connect=async()=>{
   try {
    await  mongoose.connect(process.env.DBlink)
    console.log("connected to db!")
   } catch (error) {
    console.log(error)
   }
}
module.exports=connect


