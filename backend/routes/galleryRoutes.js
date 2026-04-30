const express = require("express");
const router = express.Router();
const multer = require("multer");
const s3 = require("../config/s3");

const { getAll, create, remove, deleteSingleImage, addImages, updateGallery, updateCaption } = require("../controllers/galleryController");
const { protect } = require("../middleware/auth");

const upload = multer({ storage: multer.memoryStorage() });

router.get("/", getAll); // Public

router.post("/", protect, upload.array("images"), create);

router.put("/:id/add-images", protect, upload.array("images"), addImages);

router.put("/:id", protect, updateGallery);

router.put("/:id/update-caption", protect, updateCaption);

router.put("/:id/delete-image", protect, deleteSingleImage);

router.delete("/:id", protect, remove);


module.exports = router;