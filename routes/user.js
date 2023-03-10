const express = require("express");
const { registerUser, authUser } = require("../controllers/user");

const router = express.Router();

//routes
router.route("/registeruser").post(registerUser);
router.route("/loginuser").post(authUser);

module.exports = router;
