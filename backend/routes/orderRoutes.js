const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orderController');
const AuthMiddleware = require('../middleware/authMiddleware');

router.route('/').post(AuthMiddleware.protect, OrderController.addOrderItems);
router.route('/:id').get(AuthMiddleware.protect, OrderController.getOrderById);
router
  .route('/:id/pay')
  .put(AuthMiddleware.protect, OrderController.updateOrderToPaid);

module.exports = router;
