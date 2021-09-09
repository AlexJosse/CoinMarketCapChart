const express = require('express');
const {
    getCurrencyTickerHandler,
} = require('../controllers/currencies.controller');

const router = express.Router();

router.get('/', getCollectionsHandler);

module.exports = router;
