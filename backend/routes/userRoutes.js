const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const AuthMiddleware = require('../middleware/authMiddleware');

router
  .route('/')
  .post(UserController.registerUser)
  .get(
    AuthMiddleware.protect,
    AuthMiddleware.isAdmin,
    UserController.getAllUsers
  );
router.route('/login').post(UserController.authUser);
router
  .route('/profile')
  .get(AuthMiddleware.protect, UserController.getUserProfile)
  .put(AuthMiddleware.protect, UserController.updateUserProfile);

  router
    .route('/:id')
    .delete(
      AuthMiddleware.protect,
      AuthMiddleware.isAdmin,
      UserController.deleteSingleUser
    )
    .get(
      AuthMiddleware.protect,
      AuthMiddleware.isAdmin,
      UserController.getUserById
    )
    .put(
      AuthMiddleware.protect,
      AuthMiddleware.isAdmin,
      UserController.updateUser
    );

module.exports = router;
