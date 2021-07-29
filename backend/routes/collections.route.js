const express = require('express');
const {
    getCollectionsHandler,
    getProductByCollectionIdHandler,
} = require('../controllers/collections.controller');

const router = express.Router();

router.get('/', getCollectionsHandler);

module.exports = router;
