const express = require('express');
const cors = require('cors');//api su dung bat ky dau
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

/* connect mongoose */
const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true})
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB database connection established successfully");
})

/* Router */
const userRouter=require('./router/user.router.js');
app.use('/user',userRouter);

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
})
