const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
  getAll,
  create,
  remove,
} = require("../controllers/documentController");

const { protect } = require("../middleware/auth");

const upload = multer({ storage: multer.memoryStorage() });

// routes
router.get("/", getAll);
router.post("/", protect, upload.single("file"), create);
router.delete("/:id", protect, remove);

module.exports = router;