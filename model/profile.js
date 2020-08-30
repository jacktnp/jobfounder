var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://prachya:prachya@cluster0.8ztqc.mongodb.net/test';
mongoose.connect(mongoDB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongodb Connect Error'));

var profileSchema = mongoose.Schema({
    username: {
        type: String
    },
    title:
        { type: String },

    description:{
        type: String
    },
    img:{
        type: String
    },
    descirption:{
        type: String
    },
    trustby:{
        type: String
    }
});

var Profile = module.exports = mongoose.model('profile', profileSchema)

module.exports.getPost = function (callback) {
    // --------------------find-----------------------------------
    Contact.find(callback)
    console.log("hello")
    // console.log( Work.find(callback))
    // -------------------------------------------------------s
}

// module.exports.findPost = function (callback) {
//     var nameds = { name: "project" }
//     Work.find(nameds, callback);
//     console.log("end");
// }
// module.exports.getImageInItem = function (id, callback) {
//     var item = { _id: id }
//     Work.find(item, callback);
//     console.log("item");
// }

// module.exports.deleteItem = function (idx, callback) {
//     item = { _id: idx }
//     Work.remove(item, callback);
// }

// module.exports.countNumber01 = function (callback) {
//     Work.count(callback)

//  }