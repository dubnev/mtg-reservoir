const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

console.log('Hello, World!');
// Routes
app.get('/', (req, res) => {
  res.send('Root path');
});


// DB Connection
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connection to DB established.');
});


// Begin listening
app.listen(3000);
