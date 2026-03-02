const express = require("express");
const router = express.Router();
const multer = require("multer");
const { getAll, create, update, remove } = require("../controllers/staffController");
const { protect } = require("../middleware/auth");
const { roleCheck } = require("../middleware/roleCheck");
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });
router.get("/", getAll);
router.post("/", protect, roleCheck("director", "principal"), upload.single("photo"),
    create);
router.put("/:id", protect, roleCheck("director", "principal"), update);
router.delete("/:id", protect, roleCheck("director"), remove);
module.exports = router;