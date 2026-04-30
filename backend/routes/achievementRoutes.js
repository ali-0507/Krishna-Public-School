const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
  getAll,
  create,
  addImages,
  update,
  remove,
  deleteImage,
} = require("../controllers/achievementController");

const { protect } = require("../middleware/auth");

const upload = multer({ storage: multer.memoryStorage() });

// Public
router.get("/", getAll);

// Admin
router.post("/", protect, upload.array("images", 10), create);
router.put("/:id", protect, update);
router.put("/:id/add-images", protect, upload.array("images"), addImages);
router.delete("/:id", protect, remove);
router.delete("/:id/image", protect, deleteImage);

module.exports = router;