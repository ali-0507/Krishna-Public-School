import "../styles/terms.css";
import AcademicHero from "../components/Academics/AcademicHero";
import { FaFileContract } from "react-icons/fa";

export default function TermsConditions() {
  return (
    <>
      <AcademicHero
        icon={<FaFileContract />}
        title="Terms & Conditions"
        subtitle="Krishna Public School Tendua – Official Website"
      />

      <section className="legal-section">
        <div className="legal-container">

          <p className="effective-date">
            <strong>Effective Date:</strong> 19th Feb 2026
          </p>

          <p>
            Welcome to the official website of Krishna Public School Tendua
            (“School”, “we”, “our”, or “us”). By accessing or using this website,
            you agree to comply with and be bound by the following Terms and
            Conditions. If you do not agree, please do not use this website.
          </p>

          {/* 1 */}
          <h3>1. Use of Website</h3>
          <p>
            This website is intended to provide general information about the
            School, including admissions, academics, events, announcements, and
            contact details.
          </p>
          <ul>
            <li>Use the website for lawful purposes only.</li>
            <li>Not engage in activities that disrupt website functioning.</li>
            <li>Not attempt unauthorized access to any part of the website.</li>
          </ul>

          {/* 2 */}
          <h3>2. Intellectual Property Rights</h3>
          <p>
            All content on this website including text, images, logos,
            graphics, documents, and videos is the property of Krishna Public
            School Tendua unless otherwise stated and is protected under
            applicable copyright laws.
          </p>
          <p>You may view and download material for personal, non-commercial use only.</p>
          <p className="highlight">
            You may not reproduce, distribute, modify, or republish website
            content without prior written permission.
          </p>

          {/* 3 */}
          <h3>3. Admissions and Information Disclaimer</h3>
          <p>
            Information regarding admission procedures, fee structure,
            academic programs, and policies is for general guidance only and
            may be updated without prior notice.
          </p>
          <p>
            The School reserves the right to change admission criteria, modify
            fees, and amend policies as necessary.
          </p>

          {/* 4 */}
          <h3>4. User Submissions</h3>
          <p>
            If you submit information through contact forms, admission inquiry
            forms, or feedback forms, you agree that:
          </p>
          <ul>
            <li>The information provided is accurate and complete.</li>
            <li>You are authorized to provide such information.</li>
            <li>The School may use this information for communication purposes.</li>
          </ul>

          {/* 5 */}
          <h3>5. Privacy</h3>
          <p>
            Personal information submitted through the website will be handled
            in accordance with the School’s Privacy Policy.
          </p>

          {/* 6 */}
          <h3>6. External Links</h3>
          <p>
            This website may contain links to third-party websites for
            convenience. The School does not control or endorse external
            content and is not responsible for their privacy practices.
          </p>

          {/* 7 */}
          <h3>7. Limitation of Liability</h3>
          <p>
            The School shall not be liable for any direct or indirect loss
            arising from the use of this website, temporary unavailability,
            or errors in website content.
          </p>

          {/* 8 */}
          <h3>8. Website Availability</h3>
          <p>
            We strive to keep the website accessible but may suspend access
            temporarily for maintenance or updates without notice.
          </p>

          {/* 9 */}
          <h3>9. Governing Law</h3>
          <p>
            These Terms and Conditions are governed by the laws of India.
            Any disputes shall be subject to the jurisdiction of the
            appropriate courts.
          </p>

          {/* 10 */}
          <h3>10. Changes to Terms and Conditions</h3>
          <p>
            Krishna Public School Tendua reserves the right to update or
            modify these Terms at any time. Continued use of the website
            constitutes acceptance of the revised terms.
          </p>

          {/* 11 */}
          <h3>11. Contact Information</h3>
          <p>
            Krishna Public School Tendua <br />
            On Nandanvan Road, near Baglamukhi Mandir, Tendua <br />
            Raipur (C.G.)
          </p>

        </div>
      </section>
    </>
  );
}