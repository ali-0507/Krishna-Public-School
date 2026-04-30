import { useState } from "react";
import axios from "axios";

const AdmissionForm = () => {

  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);

  const initialFormData = {
    studentName: "",
    aadharNumber: "",
    dob: "",
    applyingClass: "",
    gender: "",
    fatherName: "",
    mobile: "",
    email: ""
  };

  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (event) => {

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      return;
    }

    event.preventDefault();
    setLoading(true);

    try {

      console.log("Sending data:", formData);

      const res = await axios.post(
        "http://localhost:5000/api/admission/submit",
        formData
      );

      alert("Admission form submitted successfully");

      setFormData(initialFormData);
      setValidated(false);

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.message ||
        "Server error"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="admission-form-section" data-aos="zoom-out">

      <form
        id="admission-form"
        className={`admission-form needs-validation ${validated ? "was-validated" : ""}`}
        noValidate
        onSubmit={handleSubmit}
      >

        <h2 className="text-center">Online Admission Form</h2>

        <div className="form-grid mt-4">

          {/* Student Name */}
          <div className="form-field mt-2">
            <label>Student Name <span>*</span></label>

            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter student's full name"
              required
            />

            <div className="invalid-feedback">
              Please enter the student name
            </div>
            <div className="valid-feedback">
              Good name!!
            </div>
          </div>

          {/* Aadhar */}
          <div className="form-field mt-2">
            <label>Aadhar Card Number <span>*</span></label>

            <input
              type="text"
              name="aadharNumber"
              value={formData.aadharNumber}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter Aadhar number"
              pattern="[0-9]{12}"
              required
            />

            <div className="invalid-feedback">
              Please enter valid 12 digit Aadhar number
            </div>
          </div>

          {/* DOB */}
          <div className="form-field mt-2">
            <label>Date of Birth <span>*</span></label>

            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="form-control"
              required
            />

            <div className="invalid-feedback">
              Please select date of birth
            </div>
          </div>

          {/* DOB Words */}
          <div className="form-field mt-2">
            <label>Date of Birth (in words)</label>

            <input
              type="text"
              className="form-control"
              placeholder="e.g. Fifteenth August Two Thousand Ten"
            />
          </div>

          {/* Class */}
          <div className="form-field mt-2">
            <label>Applying for Class<span>*</span></label>

            <select
              name="applyingClass"
              value={formData.applyingClass}
              onChange={handleChange}
              className="form-control"
              required>
              <option value="" disabled>Select class</option>
              <option>PlayGroup</option>
              <option>Nursery</option>
              <option>KG-I</option>
              <option>KG-II</option>
              <option>Class I</option>
              <option>Class II</option>
              <option>Class III</option>
              <option>Class IV</option>
              <option>Class V</option>
              <option>Class VI</option>
              <option>Class VII</option>
              <option>Class VIII</option>
              <option>Class IX</option>
              <option>Class X</option>
              <option>Class XI</option>
              <option>Class XII</option>
            </select>

            <div className="invalid-feedback">
              Please select class
            </div>
          </div>

          {/* Gender */}
          <div className="form-field mt-2">
            <label>Gender <span>*</span></label>

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="form-control"
              required
            >
              <option value="" disabled>Select gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>

            <div className="invalid-feedback">
              Please select gender
            </div>
          </div>

          {/* Nationality */}
          <div className="form-field mt-2">
            <label>Nationality</label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter nationality"
              name="nationality"
              value={formData.nationality || ""}
              onChange={handleChange}
            />
          </div>

          {/* Religion */}
          <div className="form-field mt-2">
            <label>Religion</label>

            <select
              className="form-control"
              defaultValue=""
            >
              <option value="" disabled>Select religion</option>
              <option>Hindu</option>
              <option>Muslim</option>
              <option>Christian</option>
              <option>Sikh</option>
              <option>Other</option>
            </select>
          </div>

          {/* Caste */}
          <div className="form-field mt-2">
            <label>Caste</label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter caste"
            />
          </div>

          {/* Category */}
          <div className="form-field mt-2">
            <label>Category</label>

            <select
              className="form-control"
              defaultValue=""
            >
              <option value="" disabled>Select category</option>
              <option>SC</option>
              <option>ST</option>
              <option>OBC</option>
              <option>GEN</option>
              <option>PH</option>
            </select>
          </div>

          {/* Mother Tongue */}
          <div className="form-field mt-2">
            <label>Mother Tongue</label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter mother tongue"
            />
          </div>

          {/* Place of Birth */}
          <div className="form-field mt-2">
            <label>Place of Birth</label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter place of birth"
            />
          </div>

          {/* Special Needs */}
          <div className="form-field mt-2">
            <label>Does the child have special needs?</label>

            <select
              className="form-control"
              defaultValue=""
            >
              <option value="" disabled>Select option</option>
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>

          {/* Academic */}
          <div className="form-field mt-2">
            <label>Last Class Attended</label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter last class attended"
            />
          </div>

          <div className="form-field mt-2">
            <label>Year of Passing</label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter year of passing"
            />
          </div>

          <div className="form-field mt-2">
            <label>Previous School Name</label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter school name"
            />
          </div>

          <div className="form-field mt-2">
            <label>Board</label>

            <input
              type="text"
              className="form-control"
              placeholder="CBSE / State Board etc."
            />
          </div>

          <div className="form-field mt-2">
            <label>Medium</label>

            <input
              type="text"
              className="form-control"
              placeholder="English / Hindi"
            />
          </div>

          {/* Parent */}
          <div className="form-field mt-2">
            <label>Father Name <span>*</span></label>

            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter father's name"
              required
            />

            <div className="invalid-feedback">
              Please enter father name
            </div>
          </div>

          <div className="form-field mt-2">
            <label>Qualification</label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter father's qualification"
            />
          </div>

          <div className="form-field mt-2">
            <label>Occupation</label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter occupation"
            />
          </div>

          {/* Mobile */}
          <div className="form-field mt-2">
            <label>Mobile Number <span>*</span></label>

            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={(e) => {
                  const value = e.target.value;

                  // Allow only numbers & max 10 digits
                  if (/^\d{0,10}$/.test(value)) {
                    setFormData({
                      ...formData,
                      mobile: value
                    });
                  }
                }}
              className="form-control"
              placeholder="Enter 10 digit mobile number"
              pattern="[6-9][0-9]{9}"
              maxLength="10"
              inputMode="numeric"
              required
            />

            <div className="invalid-feedback">
              Please enter valid 10 digit mobile number
            </div>
          </div>

          {/* Email */}
          <div className="form-field mt-2">
            <label>Email Address <span>*</span></label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              placeholder="your@email.com"
              required
            />

            <div className="invalid-feedback">
              Please enter valid email
            </div>
          </div>

          {/* Address */}
          <div className="form-field mt-2">
            <label>Local Address</label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter local address"
            />
          </div>

          <div className="form-field mt-2">
            <label>Permanent Address</label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter permanent address"
            />
          </div>

        </div>

        <button
          type="submit"
          className="btn-primary full-width mt-4"
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2"></span>
              Submitting...
            </>
          ) : (
            "Submit Application"
          )}
        </button>

        <p className="form-note mt-2 text-center text-muted">
          By submitting, you agree to our privacy policy. We'll never share your information.
        </p>

      </form>

    </section>
  );
};

export default AdmissionForm;