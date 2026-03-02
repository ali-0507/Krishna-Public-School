const express = require("express");
const router = express.Router();
const { login, getMe, register } = require("../controllers/authController");
const { protect } = require("../middleware/auth");
const { roleCheck } = require("../middleware/roleCheck");
router.post("/login", login);
router.get("/me", protect, getMe);
router.post("/register",register);
module.exports = router;