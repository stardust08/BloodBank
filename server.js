const express = require("express");
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors'); 
 //dot config

dotenv.config();

//mongodb connection
require("./config/db");

//rest object
const app = express();

//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

//routes
app.get('/',(req, res)=>{
 res.status(200).json({
    message: "welcome to blood bank"
 })
});

//port
 const PORT = process.env.PORT || 8080;

 app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.DEV_MODE} on port ${process.env.PORT}`);
 });

 