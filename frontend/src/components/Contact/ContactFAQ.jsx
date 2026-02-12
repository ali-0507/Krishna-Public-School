const ContactFAQ = () => {
  return (
    <section className="contact-faq">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-badge">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="accordion" id="faqAccordion">

              {/* FAQ 1 */}
              <div className="accordion-item" data-aos="fade-up">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq1"
                  >
                    What are the school timings?
                  </button>
                </h2>
                <div
                  id="faq1"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    School operates from Mon - Fri 7:30 AM to 1:15 PM and Sat from 7:30 AM to 11:30 AM.
                    Kids Academy has flexible half-day options.
                  </div>
                </div>
              </div>

              {/* FAQ 2 */}
              <div className="accordion-item" data-aos="fade-up">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq2"
                  >
                    Is transportation available?
                  </button>
                </h2>
                <div
                  id="faq2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Yes, we provide bus transportation covering major areas
                    of Raipur and surrounding localities.
                  </div>
                </div>
              </div>

              {/* FAQ 3 */}
              <div className="accordion-item" data-aos="fade-up">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq3"
                  >
                    What extracurricular activities are offered?
                  </button>
                </h2>
                <div
                  id="faq3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Sports, music, dance, art, drama, robotics,
                    and various clubs for holistic development.
                  </div>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="accordion-item" data-aos="fade-up">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq4"
                  >
                    How can I track my child's progress?
                  </button>
                </h2>
                <div
                  id="faq4"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    We provide a parent portal for updates and conduct
                    quarterly PTMs for direct interaction.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
