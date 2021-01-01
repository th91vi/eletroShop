const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.route('/login').get(UserController.authUser);

module.exports = router;
