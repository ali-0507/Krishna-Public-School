const express = require("express"); 
const router = express.Router(); 
const { getAll, upsert } = require("../controllers/disclosureController"); 
const { protect } = require("../middleware/auth"); 
router.get("/", getAll); 
router.put("/", protect, upsert); 
module.exports = router;