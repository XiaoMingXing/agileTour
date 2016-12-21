var express = require('express');
var path = require('path');
var fs = require('fs');
var http = require('http');
var tls = require('tls');
var request = require("request");
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./config')();
var db = require('./scripts/models/db');

var app = express();
app.set('port', process.env.PORT || 8080);

//cros
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// view engine setup
/*app.set('views', path.join(__dirname, 'views'));
 app.set('view engine', 'ejs');*/

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'resources')));
app.use(express.static(path.join(__dirname, 'resources')));

//register routes
var ctrlFolder = './scripts/controllers', PROJECT_PREFIX = '/cost/rest';
registerRoutes(ctrlFolder);
function registerRoutes(folder) {
    fs.readdirSync(folder).forEach(function (file) {
        var filePath = folder + "/" + file;
        if (fs.lstatSync(filePath).isDirectory()) {
            registerRoutes(filePath);
        }
        else {
            if (filePath.lastIndexOf('.js') === -1) {
                return;
            }
            var key = filePath.replace('.js', '')
                , route = require(key);
            if (key.endsWith("index")) {
                key = key.replace("/index", '');
            }
            app.use(key.replace(ctrlFolder, PROJECT_PREFIX), route);
        }
    });
}

http.createServer(app).listen(config.port, function () {
    console.log('Express server listening on port ' + config.port);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send(err);
});

module.exports = app;
