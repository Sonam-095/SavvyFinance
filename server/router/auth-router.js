const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
const validate = require("../middlewares/validate-middleware");
const { signupschema, loginschema } = require("../validators/auth-validator");

router.route("/").get(authcontrollers.home);
router.route("/signup").post(validate(signupschema), authcontrollers.signup);
router.route("/login").post(validate(loginschema), authcontrollers.login);

module.exports = router;
