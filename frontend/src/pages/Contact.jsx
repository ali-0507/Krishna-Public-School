 import ContactHero from "../components/Contact/ContactHero";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import ContactFAQ from "../components/Contact/ContactFAQ";
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
