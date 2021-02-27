const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');
const AuthMiddleware = require('../middleware/authMiddleware');

router
  .route('/')
  .get(ProductController.getProducts)
  .post(
    AuthMiddleware.protect,
    AuthMiddleware.isAdmin,
    ProductController.createProduct
  );
router
  .route('/:id/reviews')
  .post(AuthMiddleware.protect, ProductController.createNewReview);
router
  .route('/:id')
  .get(ProductController.getProductById)
  .delete(AuthMiddleware.protect, ProductController.deleteProduct)
  .put(
    AuthMiddleware.protect,
    AuthMiddleware.isAdmin,
    ProductController.updateProduct
  );

module.exports = router;
