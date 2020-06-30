const express = require('express');
const router = express.Router();

const multer  = require('multer')
const upload = multer({ dest: './public/img/users/' })

const validate = require('../validate/users.validate.js');
const controllers = require('../controllers/users.controller.js');

router.get('/',controllers.users);
router.get('/create',controllers.create);
router.post('/create',upload.single('avatar'),validate.create_users,controllers.create_post);
router.get('/search',controllers.search);
router.get('/:id',controllers.view);
router.delete('/:id/delete',controllers.delete);

module.exports=router;