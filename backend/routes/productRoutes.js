const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');
const AuthMiddleware = require('../middleware/authMiddleware');

router.route('/').get(ProductController.getProducts);
router
  .route('/:id')
  .get(ProductController.getProductById)
  .delete(AuthMiddleware.protect, ProductController.deleteProduct);

module.exports = router;
