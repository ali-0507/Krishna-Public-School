const express = require("express");
const router = express.Router();

const { submitContact, getContacts } = require("../controllers/contactController");

router.post("/submit", submitContact);
router.get("/", getContacts);
router.delete("/:id", async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;