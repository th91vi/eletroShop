const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

router.route('/').get(ProductController.getProducts);
router.route('/:id').get(ProductController.getProductById);

module.exports = router;
