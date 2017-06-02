const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const app = new (express)()
const port = 3000
//hello
//test
app.use(cookieParser())
app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies

app.set('views', './src/ejs')
app.set('view engine', 'ejs')

const indexController = require('./src/controllers/index')
app.get('/', indexController.default)


// Вот смотри, здесь ты можешь еще и id принимать который в url (не обязательно его называть id)
// Далее иди ./src/controllers/foundation
// Этот блок описывает как express реагирует на роутинг
const foundationController = require('./src/controllers/foundation')
app.get('/foundation/:id?', foundationController.default)

const parkingController = require('./src/controllers/parking')
app.get('/parking/:id?', parkingController.default)

const RoadController = require('./src/controllers/road')
app.get('/road/:id?', parkingController.default)

const notFoundController = require('./src/controllers/notfound')
app.get('/:id?', notFoundController.default)

app.use(express.static(__dirname + '/static'))

app.get('*', function(request, response){
  response.sendFile(__dirname + '/static/index.html')
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})



// var express = require('express');
// var app = express();
// var path = require('path');

// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var index = require('./routes/index');
// var users = require('./routes/users');

// app.get('/', function (req,res,next) {
// 	res.render('index');
// })

// app.get('/shipment', function (req,res,next) {
// 	res.render('shipment');
// })

// app.get('/foundation', function (req,res,next) {
// 	res.render('foundation');
// })

// app.get('/parking', function (req,res,next) {
// 	res.render('parking');
// })

// app.get('/road', function (req,res,next) {
// 	res.render('road');
// })

// app.get('/var1', function (req,res,next) {
// 	res.render('var1');
// })

// app.get('/test', function (req,res,next) {
// 	res.render('test');
// })

// // mail
// const nodemailer = require('nodemailer');

// var router = express.Router();
// app.use('/sayHello',handleSayHello);
// router.post('/', handleSayHello); // handle the route at yourdomain.com/sayHello

// function handleSayHello(req, res) {
// 	// Not the movie transporter!

// 	var message = {
// 		from: 'kurganovk@gmail.com',
// 		to: 'ihoooly@gmail.com',
// 		subject: 'Message title',
// 		text: 'Test mail',
// 	};

// 	smtpConfig = {
// 		host: 'smtp.gmail.com',
// 		port: 587,
// 		secure: false, // upgrade later with STARTTLS
// 		auth: {
// 			user: 'kurganovk@gmail.com',
// 			pass: '29069547kostya'
// 		}
// 	};

// 	var transport = nodemailer.createTransport( smtpConfig);
// 	transport.sendMail(message, function(error, info){
// 			if(error){
// 					console.log(error);
// 					res.json({yo: 'error'});
// 			}else{
// 					console.log('Message sent: ' + info.response);
// 					res.json({yo: info.response});
// 			};
// 	});
// 	res.render('var1');
// }

// // view engine setup
// app.engine('ejs',require('ejs-locals'));
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', index);
// app.use('/users', users);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
// 	var err = new Error('Not Found');
// 	err.status = 404;
// 	next(err);
// });

// // error handler
// app.use(function(err, req, res, next) {
// 	// set locals, only providing error in development
// 	res.locals.message = err.message;
// 	res.locals.error = req.app.get('env') === 'development' ? err : {};

// 	// render the error page
// 	res.status(err.status || 500);
// 	res.render('error');
// });

// module.exports = app;
