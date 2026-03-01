const express = require("express");
const router = express.Router();
const multer = require("multer");
const { getAll, create, update, remove } = require("../controllers/achievementController");
const { protect } = require("../middleware/auth");

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

router.get("/", getAll); // Public 
router.post("/",protect,upload.single("image"), create);
router.put("/:id",protect ,update);
router.delete("/:id", protect, remove);
module.exports = router;