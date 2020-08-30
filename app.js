var createError = require('http-errors');
var express = require('express');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

//  my import
var bcrypt = require('bcryptjs');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require("swagger-jsdoc");


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


//  ------swagger ------
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Customer API",
      description: "Customer API Information",
      contact: {
        name: "Amazing Developer"
      },
      servers: ["http://localhost:3000"]
    },
  },
  // ['.routes/*.js'] ["app.js"]
  apis:["app.js"]
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
//  ------swagger ------


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




// ----------session login------------------------

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}))
app.use(passport.initialize());
app.use(passport.session());

app.use(require('connect-flash')());
// -------------------------------------
app.get('*', function (req, res, next) {
  res.locals.user = req.user || null;
  next();
});

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

/**
 * @swagger
 * /login:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */


/**
 * @swagger
 * /users/get-all-work:
 *  get:
 *    tags:
 *    - "WORK"
 *    summary: Add a new pet to the store
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */

/**
 * @swagger
 * /users/get-all-member:
 *  get:
  *    tags:
 *    - "Member"
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */



/**
 * @swagger
 * /users/crate-work:
 *  post:
 *    tags:
 *    - "WORK"
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 *    parameters:
 *      - name: "body"
 *        in: "body"
 *        description: "Pet object that needs to be added to the store"
 *        required: true
 *        schema:
 *          properties:
 *            id:
 *              type: string
 *            name:
 *              type: string
 * 
 */


/**
 * @swagger
 * /users/update-work/{id}:
 *  post:
 *    tags:
 *    - "WORK"
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 *    parameters:
 *      - name: "id"
 *        in: "path"
 *        description: "ID of pet to return"
 *        required: true
 *        type: "string"
 *        format: "multi"
 *      - in: "body"
 *        name: "body"
 *        description: "Pet object that needs to be added to the store"
 *        required: true
 *        schema:
 *          properties:
 *            id:
 *              type: string
 *            name:
 *              type: string
 * 
 */




/**
 * @swagger
 * /login:
 *  post:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 *    parameters:
 *     - in: "body"
 *       name: "body"
 *       description: "Pet object that needs to be added to the store"
 *       required: true
 *       schema:
 *          properties:
 *            username:
 *              type: string
 *            password:
 *              type: string
 * 
 */


/**
 * @swagger
 * /register:
 *  post:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 *    parameters:
 *     - in: "body"
 *       name: "body"
 *       description: "Pet object that needs to be added to the store"
 *       required: true
 *       schema:
 *          properties:
 *            username:
 *              type: string
 *            password:
 *              type: string
 * 
 */

/**
 * @swagger
 * /users/create-contact:
 *  post:
*    tags:
 *    - "Contact"
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 *    parameters:
 *     - in: "body"
 *       name: "body"
 *       description: "Pet object that needs to be added to the store"
 *       required: true
 *       schema:
 *          properties:
 *            username:
 *              type: string
 *            company:
 *              type: string
 *            description:
 *              type: string
 *            address:
 *              type: string
 *            tel:
 *              type: string
 *            web:
 *              type: string
 *            img:
 *              type: string
 * 
 */




/**
 * @swagger
 * /users/get-company-data-by-user:
 *  post:
 *    tags:
 *    - "Member"
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 *    parameters:
 *     - in: "body"
 *       name: "body"
 *       description: "Pet object that needs to be added to the store"
 *       required: true
 *       schema:
 *          properties:
 *            username:
 *              type: string
 * 
 */


/**
 * @swagger
 * /users/get-member-by-role:
 *  post:
 *    tags:
 *    - "Member"
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 *    parameters:
 *     - in: "body"
 *       name: "body"
 *       description: "Pet object that needs to be added to the store"
 *       required: true
 *       schema:
 *          properties:
 *            role:
 *              type: string
 * 
 */

/**
 * @swagger
 * /users/search-data:
 *  post:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 *    parameters:
 *     - in: "body"
 *       name: "body"
 *       description: "Pet object that needs to be added to the store"
 *       required: true
 *       schema:
 *          properties:
 *            searchText:
 *              type: string
 * 
 */


/**
 * @swagger
 * /users/create-profile:
 *  post:
 *    tags:
 *    - "Profile"
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 *    parameters:
 *     - in: "body"
 *       name: "body"
 *       description: "Pet object that needs to be added to the store"
 *       required: true
 *       schema:
 *          properties:
 *            username:
 *              type: string
 *            description:
 *              type: string
 * 
 */


/**
 * @swagger
 * /users/approve-profile/{id}:
 *  post:
 *    tags:
 *    - "Profile"
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 *    parameters:
 *      - name: "id"
 *        in: "path"
 *        description: "ID of pet to return"
 *        required: true
 *        type: "string"
 *        format: "multi"
 *      - in: "body"
 *        name: "body"
 *        description: "Pet object that needs to be added to the store"
 *        required: true
 *        schema:
 *          properties:
 *            approve:
 *              type: string
 */



/**
 * @swagger
 * /users/update-profile/{id}:
 *  post:
 *    tags:
 *    - "Profile"
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 *    parameters:
 *      - name: "id"
 *        in: "path"
 *        description: "ID of pet to return"
 *        required: true
 *        type: "string"
 *        format: "multi"
 *      - in: "body"
 *        name: "body"
 *        required: true
 *        schema:
 *          properties:
 *            username:
 *              type: string
 *            description:
 *              type: any
 */

/**
 * @swagger
 * /users/delete-profile/{id}:
 *  post:
 *    tags:
 *    - "Profile"
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 *    parameters:
 *      - name: "id"
 *        in: "path"
 *        description: "ID of pet to return"
 *        required: true
 *        type: "string"
 *        format: "multi"
 */

 /**
 * @swagger
 * /users/get-profile:
 *  get:
  *    tags:
 *    - "Profile"
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */


/**
 * @swagger
 * /users/delete-work/{id}:
 *  post:
 *    tags:
 *    - "WORK"
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 *    parameters:
 *      - name: "id"
 *        in: "path"
 *        description: "ID of pet to return"
 *        required: true
 *        type: "string"
 *        format: "multi"
 */

/**
 * @swagger
 * /users/delete-contact/{id}:
 *  post:
 *    tags:
 *    - "Contact"
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 *    parameters:
 *      - name: "id"
 *        in: "path"
 *        description: "ID of pet to return"
 *        required: true
 *        type: "string"
 *        format: "multi"
 */

/**
 * @swagger
 * /users/update-contact/{id}:
 *  post:
 *    tags:
 *    - "Contact"
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 *    parameters:
 *      - name: "id"
 *        in: "path"
 *        description: "ID of pet to return"
 *        required: true
 *        type: "string"
 *        format: "multi"
 *      - in: "body"
 *        name: "body"
 *        required: true
 *        schema:
 *          properties:
 *            username:
 *              type: any
 *            description:
 *              type: string
 *            address:
 *              type: any
 *            tel:
 *              type: string
 *            email:
 *              type: any
 *            web:
 *              type: string
 *            img:
 *              type: any
 */

 /**
 * @swagger
 * /users/get-all-contact:
 *  get:
 *    tags:
 *    - "Contact"
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */







module.exports = app;
