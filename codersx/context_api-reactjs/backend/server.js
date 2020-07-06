const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

/* connect mongoose */
const uri=process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true});
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('MongoDB database connection established successfully')
})
mongoose.Promise=global.Promise;

/* Router */
const productRouter=require('./router/product.router');
app.use('/product',productRouter);

app.listen(port,()=>{
    console.log('Server is running on port: '+port);
})