import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
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
                  ></textarea>
                </div>
              </div>

              {/* Button */}
              <div className="col-12">
                <button type="submit" className="btn contact-submit-btn">
                  <FaPaperPlane />
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
