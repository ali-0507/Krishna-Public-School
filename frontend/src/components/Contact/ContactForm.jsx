import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/contact/submit", formData);
      alert("Message sent");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      alert("Error");
    }
  };

  return (
    <div className="col-lg-8">
      <div className="card contact-form-card" data-aos="fade-left">
        <div className="card-body">
          <h3 className="contact-form-title">Send Us a Message</h3>

          <form>
            <div className="row">
              {/* Name */}
              <div className="col-md-6 mb-3">
                <div className="form-field">
                  <label>
                    Your Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    required
                    value={formData.name} onChange={handleChange} name="name"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="col-md-6 mb-3">
                <div className="form-field">
                  <label>
                    Email Address <span>*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="your@email.com"
                    required
                    value={formData.email} onChange={handleChange} name="email"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="col-md-6 mb-3">
                <div className="form-field">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="+91 98765 43210"
                    value={formData.phone} onChange={handleChange} name="phone"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="col-md-6 mb-3">
                <div className="form-field">
                  <label>
                    Subject <span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="What's this about?"
                    required
                    value={formData.subject} onChange={handleChange} name="subject"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="col-12 mb-4">
                <div className="form-field">
                  <label>
                    Your Message <span>*</span>
                  </label>
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Type your message here..."
                    required
                    value={formData.message} onChange={handleChange} name="message"
                  ></textarea>
                </div>
              </div>

              {/* Button */}
              <div className="col-12">
                <button type="submit" className="btn contact-submit-btn"
                onClick={handleSubmit}>
                  <FaPaperPlane />
                  Send Message
                </button>
                <p className="mt-3 fs-6" style={{color:"gray",fontStyle:"italic"}}>
                  You may get an email from us as a response, Kindly share your valid email id.</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;