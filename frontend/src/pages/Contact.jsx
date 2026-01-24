 import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ContactFAQ from "../components/contact/ContactFAQ";
import "../styles/contact.css";

const Contact = () => {
  return (
    <>
      <ContactHero />
      <section className="contact-main">
  <div className="container">
    <div className="row align-items-start">
      {/* LEFT */}
      <ContactInfo />

      {/* RIGHT */}
      <ContactForm />
    </div>
  </div>
</section>
       
      <ContactFAQ />
    </>
  );
};

export default Contact;
