const AdmissionForm = () => {
  return (
    <section className="admission-form-section" data-aos="zoom-out">
      <form id="admission-form" className="admission-form">
        <h2 className="text-center">Online Admission Form</h2>

        <div className="form-grid mt-4">

          {/* Student Details */}
          <div className="form-field mt-2">
            <label>Student Name <span>*</span></label>
            <input type="text" placeholder="Enter student's full name" required />
          </div>

          <div className="form-field mt-2">
            <label>Aadhar Card Number <span>*</span></label>
            <input type="text" placeholder="Enter Aadhar number" required/>
          </div>

          <div className="form-field mt-2">
            <label>Date of Birth <span>*</span></label>
            <input type="date" required />
          </div>

          <div className="form-field mt-2">
            <label>Date of Birth (in words)</label>
            <input type="text" placeholder="e.g. Fifteenth August Two Thousand Ten" />
          </div>

          <div className="form-field mt-2">
            <label>Applying for Class<span>*</span></label>
            <select required>
              <option value="" disabled selected>Select class</option>
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
          </div>

          <div className="form-field mt-2">
            <label>Gender <span>*</span></label>
            <select required>
              <option value="" disabled selected>Select gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className="form-field mt-2">
            <label>Nationality</label>
            <input type="text" placeholder="Enter nationality" />
          </div>

          <div className="form-field mt-2">
            <label>Religion</label>
            <select>
              <option value="" disabled selected>Select religion</option>
              <option>Hindu</option>
              <option>Muslim</option>
              <option>Christian</option>
              <option>Sikh</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-field mt-2">
            <label>Caste</label>
            <input type="text" placeholder="Enter caste" />
          </div>

          <div className="form-field mt-2">
            <label>Category</label>
            <select>
              <option value="" disabled selected>Select category</option>
              <option>SC</option>
              <option>ST</option>
              <option>OBC</option>
              <option>GEN</option>
              <option>PH(Physically Handicapped)</option>
            </select>
          </div>

          <div className="form-field mt-2">
            <label>Mother Tongue</label>
            <input type="text" placeholder="Enter mother tongue" />
          </div>

          <div className="form-field mt-2">
            <label>Place of Birth</label>
            <input type="text" placeholder="Enter place of birth" />
          </div>

          <div className="form-field mt-2">
            <label>Does the child have special needs?</label>
            <select>
              <option value="" disabled selected>Select option</option>
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>

          {/* Academic Details */}
          <div className="form-field mt-2">
            <label>Last Class Attended</label>
            <input type="text" placeholder="Enter last class attended" />
          </div>

          <div className="form-field mt-2">
            <label>Year of Passing</label>
            <input type="text" placeholder="Enter year of passing" />
          </div>

          <div className="form-field mt-2">
            <label>Previous School Name</label>
            <input type="text" placeholder="Enter school name" />
          </div>

          <div className="form-field mt-2">
            <label>Board</label>
            <input type="text" placeholder="CBSE / State Board etc." />
          </div>

          <div className="form-field mt-2">
            <label>Medium</label>
            <input type="text" placeholder="English / Hindi" />
          </div>

          {/* Parent Details */}
          <div className="form-field mt-2">
            <label>Father Name <span>*</span></label>
            <input type="text" placeholder="Enter father's name" required />
          </div>

          <div className="form-field mt-2">
            <label>Qualification</label>
            <input type="text" placeholder="Enter qualification" />
          </div>

          <div className="form-field mt-2">
            <label>Occupation</label>
            <input type="text" placeholder="Enter occupation" />
          </div>

          <div className="form-field mt-2">
            <label>Mobile Number <span>*</span></label>
            <input type="tel" placeholder="+91 8572345600" required />
          </div>

          <div className="form-field mt-2">
            <label>Email Address <span>*</span></label>
            <input type="email" placeholder="your@email.com" required />
          </div>

          {/* Address */}
          <div className="form-field mt-2">
            <label>Local Address</label>
            <input type="text" placeholder="Enter local address" />
          </div>

          <div className="form-field mt-2">
            <label>Permanent Address</label>
            <input type="text" placeholder="Enter permanent address" />
          </div>

        </div>

        <button type="submit" className="btn-primary full-width">
          Submit Application
        </button>

        <p className="form-note mt-2 text-center text-muted">
          By submitting, you agree to our privacy policy. We'll never share your information.
        </p>
      </form>
    </section>
  );
};

export default AdmissionForm;

