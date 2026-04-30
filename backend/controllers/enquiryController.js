const Enquiry = require("../models/Enquiry");
const sendEmail = require("../utils/sendEmail");

exports.submitEnquiry = async (req, res) => {
  try {

    const enquiry = new Enquiry(req.body);
    await enquiry.save();

    // Email to school
    await sendEmail({
      to: process.env.SCHOOL_EMAIL,
      subject: "New Kids Enquiry",
      html: `
        <h3>New Enquiry</h3>
        <p><b>Name:</b> ${req.body.name}</p>
        <p><b>Mobile:</b> ${req.body.mobile}</p>
        <p><b>Class:</b> ${req.body.classInterested}</p>
      `
    });

    res.json({ success: true });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getEnquiries = async (req, res) => {
  const data = await Enquiry.find().sort({ createdAt: -1 });
  res.json(data);
};