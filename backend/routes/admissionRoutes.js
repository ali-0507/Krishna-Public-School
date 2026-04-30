 const express = require("express");
const router = express.Router();

const {
  submitAdmission,
  getAdmissions,
  deleteAdmission,
  updateStatus
} = require("../controllers/admissionController");

router.post("/submit", submitAdmission);
router.get("/", getAdmissions);
router.delete("/:id", deleteAdmission);
router.put("/:id/status", updateStatus);

module.exports = router;