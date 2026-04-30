const Contact = require("../models/Contact");
const sendEmail = require("../utils/sendEmail");

exports.submitContact = async (req, res) => {
  try {

    const contact = new Contact(req.body);
    await contact.save();

    await sendEmail({
      to: process.env.SCHOOL_EMAIL,
      subject: "New Contact Message",
      html: `
        <h3>Contact Message</h3>
        <p><b>Name:</b> ${req.body.name}</p>
        <p><b>Email:</b> ${req.body.email}</p>
        <p><b>Phone:</b> ${req.body.phone}</p>
        <p><b>Subject:</b> ${req.body.subject}</p>
        <p><b>Message:</b> ${req.body.message}</p>
      `
    });

    res.json({ success: true });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getContacts = async (req, res) => {
  const data = await Contact.find().sort({ createdAt: -1 });
  res.json(data);
};