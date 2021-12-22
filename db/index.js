const mongoose = require('mongoose');

let MONGODB_URI = 'mongodb://127.0.0.1:27017/characterDatabase';

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB.');
  })
  .catch((e) => {
    console.error('Connection error', e.message);
  });

const db = mongoose.connection;

module.exports = db;

// const mongoose = require('mongoose')

// require('dotenv').config({ path: "./config.env" });

// let dbUrl = process.env.NODE_ENV === 'production' ? process.env.MONGO_URI : 'mongodb://127.0.0.1:27017/characterDatabase'

// mongoose
//   .connect(dbUrl, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   })
//   .then(() => {
//     console.log('Successfully connected to MongoDB.')
//   })
//   .catch((e) => {
//     console.error('Connection error', e.message)
//   })
// mongoose.set('debug', true)
// const db = mongoose.connection

// module.exports = db