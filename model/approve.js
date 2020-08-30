var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://prachya:prachya@cluster0.8ztqc.mongodb.net/test';
mongoose.connect(mongoDB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongodb Connect Error'));

var approveSchema = mongoose.Schema({
    username: {
        type: String
    },
    trustby: {
        type: String
    },
    status: {
        type: String
    }
});

var Approve = module.exports = mongoose.model('approve', approveSchema)

