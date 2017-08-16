// Grab express module
const express = require('express');

// Initialize express
const app = express();
const APORT = parseInt(process.env.PORT, 10);

app.get('/', (req, res, next) => {
  res.send('Hi');
});

const port = parseInt(process.env.PORT || 8080, 10);

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
