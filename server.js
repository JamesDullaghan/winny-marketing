                    require('babel/register'); // Install `babel` hook
var express       = require('express');
var app           = express();
var path          = require('path');
var flash         = require('connect-flash');
var morgan        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var fs            = require('fs');
var favicon       = require('serve-favicon');

var settings        = require('./config/settings.js');
var secrets         = require('./config/secrets.js');
var port            = process.env.PORT || settings.ports.server;

// ======================================================================
// set up logging

app.use(morgan('dev')); // log every request to the console

// Enable compression
var compression = require('compression');
app.use(compression());

// ======================================================================
// Serve static assets in the public directory. In production serve assets in build as well
//app.use(favicon(path.join(__dirname, '/app/assets/favicon.ico')));

app.use(express.static(path.join(__dirname, 'app/assets')));

if (process.env.NODE_ENV === "production"){
  // In production serve a static directory for the webpack-compiled js and css.
  // In development the webpack dev server handles js and css
  app.use('/build', express.static(path.join(__dirname, '/build')));
}


// ======================================================================
// Launch
app.listen(port);

if (process.env.NODE_ENV !== "production") {
  console.log('Listening on port ' + port);
}
