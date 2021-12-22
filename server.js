const express = require('express');
const routes = require('./routes');
const db = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors')
const logger = require('morgan');
const mongoose = require('mongoose');
const path = require('path')

require('dotenv').config({ path: "./config.env" });


// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;
const app = express();

// app.use() middleware here ^ ///////////////////

app.use(bodyParser.json());
app.use(cors())
app.use('/api', routes);
app.use(logger('dev'));

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, 'client/build')))
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(`${__dirname}/client/build/index.html`))
//   })
// }

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));