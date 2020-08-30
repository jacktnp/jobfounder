var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
// var mongoDB = 'mongodb://heroku_lwm9jxrl:v8fcf7uit1atnevvoclg3n37o3@ds235065.mlab.com:35065/heroku_lwm9jxrl';
var mongoDB = 'mongodb+srv://prachya:prachya@cluster0.8ztqc.mongodb.net/test';
mongoose.connect(mongoDB, {
    useNewUrlParser: true
})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongodb Connect Error'));

var userSchema = mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    fname: {
        type: String
    }, 
    lname: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    citizenid: {
        type: String
    },
    description: {
        type: String
    },
    profile_img: {
        type: String
    },
    role: {
        type: String
    }
});

var User = module.exports = mongoose.model('user', userSchema)


module.exports.createUser = function (newUser, callback) {
    // --------------------encrypt-----------------------------------
    var bcrypt = require('bcryptjs');
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(newUser.password, salt, function (err, hash) {
            // Store hash in your password DB.
            console.log("Userrrr")
            newUser.password = hash;
            newUser.save(callback)
        });
    });
    // -------------------------------------------------------s
}


module.exports.getMember = function (callback, limit) {
    // --------------------find-----------------------------------
    User.find(callback).limit(limit)
    // -------------------------------------------------------s
}

module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
}

module.exports.getUserByName = function (name, callback) {
    var query = {
        username: name
    }
    User.findOne(query, callback)
}

module.exports.comparePassword = function (password, hash, callback) {
    bcrypt.compare(password, hash, function (err, isMatch) {
        callback(null, isMatch)
    })
}


module.exports.countNumber01 = function (callback) {
    User.count(callback)


}


