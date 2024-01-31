
const express = require('express');
const { signupController, loginController } = require('../controller/auth-controllers');
const router = express.Router();

router.route("/signup").post(signupController);
router.route("/login").post(loginController);

module.exports = router;