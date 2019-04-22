const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product',{
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const {title, imageUrl, description, price} = req.body;
  console.log(`${title} - ${imageUrl} - ${description} - ${price}`);
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll( products => {
    console.log(products.length)
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: 'admin/products'
    });
  });
};