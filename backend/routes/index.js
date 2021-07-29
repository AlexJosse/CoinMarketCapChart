const express = require('express');

const collections = require('./collections.route');
const router = express.Router();

router.get('/wake-up', (_req, res) => res.send('👍'));
router.use('/collections', collections);

module.exports = router;
