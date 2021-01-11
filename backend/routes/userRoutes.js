const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const AuthMiddleware = require('../middleware/authMiddleware');

router.route('/login').post(UserController.authUser);
router
  .route('/profile')
  .get(AuthMiddleware.protect, UserController.getUserProfile);

module.exports = router;
