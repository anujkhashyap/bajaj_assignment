const express = require('express');
const router = express.Router();
const { handleBfhl } = require('../controller/bfhlController');

router.post('/bfhl', handleBfhl);

module.exports = router;
