const express = require('express');
const path = require('path');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin => GET
router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);

// /admin => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;