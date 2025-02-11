var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoryRouter = require('./routes/category');
var productRouter = require('./routes/product');
var orderRouter = require('./routes/order');
var paymentRouter = require('./routes/payment');
var reviewRouter = require('./routes/review');
var wishlistRouter = require('./routes/wishlist');
var cartRouter = require('./routes/cart');

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://shailesh:shailesh123@ecommerce-api-1.3carx.mongodb.net/Ecommerce-API-1')
  .then(() => console.log('Connected!'))
  .catch(error => console.log(error.message))

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/category', categoryRouter);
app.use('/product', productRouter);
app.use('/order', orderRouter);
app.use('/payment', paymentRouter);
app.use('/review', reviewRouter);
app.use('/wishlist', wishlistRouter);
app.use('/cart', cartRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
