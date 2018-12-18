var mongoose=require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect(process.env.MONGODB_URI||'mongodb://dharna:Love2l@ugh@ds137634.mlab.com:37634/todoapp');

module.exports={mongoose};

