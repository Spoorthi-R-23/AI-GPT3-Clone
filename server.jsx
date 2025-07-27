const express=require('express');
const morgan =require('morgan');
const cors=require('cors');
const bodyParser=require('body-parser');
const dotenv=require("dotenv");
const connectDB = require('./config/db.jsx');
const errorHandler = require('./middlewares/errorMiddleware.js');
const colors=require('colors');

//routes path
const authRoutes=require('./routes/authRoutes.js');

//dotenv
dotenv.config();

// mongo connetion
connectDB();

//rest object
const app=express();

//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));
app.use(errorHandler);

const PORT=process.env.PORT || 8080;

//api routes
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/openai', require("./routes/openaiRoutes"));

//listen server
app.listen(8080,()=>{
    console.log(`Server running in ${process.env.DEV_MODE}mode on port no ${PORT}`.bgCyan.white);
});