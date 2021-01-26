const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orderController');
const AuthMiddleware = require('../middleware/authMiddleware');

router.route('/').post(AuthMiddleware.protect, OrderController.addOrderItems);

module.exports = router;
