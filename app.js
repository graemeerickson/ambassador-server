require('dotenv').config();
var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var expressJWT = require('express-jwt');
var favicon = require('serve-favicon');
var logger = require('morgan');
var mongoose = require('mongoose');
var path = require('path');
var app = express();

// Mongoose connect
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/ambassador');

// Set up middleware
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// Controllers
app.use('/auth', expressJWT({
  secret: process.env.JWT_SECRET,
  getToken: function fromRequest(req) {
    if (req.body.headers && req.body.headers.Authorization && req.body.headers.Authorization.split(' ')[0] === 'Bearer') {
      return req.body.headers.Authorization.split(' ')[1];
    }
    return null;
  }
}).unless({
  path: [
    { url: '/auth/login', methods: ['POST'] },
    { url: '/auth/signup', methods: ['POST'] }
  ]
}), require('./routes/auth'));

app.use('/user', require('./routes/user'));
app.use('/ambassadors', require('./routes/ambassadors'));

// module.exports = app;
app.listen(process.env.PORT || 3001);
