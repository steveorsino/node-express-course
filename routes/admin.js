const express = require('express');
const path = require('path');

const rootDir = require('../util/path')

const router = express.Router();

const products = [];

// /admin => GET
router.get('/add-product',(req, res, next) => {
  res.render('add-product',{
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
});

// /admin => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  products.push( { title: req.body.title } );
  res.redirect('/');
});

exports.routes = router;
exports.products = products;