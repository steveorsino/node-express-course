const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
//const expressHbs = require('express-handlebars');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// app.engine('hbs', expressHbs({
//   layoutsDir: 'views/layouts',
//   defaultLayout: 'main-layout', //thats the default but this is a demo
//   extname: 'hbs'}));

//app.set('view engine', 'pug'); // if using pug

app.set('view engine', 'hbs'); // if using handlebars

app.set('view engine', 'ejs'); //if using ejs
app.set('views', 'views'); //not needed beacause the views dir is alredy default. For display of feature if dir changed.

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminData.routes);

app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', {path: '', pageTitle: 'Page not found'});
});

app.listen(3000)