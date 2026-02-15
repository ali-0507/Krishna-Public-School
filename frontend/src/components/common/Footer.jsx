import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer pt-5">

      <div className="container">
        <div className="row align-items-start">

          {/* School Info */}
          <div className="col-12 col-md-6 col-lg-3 mb-4 pe-lg-5">
            <div className="d-flex align-items-center mb-3">
              <img
                src="/SCHOOL LOGO.png"
                alt="School Logo"
                className="img-fluid me-2"
                style={{ width: "40px" }}
              />
              <h5 className="mb-0">Krishna Public School Tendua</h5>
            </div>

            <p>
              Established in 2018, Krishna Public School Tendua has been a beacon
              of educational excellence in Raipur, shaping young minds for over
              8 years.
            </p>

            <div className="d-flex gap-3 mt-2">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-square-twitter"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-6 col-lg-3 mb-4 ps-lg-5 pe-lg-1">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link className="text-light text-decoration-none" to="/">Home</Link></li>
              <li><Link className="text-light text-decoration-none" to="/about">About Us</Link></li>
              <li><Link className="text-light text-decoration-none" to="/admission">Admission</Link></li>
              <li><Link className="text-light text-decoration-none" to="/kids-academy">Kids Academy</Link></li>
              <li><Link className="text-light text-decoration-none" to="/gallery">Gallery</Link></li>
              <li><Link className="text-light text-decoration-none" to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Important Links */}
          <div className="col-12 col-md-6 col-lg-3 mb-4 ps-lg-2">
            <h5>Important Links</h5>
            <ul className="list-unstyled">
              <li><Link className="text-light text-decoration-none" to="/programs-offered">Our Programs</Link></li>
              <li><Link className="text-light text-decoration-none" to="/achievements">Achievements</Link></li>
              <li><Link className="text-light text-decoration-none" to="/clubs">Clubs</Link></li>
              <li><Link className="text-light text-decoration-none" to="/academics/syllabus">Academic Syllabus</Link></li>
              <li><Link className="text-light text-decoration-none" to="/academics/exam-policy">Exam Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <h5>Contact Us</h5>

            <p>
              <i className="fas fa-map-marker-alt me-2"></i>
              NEAR BANGLAMUKHI MANDIR, NANDANVAN ROAD, TENDUA, RAIPUR,
              CHHATTISGARH - 492099
            </p>

            <p>
              <i className="fas fa-phone me-2"></i>
              0771-2572015, +91 8871018515
            </p>

            <p>
              <i className="fas fa-envelope me-2"></i>
              infokpstendua@gmail.com, kpshirapur18@gmail.com
            </p>

            <p>
              <i className="fas fa-clock me-2"></i>
              Mon - Sat: 7:30 AM - 2:30 PM (Office Hours)
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom py-3 mt-4">
        <div className="container d-md-flex justify-content-between">
          <span>© 2026 Krishna Public School Tendua. All rights reserved.</span>
          <div>
            <a href="#" className="text-light text-decoration-none me-3">
              Privacy Policy
            </a>
            <a href="#" className="text-light text-decoration-none">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}