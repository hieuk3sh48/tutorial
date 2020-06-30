const express = require('express');
const router = express.Router();

const controllers = require('../controllers/users.controller.js');

router.get('/',controllers.get);
router.post('/',controllers.post);
router.put('/:id',controllers.put)
router.delete('/:id',controllers.delete);

module.exports=router;