const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI ||
    'mongodb+srv://ying:<passwork>@cluster0.ht1cb.mongodb.net/booksearch?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
