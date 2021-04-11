const router = require("express").Router();
const {sendMail} = require("../controllers/mailController");

router.post("/mail", sendMail);

module.exports = router;
