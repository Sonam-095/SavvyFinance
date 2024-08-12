const express = require("express");
const router = express.Router();
const contactform = require("../controllers/contact-controller");
const validate = require("../middlewares/validate-middleware");
const contactschema = require("../validators/contact-validator");

router.route("/contact").post(validate(contactschema),contactform);

module.exports = router;
