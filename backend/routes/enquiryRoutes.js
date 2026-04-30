const express = require("express");
const router = express.Router();

const { submitEnquiry, getEnquiries } = require("../controllers/enquiryController");

router.post("/submit", submitEnquiry);
router.get("/", getEnquiries);
router.delete("/:id", async (req, res) => {
  await Enquiry.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;