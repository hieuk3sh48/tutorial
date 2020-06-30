require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true });
app.set('view engine','pug');
app.set('views','./views');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

/*app.use(express.static('./dist'));
app.get('/',(req,res)=>{
  res.sendFile('index.html');
})*/

const router_home = require('./routers/home.router.js');
const router_books = require('./routers/books.router.js');
const router_users = require('./routers/users.router.js');
const router_transaction = require('./routers/transaction.router.js');
const router_api_users = require('./api/routers/users.router.js');
const router_api_transaction = require('./api/routers/transaction.router.js');

app.use('/api/users',router_api_users);
app.use('/api/transaction',router_api_transaction);

app.use('/',router_home);
app.use('/books',router_books);
app.use('/users',router_users);
app.use('/transaction',router_transaction);

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

