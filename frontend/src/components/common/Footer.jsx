import {Link} from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">

        {/* School Info */}
        <div className="footer-col">
          <div className="footer-logo">
            <h4><img src="/SCHOOL LOGO.png" className="footer-school-logo "/> Krishna Public School Tendua</h4>
          </div>
          <p>
            Established in 2018, Krishna Public School Tendua has been a beacon
            of educational excellence in Raipur, shaping young minds for over
            8 years.
          </p>

          <div className="footer-socials mt-1">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fa-brands fa-square-twitter"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/admission">Admission</a></li>
            <li><a href="/kids-academy">Kids Academy</a></li>
            <li> <a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>          
          </ul>
        </div>

        {/* Programs */}
        <div className="footer-col">
          <h4>Important Links</h4>
          <ul>
           <li><a href="/programs-offered">Our Programs</a></li>
            <li><a href="/achievements">Achievements</a></li>
            <li><a href="/clubs">Clubs</a></li>
            <li><a href="/academics/syllabus">Academic Syllabus</a></li>
            <li><a href="/academics/exam-policy">Exam Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p><i className="fas fa-map-marker-alt"></i> NEAR BANGLAMUKHI MANDIR, NANDANVAN ROAD, TENDUA, RAIPUR, CHHATTISGARH - 492099</p>
          <p><i className="fas fa-phone"></i>0771-2572015, +91 8871018515</p>
          <p><i className="fas fa-envelope"></i> infokpstendua@gmail.com, kpstendua18@gmail.com</p>
          
          <p><i className="fas fa-clock"></i> Mon - Sat: 7:30 AM - 2:30 PM (Office Hours)</p>
  
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <span>© 2026 Krishna Public School Tendua. All rights reserved.</span>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>

    </footer>
  );
}