
const express = require('express');
const app = express();

// load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse json body
app.use(express.json());

// cors
const cors = require("cors");
app.use(cors());

// import routes
const userRoutes = require("./routes/user-routes");

// mount routes
app.use("/api/user",userRoutes);

// start server 
app.listen(PORT, () =>{
    console.log(`server started successfully at ${PORT}`);
})

//connect to the database
const dbConnect = require('./config/database');
dbConnect();

app.get('/',(req,res)=>{
    res.send(`<h1>Welcome To MERN Project Jitendriya !!!</h1>`)
})