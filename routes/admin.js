const express = require('express');
const path = require('path');

const productsController = require('../controllers/products');

const router = express.Router();

// /admin => GET
router.get('/add-product', productsController.getAddProduct);

// /admin => POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;