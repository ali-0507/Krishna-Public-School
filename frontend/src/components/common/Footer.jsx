export default function Footer() {
  return (
    <footer className="footer">


      {/* MAIN FOOTER */}
      <div className="footer-main">

        {/* School Info */}
        <div className="footer-col">
          <div className="footer-logo">
            🎓 <span>Krishna Public School</span>
          </div>
          <small>Tendua</small>

          <p>
            Established in 1995, Krishna Public School Tendua has been a beacon
            of educational excellence in Raipur, shaping young minds for over
            25 years.
          </p>

          <div className="footer-socials">
            <span>🌐</span>
            <span>📘</span>
            <span>📸</span>
            <span>▶️</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Admission</li>
            <li>Kids Academy</li>
            <li>Gallery</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Programs */}
        <div className="footer-col">
          <h4>Our Programs</h4>
          <ul>
            <li>Play Group</li>
            <li>Nursery</li>
            <li>LKG & UKG</li>
            <li>Primary School</li>
            <li>Middle School</li>
            <li>High School</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>📍 Tendua Road, Near Main Market,<br />Raipur, Chhattisgarh - 492001</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@kpstendua.edu.in</p>
          <p>⏰ Mon - Sat: 8:00 AM - 3:00 PM</p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <span>© 2025 Krishna Public School Tendua. All rights reserved.</span>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>

    </footer>
  );
}