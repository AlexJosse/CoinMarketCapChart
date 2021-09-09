const express = require('express');
const {
    getCurrencyTicker,
} = require('../controllers/collections.controller');
const controller = require("../controllers/user.controller");

const router = express.Router();

router.post(
    '/',
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

module.exports = router;
