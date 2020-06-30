const express = require('express');
const router = express.Router();

const validate = require('../validate/transaction.validate.js');
const controllers = require('../controllers/transaction.controller.js');

router.get('/',controllers.transaction);
router.get('/create',controllers.create);
router.post('/create',controllers.create_post);
router.get('/search',controllers.search);
router.get('/:id',controllers.view);
router.delete('/:id/delete',controllers.delete);

module.exports=router;