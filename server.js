require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;
const connectDB = require('./services/db');

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Add routes
app.use(routes);

connectDB();

app.listen(PORT, () => {
  console.log(`🌎 server now on port ${PORT}!`);
});
