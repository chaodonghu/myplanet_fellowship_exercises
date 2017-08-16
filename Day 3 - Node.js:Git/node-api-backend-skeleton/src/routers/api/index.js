const express = require('express');

const controller = require('../../controllers/api');

const router = express.Router();

router.get('/test', controller.handleTest);

module.exports = router;
