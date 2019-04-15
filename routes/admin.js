const express = require('express');
const path = require('path');

const router = express.Router();

// /admin => GET
router.get('/add-product',(req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

// /admin => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body)
  res.redirect('/');
});

module.exports = router;