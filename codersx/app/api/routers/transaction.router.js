const express = require('express');
const router = express.Router();

const controllers = require('../controllers/transaction.controller.js');

router.get('/',controllers.transaction);

module.exports=router;