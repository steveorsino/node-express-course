const express = require('express');

const app = express();

//middleware
app.use('/add-product',(req, res, next) => {
  console.log('Add product');
  res.send('<h1>Add Product!<h1>');
});
app.use('/',(req, res, next) => {
  console.log('in another middleware');
  res.send('<h1>Hello from express!<h1>')
});

app.listen(3000)