import "../styles/privacy-policy.css";
import AcademicHero from "../components/Academics/AcademicHero";
import { FaUserShield } from "react-icons/fa";

export default function PrivacyPolicy() {
  return (
    <>
      <AcademicHero
        icon={<FaUserShield />}
        title="Privacy Policy"
        subtitle="Krishna Public School Tendua – Official Website"
      />

      <section className="privacy-section">
        <div className="privacy-container">

          <p className="effective-date">
            <strong>Effective Date:</strong>
          </p>

          <p>
            Krishna Public School Tendua (“School”, “we”, “our”, or “us”) is committed to protecting the privacy and personal information of students, parents, staff, and website visitors. This Privacy Policy explains how we collect, use, store, and safeguard your information when you visit our website.
          </p>

          <p>
            By using our website, you agree to the terms of this Privacy Policy.
          </p>
          <hr/>

          {/* SECTION 1 */}
          <h3>1. Information We Collect</h3>

          <h4>A. Personal Information</h4>
          <ul>
            <li>Student’s name</li>
            <li>Parent/guardian name</li>
            <li>Contact number</li>
            <li>Email address</li>
            <li>Residential address</li>
            <li>Date of birth</li>
            <li>Academic details</li>
          </ul>

          <h4>B. Technical Information</h4>
          <ul>
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Pages visited</li>
            <li>Date and time of visit</li>
          </ul>
          <hr/>

          {/* SECTION 2 */}
          <h3>2. How We Use Your Information</h3>
          <ul>
            <li>Respond to inquiries and admission requests</li>
            <li>Process admission-related communications</li>
            <li>Provide updates regarding school activities</li>
            <li>Improve website functionality</li>
            <li>Maintain internal records</li>
            <li>Comply with legal obligations</li>
          </ul>

          <p className="highlight">
            We do not sell, rent, or trade personal information to third parties.
          </p>
          <hr/>

          {/* SECTION 3 */}
          <h3>3. Sharing of Information</h3>
          <ul>
            <li>With authorized school staff for administrative purposes</li>
            <li>When required by law or government authorities</li>
            <li>To protect the rights, safety, and security of the School community</li>
          </ul>
          <hr/>


          {/* SECTION 4 */}
          <h3>4. Data Security</h3>
          <p>
            Krishna Public School Tendua implements appropriate technical and administrative safeguards to protect personal information from unauthorized access, disclosure, or misuse.
          </p>
          <p>
            However, while we strive to protect your data, no method of online transmission is 100% secure.
          </p>
          <hr/>


          {/* SECTION 5 */}
          <h3>5. Cookies</h3>
          <p>Our website may use cookies to:</p>
          <ul>
            <li>Enhance user experience</li>
            <li>Analyze website traffic</li>
            <li>Remember user preferences</li>
          </ul>
          <hr/>


          {/* SECTION 6 */}
          <h3>6. Children’s Privacy</h3>
          <p>
            As an educational institution, we collect student information only with parental/guardian consent and for legitimate academic and administrative purposes.
          </p>
          <hr/>


          {/* SECTION 7 */}
          <h3>7. Third-Party Links</h3>
          <p>
            Our website may contain links to third-party websites. The School is not responsible for the privacy practices or content of external websites.
          </p>
          <hr/>


          {/* SECTION 8 */}
          <h3>8. Data Retention</h3>
          <p>
            We retain personal information only as long as necessary for admission, academic, administrative, and legal requirements.
          </p>
          <hr/>


          {/* SECTION 9 */}
          <h3>9. Your Rights</h3>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Withdraw consent (where applicable)</li>
          </ul>
          <hr/>


          {/* SECTION 10 */}
          <h3>10. Updates to This Policy</h3>
          <p>
            Krishna Public School Tendua reserves the right to update or modify this Privacy Policy at any time.
          </p>
          <hr/>


          {/* SECTION 11 */}
          <h3>11. Contact Information</h3>
          <p>
            Krishna Public School Tendua <br />
            Nandanvan Road, Near Baglamukhi Mandir, Tendua <br />
            Email: infokpstendua@gmail.com
          </p>
          <hr/>


        </div>
      </section>
    </>
  );
}