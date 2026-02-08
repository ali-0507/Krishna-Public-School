import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
 
const ContactInfo = () => {
  return (
    <div className="col-lg-4">
      {/* Visit Us */}
      <div className="card contact-info-card mb-4" data-aos="fade-right">
        <div className="card-body d-flex gap-3">
          <div className="info-icon">
            <FaMapMarkerAlt />
          </div>
          <div>
            <h5 className="info-title">Visit Us</h5>
            <p className="info-text">
             Near Banglamukhi Mandir, Nandanvan Road, Tendua,
              Raipur, Chhattisgarh - 492099
            </p>
          </div>
        </div>
      </div>

      {/* Call Us */}
      <div className="card contact-info-card mb-4" data-aos="fade-right">
        <div className="card-body d-flex gap-3">
          <div className="info-icon">
            <FaPhoneAlt />
          </div>
          <div>
            <h5 className="info-title">Call Us</h5>
            <p className="info-text">
              +91 98765 43210 <br />
              +91 77123 45678
            </p>
          </div>
        </div>
      </div>

      {/* Email Us */}
      <div className="card contact-info-card mb-4" data-aos="fade-right">
        <div className="card-body d-flex gap-3">
          <div className="info-icon">
            <FaEnvelope />
          </div>
          <div>
            <h5 className="info-title">Email Us</h5>
            <p className="info-text">
               kpstendua18gmail.com<br />
              admissions@kpstendua.edu.in
            </p>
          </div>
        </div>
      </div>

      {/* Office Hours */}
      <div className="card contact-info-card" data-aos="fade-right">
        <div className="card-body d-flex gap-3">
          <div className="info-icon">
            <FaClock />
          </div>
          <div>
            <h5 className="info-title">School Hours</h5>
            <p className="info-text">
              Mon – Sat: 7:30 AM – 2:30 PM <br />
              Sunday: Closed
            </p>
          </div>
      
        </div>
      </div>
          {/* Google Map */}
     <div className="card contact-map-card mt-4 mb-4" data-aos="zoom-in">
          <div className="card-body text-center">
            <FaMapMarkerAlt className="map-icon" />
            <p className="map-text">View on Map</p>

                  <iframe
                    title="Krishna Public School Location"
                    src="https://www.google.com/maps?q=Krishna%20Public%20School%20Tendua%20Raipur&output=embed"
                    width="100%"
                    height="220"
                    style={{ border: 0, borderRadius: "12px" }}
                   allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
          </div>
    </div>
  );
};

export default ContactInfo;
