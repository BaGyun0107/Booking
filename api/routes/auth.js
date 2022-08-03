const express = require("express");
const { signin, login, logout } = require("../controllers/auth");

const router = express.Router();

router.post("/signin", signin);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
