const mongoose = require('mongoose');

const myDB = "mongodb://sachkanch2010:Khushi911@ds141786.mlab.com:41786/heroku_94l6pnmq";
const localDB = "mongodb://localhost:27017/MyDatabase";
mongoose.Promise = global.Promise;
mongoose.connect(myDB);

module.exports = {mongoose};
