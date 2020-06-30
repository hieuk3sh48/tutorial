const express = require('express');
const router = express.Router();

const multer  = require('multer')
const upload = multer({ dest: './public/img/books/' })

const validate = require('../validate/books.validate.js');
const controllers = require('../controllers/books.controller.js');

router.get('/',controllers.books);
router.get('/create',controllers.create);
router.post('/create',upload.single('avatar'),validate.create_books,controllers.create_post);
router.get('/search',controllers.search);
router.get('/:id',controllers.view);
router.delete('/:id/delete',controllers.delete);
router.get('/product/:id',controllers.product);

module.exports=router;