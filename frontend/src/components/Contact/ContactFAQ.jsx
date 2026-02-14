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
                    <b>Pre-Primary</b> (Nursery to KG II):  <b>8:30 AM – 12:30 PM</b>, <br /><b>Primary & Secondary</b> (Class I to XII): <b>7:30 AM – 1:30 PM</b>
                    <br />
                    <p style={{ fontSize: "8px", color: "grey", paddingTop: "8px" }}>Note: Timings may vary slightly during extreme winter or summer months.</p>
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
                    Where is the school located?
                  </button>
                </h2>
                <div
                  id="faq2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    We are located in <b>Tendua, Raipur</b>. You can find our exact location via the <b>Google Maps link</b> on our<br /><b>[Contact Us]</b> page.
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
                    Is the school affiliated with a specific board?
                  </button>
                </h2>
                <div
                  id="faq3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Yes, KPS Tendua is affiliated with the Central Board of Secondary Education (CBSE), New Delhi.<br/>
                    <b>CBSE Aff no :3330397, School code : 15954</b>
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
                    How do I register my child for admission? 
                  </button>
                </h2>
                <div
                  id="faq4"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    You can fill out the enquiry form online through <a href="https://www.kpstendua.com/admission"> our website</a> or <br/>visit the school campus to collect the registration kit from the front desk.
                  </div>
                </div>
              </div>

               {/* FAQ 5 */}
               <div className="accordion-item" data-aos="fade-up">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq5"
                  >
                    What is the age criteria for Nursery admission? 
                  </button>
                </h2>
                <div
                  id="faq5"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    As per NEP guidelines, a child should be <b>3+ years of age as of March 31st of the academic year</b> they are seeking admission in.
                  </div>
                </div>
              </div>

              {/* FAQ 6 */}
               <div className="accordion-item" data-aos="fade-up">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq6"
                  >
                   Which documents are required for admission? 
                  </button>
                </h2>
                <div
                  id="faq6"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <ul>
                      <li>Original Birth Certificate (for Nursery to Class I).</li>
                      <li>Transfer Certificate (TC) from the previous school.</li>
                      <li>Report card of the last class attended.</li>
                      <li>Passport-size photographs of the student and parents.</li>
                      <li> Aadhar Card copies.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ 7 */}
               <div className="accordion-item" data-aos="fade-up">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq7"
                  >
                   What is the student-teacher ratio? 
                  </button>
                </h2>
                <div
                  id="faq7"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    We maintain an average ratio of <b>30:1</b> to ensure personalized attention 
                    and better engagement for every student.
                  </div>
                </div>
              </div>

              {/* FAQ 8 */}
               <div className="accordion-item" data-aos="fade-up">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq8"
                  >
                   Does the school provide transport facilities?  
                  </button>
                </h2>
                <div
                  id="faq8"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                     <b>Yes</b>, we operate a fleet of well-maintained buses covering major routes across the city. 
                     Each bus is equipped with GPS tracking and a female attendant for safety
                  </div>
                </div>
              </div>

              {/* FAQ 9 */}
               <div className="accordion-item" data-aos="fade-up">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq9"
                  >
                   Are there extra-curricular activities?   
                  </button>
                </h2>
                <div
                  id="faq9"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                     <b>Absolutely.</b> We offer a variety of clubs including <b>Music, Dance, Art & Craft, Martial Arts, and specialized Sports coaching</b>. 
                     We believe in holistic development, not just rote learning.
                  </div>
                </div>
              </div>

              {/* FAQ 10 */}
               <div className="accordion-item" data-aos="fade-up">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq10"
                  >
                   Is there a sibling discount? 
                  </button>
                </h2>
                <div
                  id="faq10"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                     <b>Yes,</b> we offer a concession on tuition fees for the younger sibling. 
                     Please contact the accounts office for specific details.
                  </div>
                </div>
              </div>

              {/* FAQ 11 */}
               <div className="accordion-item" data-aos="fade-up">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq11"
                  >
                   How does the school ensure student safety? 
                  </button>
                </h2>
                <div
                  id="faq11"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                     <ul>
                      <li>24/7 CCTV surveillance across the campus.</li>
                      <li>Gated entry with strict visitor logs.</li>
                      <li>Mandatory background checks for all staff members.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ 12 */}
               <div className="accordion-item" data-aos="fade-up">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq12"
                  >
                   What is the medium of instruction?
                  </button>
                </h2>
                <div
                  id="faq12"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                     The primary medium of instruction at the school is <b>English</b>.  
                  </div>
                </div>
              </div>

              {/* FAQ 13 */}
               <div className="accordion-item" data-aos="fade-up">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq13"
                  >
                   Is KPS Tendua co-educational?
                  </button>
                </h2>
                <div
                  id="faq13"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                     <b>Yes</b> — the school is co-ed, meaning it admits both boys and girls.    
                  </div>
                </div>
              </div>

              {/* FAQ 14 */}
               <div className="accordion-item" data-aos="fade-up">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq14"
                  >
                   What exams and evaluation system does the school follow?
                  </button>
                </h2>
                <div
                  id="faq14"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                     The school follows <b>CBSE-style continuous evaluation</b> and term exams, 
                     with internal assessments and periodic tests according to board guidelines.     
                  </div>
                </div>
              </div>

              {/* FAQ 15 */}
               <div className="accordion-item" data-aos="fade-up">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq15"
                  >
                   How are admissions done?
                  </button>
                </h2>
                <div
                  id="faq15"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                     Admissions include online forms and eligibility checks.<br/><b>For classes I to VIII, seats are based on availability</b>. 
                     <br/><b>For Class IX, admission may involve a written test and review of prior performance.</b>      
                  </div>
                </div>
              </div>

               {/* FAQ 16 */}
               <div className="accordion-item" data-aos="fade-up">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq16"
                  >
                   How can I contact the school?
                  </button>
                </h2>
                <div
                  id="faq16"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                     You can contact KPS Tendua via email at <br/>
                     <b>kpshirapur18@gmail.com / krishnakidsacademy9@gmail.com</b> or <br/>
                     by phone at <b>+91 88710 18515 / +91 95161 38515</b>.
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
