const express = require('express');
const collections = require('./collections.route');
const auth = require('./auth.routes');

const router = express.Router();

router.get('/wake-up', (_req, res) => res.send('👍'));
router.use('/collections', collections);
router.use('/auth', auth);

module.exports = router;
