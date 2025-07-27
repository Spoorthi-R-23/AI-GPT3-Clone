const mongoose =require('mongoose');


const connectDB=async()=>{
    try{
        console.log('MONGO_URI:', process.env.MONGO_URI)
        await mongoose.connect(process.env.MONGO_URI,{
             useNewUrlParser: true,
             useUnifiedTopology: true,
        })
        console.log(`Connected to MongoDB database:${mongoose.connection.host}`.bgGreen.white)

    }catch(error){
        console.log(`Mongodb Database error:${error}`.bgRed.white)
    }
}
module.exports= connectDB