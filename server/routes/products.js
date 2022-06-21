const express = require('express');
const { getSingleProduct, getProducts, addProduct, updateProduct, deleteProduct } = require('../controllers/products');
const router = new express.Router();

router.get('/',getProducts)

router.get('/:productId',getSingleProduct)

router.post('/', addProduct)
router.patch('/:productId', updateProduct)
router.delete('/:productId', deleteProduct)

module.exports = router;