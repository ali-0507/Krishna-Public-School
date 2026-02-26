import {NavLink, Link} from "react-router-dom";

const KidsEnquiry = () => {
  return (
    <section className="kids-enquiry">
      <div className="enquiry-container">

        {/* LEFT CONTENT */}
        <div className="enquiry-info"data-aos="fade-right">
          <h2>Visit Our School</h2>
          <p>
            We invite you to visit our campus and experience 
            TENDUA KRISHNA KIDS ACADEMY.  See our facilities, meet our teachers,
            and discover why parents trust us with their little ones.
          </p>

          <ul>
            <li>
              <i className="fa-solid fa-location-dot fs-5"></i>
              B-29/19, SECTOR-3, UDAYA SOCIETY, NEAR AGRASEN BHAWAN, TATIBANDH, RAIPUR (C.G.) - 492099
            </li>
            <li>
              <i className="fa-solid fa-clock"></i>
              School Hours: Mon - Sat, 9:00 AM - 12:30 PM
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              +91 95161 38515,  0771 2572015
            </li>
            <li>
              <i className="fas fa-envelope"></i>
                Krishnakidsacademy9@gmail.com
            </li>
          </ul>

          <div className="enquiry-buttons"data-aos="fade-up">
            <Link to="/contact" className="btn-primary button-one">
              Schedule a Visit
            </Link>
            <Link to="/admission" className="btn-secondary button-two">
              Apply Now
            </Link>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="enquiry-form"data-aos="fade-left">
          <h3>Quick Enquiry</h3>

          <input type="text" placeholder="Please enter Your(guardian's) name" />
          <input type="tel" placeholder="Please enter 10 digit phone number" maxLength="10"
            pattern="[0-9]{10}" inputMode="numeric" onInput={(e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);}}/>

          <select>
            <option>Select class</option>
            <option>Play Group</option>
            <option>Nursery</option>
            <option>LKG</option>
            <option>UKG</option>
          </select>

          <button className="btn-primary">Submit Enquiry</button>
        </div>

      </div>
    </section>
  );
};

export default KidsEnquiry;
