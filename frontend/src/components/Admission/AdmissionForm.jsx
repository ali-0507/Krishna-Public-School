const AdmissionForm = () => {
  return (
    <section className="admission-form-section" data-aos="zoom-out">
      <form  id="admission-form" className="admission-form">
        <h2 className="text-center">Online Admission Form</h2>

        <div className="form-grid mt-4">
           <div className="form-field mt-2">
             <label>Student Name <span>*</span></label>
            <input type="text" placeholder="Enter student's full name" required />
            </div>

          <div className="form-field mt-2">
              <label>Parent/Guardian Name <span>*</span></label>
             <input type="text" placeholder="Enter parent's name" required />
            </div>

            <div className="form-field mt-2">
              <label>Email Address<span>*</span></label>
             <input type="email" placeholder="your@email.com" required />
            </div>
          
           <div className="form-field mt-2">
              <label>Phone Number<span>*</span></label>
             <input type="tel" placeholder="+91 8572345600" required />
            </div>

            <div className="form-field mt-2">
             <label>
            Applying for Grade <span>*</span>
              </label>
          <select  required>
            <option value="" disabled selected>Select grade to Apply *</option>
            <option>Nursery</option>
            <option>LKG</option>
            <option>UKG</option>
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
              <label>Previous School(if any)</label>
              <input type="text" placeholder="Enter previous school name" />
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
