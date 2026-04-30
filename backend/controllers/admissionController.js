const Admission = require("../models/Admission");
const sendEmail = require("../utils/sendEmail");

exports.submitAdmission = async (req, res) => {

  try {

    const admission = new Admission(req.body);
    await admission.save();

    // await sendEmail(req.body);
    await sendEmail({
      to: process.env.SCHOOL_EMAIL,
      subject: "New Admission Application",
      html: `
    <h3>New Admission Application</h3>

    <p><strong>Student:</strong> ${req.body.studentName}</p>
    <p><strong>Class:</strong> ${req.body.applyingClass}</p>
    <p><strong>Father:</strong> ${req.body.fatherName}</p>
    <p><strong>Mobile:</strong> ${req.body.mobile}</p>
    <p><strong>Email:</strong> ${req.body.email}</p>
  `
    });

    res.status(201).json({
      success: true,
      message: "Admission form submitted successfully"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};

exports.getAdmissions = async (req, res) => {

  try {

    const admissions = await Admission.find().sort({ createdAt: -1 });

    res.json(admissions);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};

exports.deleteAdmission = async (req, res) => {
  try {

    await Admission.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Admission deleted successfully"
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateStatus = async (req, res) => {
  try {

    const { status } = req.body;

    const admission = await Admission.findById(req.params.id);

    if (!admission) {
      return res.status(404).json({ message: "Admission not found" });
    }

    admission.status = status;
    await admission.save();


await sendEmail({
  to: admission.email,
  subject: `Admission Status - ${status}`,
  html: `
    <h2>Admission Status Update</h2>

    <p>Dear Parent,</p>

    <p>Your child's admission status has been updated:</p>

    <p><strong>Student:</strong> ${admission.studentName}</p>
    <p><strong>Class:</strong> ${admission.applyingClass}</p>

    <p>
      <strong>Status:</strong> 
      <span style="color:${
        status === "Approved"
          ? "green"
          : status === "Rejected"
          ? "red"
          : "orange"
      }">
        ${status}
      </span>
    </p>

    <p>
      ${
        status === "Approved"
          ? "🎉 Congratulations! Your child has been selected."
          : status === "Rejected"
          ? "We regret to inform you that the application was not selected."
          : "Your application is under review."
      }
    </p>

    <br/>

    <p>Regards,<br/>Krishna Public School Tendua</p>
  `
});

    res.json({
      success: true,
      message: "Status updated and email sent"
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};