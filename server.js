const express = require('express');
const routes = require('./routes');
const db = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors')
const logger = require('morgan');
const mongoose = require('mongoose');

// require() imports and middleware here ^ ///////

const app = express();

const PORT = process.env.PORT || 3001;

// app.use() middleware here ^ ///////////////////

app.use(bodyParser.json());
app.use(cors())
app.use('/api', routes);
app.use(logger('dev'));

app.get('/', (req, res) => {
  res.send('Hello character API')
})
const CONNECTION_URL = 'mongodb+srv://Pabloey:QkBB6hNKpLH62AAa@cluster0.ogp5o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));