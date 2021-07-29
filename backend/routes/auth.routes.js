const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
const express = require('express');

const router = express.Router();

router.post(
    '/signup',
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

router.post('/signin', controller.signin);

  
module.exports = router;