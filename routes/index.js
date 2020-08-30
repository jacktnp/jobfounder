var express = require('express');
var router = express.Router();

// -----------------------------------------
var User = require('../model/user');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// -----------------------------------------
const {
  check,
  validationResult
} = require('express-validator');
const user = require('../model/user');
const app = require('../app');



router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});




// ----------------pasport-------------------------
passport.serializeUser(function (user, done) {
  console.log("get serializeUser")
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  console.log("get deserializeUser")
  User.getUserById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy(function (username, password, done) {
  console.log("get LocalStrategy")
  User.getUserByName(username, function (err, user) {
    if (err) throw error;
    if (!user) {
      return done(null, false);
    } else {
      console.log("get have user")
      User.comparePassword(password, user.password, function (err, isMatch) {
        console.log(password)
        console.log(user.password)
        if (err) return err;
        if (isMatch || password === user.password) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
      // return done(null, user);
    }

  });
}));


// -----------------------------------------

// ------------register-----------------------------
router.post('/register', [
  // check('email', 'กรุณาป้อนอีเมล').isEmail(),
  // check('username', 'กรุณาป้อนชื่อของท่าน').not().isEmpty(),
  // check('password', 'กรุณาป้อนรหัสผ่าน').not().isEmpty()
], function (req, res, next) {
  const result = validationResult(req);
  var errors = result.errors;
  //Validation Data
  if (!result.isEmpty()) {
    //Return error to views
    res.render('register', {
      errors: errors
    })
  } else {
    //Insert  Data
    var username = req.body.username;
    var password = req.body.password;
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    var phone = req.body.phone;
    var citizenid = req.body.citizenid;
    var description = req.body.description;
    var profile_img = req.body.profile_img;
    var role = req.body.role;
    var newUser = new User({
      username: username,
      password: password,
      fname: fname,
      lname: lname,
      email: email,
      phone: phone,
      citizenid: citizenid,
      description: description,
      profile_img: profile_img,
      role: role
    });
    const user = User.createUser(newUser, function (err, user) {
      if (err) throw err
    });
    res.send({ status: "success" })
  }
});

// -----------------------------------------


// -----------------login------------------------


router.post('/login', function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    console.log(user)
    if (!user) {
      res.send({ status: "fail" });
    }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      res.send({ status: "success" })
    });

  })(req, res, next);


});
// -----------------------------------------



// -----------------login------------------------


function enSureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.send({ status: "fail" });
  }
}


router.get('/getMember', enSureAuthenticated, async (req, res, next) => {
  User.getMember(function (err, user) {
    if (err) throw err
    res.send(user)
  })
});


// router.get('/login', function (req, res, next) {

//   res.render('login');
// });
router.get('/logout', function (req, res) {
  req.logout();
  res.send({ status: "success" })
});
// -----------------------------------------







module.exports = router;
