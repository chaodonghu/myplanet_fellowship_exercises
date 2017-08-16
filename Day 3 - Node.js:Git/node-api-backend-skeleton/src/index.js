// Grab express module
const express = require('express');

// Initialize express
const app = express();
const APORT = parseInt(process.env.PORT, 10);

app.use('/', express.static('./src/static'));

app.get('/api/test', (req, res, next) => {
  res.json({ message: 'Testing'});
});

const port = parseInt(process.env.PORT || 8080, 10);

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
