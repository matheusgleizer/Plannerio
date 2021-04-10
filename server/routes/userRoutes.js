const router = require("express").Router();
const {signup, login, logout} = require("../controllers/userControllers");

// Individual routes pointing to specific endpoints
router.post("/user/signup", signup);
router.post("/user/login", login);
router.get("/user/logout", logout);

module.exports = router;
