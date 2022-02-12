const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import Routes
const cardsRoute = require('./routes/cards');

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/cards', cardsRoute);

// ROUTES
app.get('/', (req, res) => {
  res.send('We are on home');
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log('connected to db');
});

// How do we start listening to the server?
app.listen('8000', () => {
  'listening on port 8000';
});
