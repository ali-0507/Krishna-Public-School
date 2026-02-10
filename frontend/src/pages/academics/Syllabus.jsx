import { FaClipboardList, FaPalette, FaDesktop, FaLanguage } from "react-icons/fa";
import AcademicHero from "../../components/Academics/AcademicHero";
import ExploreMore from "../../components/Academics/ExploreMore";
import "../../styles/academics.css";
import CommonExamTables from "../../components/Syllabus/CommonExamTables";
import ExamTables from "../../components/Syllabus/ExamTables";
import { useState } from "react";


export default function Syllabus() {
  const [selectedClass, setSelectedClass] = useState("I");
  return (
    <>
    <AcademicHero
        icon={<FaClipboardList />}
        title="Syllabus"
        subtitle="Excellence in education through comprehensive academic programs"
      />
  
    <section className="syllabus-download-section" data-aos="fade-right">
        <div className="container text-center">
          <div>
            <h3 style={{color:"#0f2a55", fontWeight:"700",marginBottom:"30px"}} data-aos="fade-up">
              Curriculum for the Academic Year 2025-26</h3>
              <a
              href="https://cbseacademic.nic.in/curriculum_2026.html"
              className="cbse danger" target="_blank" rel="noopener noreferrer"
            >
              Click Here!
            </a>
          </div>

          <h3 className="download-heading mt-5">
            Download Academic Documents
          </h3>
          <div className="download-btn-group">
            <a
              href="/syllabus-annual-exam-2025-26.pdf"
              download
              className="download-btn primary"
            >
              Download Syllabus 
            </a>
            <a
              href="/annual-exam-timetable-2025-26.pdf"
              download
              className="download-btn secondary"
            >
              Download Annual Exam Timetable
            </a>
          </div>
          
        </div>
      </section>
        <div className="class-selector">
          <label>Select Class:</label>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="I">Class I</option>
            <option value="II">Class II</option>
            <option value="III">Class III</option>
            <option value="IV">Class IV</option>
            <option value="V">Class V</option>
            <option value="VI">Class VI</option>
            <option value="VII">Class VII</option>
            <option value="VIII">Class VIII</option>
          </select>
        </div>
        
        <section className="syllabus-table-section" >
          {/* Class I */}
        <div className="container"data-aos="fade-up">
          {selectedClass === "I" && (
            <>
              <h2 className="table-main-heading">
            Syllabus for Annual Exam (2025–26)
          </h2>
          <h4 className="table-sub-heading">Class I</h4>

          {/* ===== TABLE 1 ===== */}
          <div className="table-wrapper">
            <table className="syllabus-table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Syllabus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>English</b></td>
                  <td>
                    <b>Reader:</b> 
                    <ul>
                      <li>Ch-11 The Little Red Hen</li>
                      <li>Ch-12 Picnic at the Beach</li>
                      <li>Ch-13 A Road Trip</li>
                    </ul>   
                    <b>Grammar:</b>
                    <ul>
                      <li>Ch- 10 A,An,The</li>
                      <li>Ch- 17 will</li>
                      <li>Ch- 19 Sentence and Questions</li>
                      <li>Ch- 21 And,Or</li>
                    </ul>
                    <b>Reading</b><br/>
                    Unseen passage (Read the passage and tick the correct answer)<br/>
                    <b>Writing</b><br/>
                    Completing a letter( complete the lines)<br/> 
                    Look at the picture and complete the paragraph<br/>
                    <b>Subject Enrichment</b><br/>
                    Recitation (picnic at the beach ( 6 lines))
                  </td>
                </tr>
                <tr>
                  <td><b>Maths</b></td>
                  <td>
                    <ul>
                      <li>Ch-7 Addition and Subtraction</li>
                      <li>Ch-9 Time and money</li>
                      <li>Ch-10 Data Handling</li>
                      <li>Ch-12 Division readiness</li>
                      <li>Tables 1 to 10</li>
                      <li>Number names 151 to 300</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td><b>Hindi</b></td>
                  <td>
                    <b>MCB-</b>
                    <ul>
                      <li>Ch-8 खुराफाती बंदर </li>
                      <li>Ch-9 बुद्धिमान खरगोश </li>
                      <li>Ch-10 तैरूँ या उड़ु</li>
                      <li>Ch-11 बड़े काम क़े हाथ</li>
                      <li>कविता आया सब्जी वाला</li>
                      <li>Number names 151 to 300</li>
                    </ul>

                    <b>Grammar-</b>
                    <ul>
                      <li>Ch-12 उल्टे अर्थ वाले शब्द</li>
                      <li>Ch-13 चित्र वर्णन</li>
                      <li>Ch-15 गिनती </li>
                    </ul>

                    <b>Writing-</b>
                    <ul>
                      <li>अनुच्छ़ेद ल़ेखन, कहानी ल़ेखन,चित्र वर्णन, सुल़ेख, अपठित गद्यांश  
                          SEA- कविता </li>
                      <li>Ch-13 चित्र वर्णन</li>
                      <li>Ch-15 गिनती </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td><b>EVS</b></td>
                  <td>
                    <ul>
                    <li>Ch-13 My Community</li>
                    <li>Ch-14 My Country</li>
                    <li>Ch-15 Celebration</li>
                    <li>Ch-16 Modes of Travel</li>
                    <b>Activity</b> (Modes of travel)
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td><b>Computer</b></td>
                  <td>
                    <ul>
                      <li>Ch-7 Fun with Tux paint</li>
                      <li>Ch-8 Coding fun</li>
                      Practical and Viva Ch-7 Fun with Tux paint
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td><b>G.K</b></td>
                  <td>
                    Ch-32 to 40 and Series Scheme
                  </td>
                </tr>
                <tr>
                  <td><b>Drawing</b></td>
                  <td>
                    Lady Bug 
                  </td>
                </tr>
                <tr>
                  <td><b>Art & Craft</b></td>
                  <td>
                    Boat (Origami)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/*TABLE 2 & 3*/}
             <CommonExamTables/>
             
             </>
          )}
          {selectedClass === "II" && (
            <>
                 {/* Class 2 */}
            <h2 className="table-main-heading">
            Syllabus for Annual Exam (2025–26)
          </h2>
          <h4 className="table-sub-heading">Class II</h4>

          <div className="table-wrapper">
            <table className="syllabus-table">
             <thead>
            <tr>
              <th>Subject</th>
                <th>Syllabus</th>
                </tr>
                </thead>
                  <tbody>
                    <tr>
                      <td><b>English</b></td>
                      <td>
                        <b>Reader:</b>
                        <ul>
                          <li>Ch-11 My Brother's Wheelchair</li>
                          <li>Ch-12 Mr Fox Has a Plan</li>
                          <li>Ch-13 Pinocchio</li>
                        </ul>

                        <b>Grammar:</b>
                        <ul>
                          <li>Ch-16 Has, Have, Had</li>
                          <li>Ch-17 Was, Were</li>
                          <li>Ch-18 Go, Goes, Do, Does</li>
                          <li>Ch-19 Is, Are, Am & Doing words (-ing)</li>
                          <li>Ch-20 The Past and the Present</li>
                          <li>Ch-21 It Will Happen Tomorrow</li>
                          <li>Ch-22 Short Forms</li>
                        </ul>

                        <b>Reading:</b> Unseen passage<br/>
                        <b>Writing:</b>
                        <ul>
                          <li>Letter Writing (Informal)</li>
                          <li>Paragraph Writing</li>
                        </ul>

                        <b>Subject Enrichment:</b><br/>
                        Recitation – <i>My Brother’s Wheelchair</i> (7 lines)
                      </td>
                    </tr>

                    <tr>
                      <td><b>Maths</b></td>
                      <td>
                        <ul>
                          <li>Ch-7 Division</li>
                          <li>Ch-9 Shapes and Patterns</li>
                          <li>Ch-10 Money</li>
                          <li>Ch-12 Data Handling</li>
                          <li>Tables 2 to 15</li>
                        </ul>
                      </td>
                    </tr>

                    <tr>
                      <td><b>Hindi</b></td>
                      <td>
                        <b>MCB:</b>
                        <ul>
                          <li>Ch-9 भविष्यवाणी</li>
                          <li>Ch-10 हरिद्वार की सैर</li>
                          <li>Ch-11 नकल नहीं अकल</li>
                          <li>Ch-12 लगी आग</li>
                        </ul>

                        <b>Grammar:</b>
                        <ul>
                          <li>Ch-11 समानार्थी शब्द</li>
                          <li>Ch-12 विलोम शब्द</li>
                          <li>Ch-13 दिन और महीने</li>
                          <li>Ch-16 गिनती</li>
                        </ul>

                        <b>Writing:</b>
                        <ul>
                          <li>अनुच्छेद</li>
                          <li>सुलेख</li>
                          <li>पत्र लेखन (औपचारिक)</li>
                          <li>अपठित गद्यांश</li>
                          <li>पद्यांश, चित्र वर्णन</li>
                        </ul>

                        SEA – कविता
                      </td>
                    </tr>

                    <tr>
                      <td><b>EVS</b></td>
                      <td>
                        <ul>
                          <li>Ch-11 Houses</li>
                          <li>Ch-12 My Neighbourhood</li>
                          <li>Ch-13 My Country</li>
                          <li>Ch-14 Modes of Communication</li>
                        </ul>
                        SEA – Ch 13 & 14
                      </td>
                    </tr>

                    <tr>
                      <td><b>Computer</b></td>
                      <td>
                        <ul>
                          <li>Ch-7 AI Around Us</li>
                          <li>Ch-8 Internet</li>
                        </ul>
                        Practical & Viva – MS Word
                      </td>
                    </tr>

                    <tr>
                      <td><b>G.K</b></td>
                      <td>Ch-35 to 44</td>
                    </tr>

                    <tr>
                      <td><b>Drawing</b></td>
                      <td>Panda</td>
                    </tr>

                    <tr>
                      <td><b>Art & Craft</b></td>
                      <td>House (Origami)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            {/* Table 2 & 3 */}
            <CommonExamTables/>
            
            </>
          )}
           {selectedClass === "III" && (
            <>
              {/* Class 3 */}
              <h2 className="table-main-heading">
                Syllabus for Annual Exam (2025–26)
              </h2>
            <h4 className="table-sub-heading">Class III</h4>

                {/* Table 1 */}
               <div className="table-wrapper">
                <table className="syllabus-table">
                      <thead>
                        <tr>
                          <th>Subject</th>
                          <th>Syllabus</th>
                        </tr>
                      </thead>
                      <tbody>

                        <tr>
                          <td><b>English</b></td>
                          <td>
                            <b>Reader:</b>
                            <ul>
                              <li>Ch-13 The Lion and the Mouse</li>
                              <li>Ch-14 Gopal and the Hilsa Fish</li>
                              <li>Ch-15 True Friends</li>
                            </ul>

                            <b>Grammar:</b>
                            <ul>
                              <li>Ch-12 Verbs</li>
                              <li>Ch-13 Am, Is, Are</li>
                              <li>Ch-14 Was, Were</li>
                              <li>Ch-17 Simple Past Tense</li>
                              <li>Ch-18 Simple Future Tense</li>
                              <li>Ch-22 Interjection</li>
                              <li>Ch-26 Words: A Mixed Bag</li>
                            </ul>

                            <b>Reading:</b> Seen & Unseen Passage<br/>
                            <b>Writing:</b> Diary Writing, Notice Writing<br/>
                            <b>Subject Enrichment:</b> Reading Comprehension
                          </td>
                        </tr>

                        <tr>
                          <td><b>Maths</b></td>
                          <td>
                            <ul>
                              <li>Ch-6 Fractions</li>
                              <li>Ch-9 Money</li>
                              <li>Ch-11 Patterns & Symmetry</li>
                              <li>Ch-12 Data Handling</li>
                            </ul>
                          </td>
                        </tr>

                        <tr>
                          <td><b>Hindi</b></td>
                          <td>
                            <b>MCB:</b>
                            <ul>
                              <li>Ch-9 सोने की खान</li>
                              <li>Ch-10 गुलदस्ता</li>
                              <li>Ch-11 जादू का ब्रुश</li>
                              <li>Ch-12 बीज और पौधा</li>
                            </ul>

                            <b>Grammar:</b>
                            <ul>
                              <li>पर्यायवाची शब्द</li>
                              <li>विलोम शब्द</li>
                              <li>अनेक शब्दों के लिए एक शब्द</li>
                              <li>अनेकार्थी शब्द</li>
                              <li>विराम-चिह्न</li>
                              <li>मुहावरे</li>
                            </ul>

                            <b>Writing:</b>
                            <ul>
                              <li>अनुच्छेद लेखन</li>
                              <li>सुलेख</li>
                              <li>पत्र लेखन (औपचारिक)</li>
                              <li>अपठित गद्यांश</li>
                              <li>चित्र वर्णन</li>
                            </ul>
                          </td>
                        </tr>

                        <tr>
                          <td><b>EVS</b></td>
                          <td>
                            <ul>
                              <li>Ch-15 Our Houses</li>
                              <li>Ch-16 Map</li>
                              <li>Ch-17 Way of Travelling</li>
                              <li>Ch-18 Means of Communication</li>
                              <li>Ch-19 Wonderful Circle of Family</li>
                              <li>Ch-20 I am a Scientist</li>
                            </ul>
                            SEA – Ch 16 to 18
                          </td>
                        </tr>

                        <tr>
                          <td><b>Computer</b></td>
                          <td>
                            <ul>
                              <li>Ch-6 Coding with Scratch</li>
                              <li>Ch-8 AI and its Application</li>
                            </ul>
                            Practical & Viva – Formatting in MS Word
                          </td>
                        </tr>

                        <tr>
                          <td><b>G.K</b></td>
                          <td>Ch-38 to 54</td>
                        </tr>

                        <tr>
                          <td><b>Drawing</b></td>
                          <td>Hen (Page No. 11)</td>
                        </tr>

                        <tr>
                          <td><b>Art & Craft</b></td>
                          <td>Environment</td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                  {/* Table 2 & 3 */}
                  <CommonExamTables/>                 
            </>
           )}
                {selectedClass === "IV" && (
                  <>
                    {/* Class IV */}
                <h2 className="table-main-heading">
                Syllabus for Annual Exam (2025–26)
                </h2>
               <h4 className="table-sub-heading">Class IV</h4>
                
                <div className="table-wrapper">
                <table className="syllabus-table">
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Syllabus</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr>
                      <td><b>English</b></td>
                      <td>
                        <b>Course Book:</b> Ch-13 to 16<br/>
                        <b>Grammar:</b> Ch-9, 15, 16, 21 & 22<br/>
                        <b>Writing:</b> Story Writing, Seen & Unseen Passage, Picture Composition<br/>
                        SEA – Unseen Poem
                      </td>
                    </tr>

                    <tr>
                      <td><b>Maths</b></td>
                      <td>
                        <ul>
                          <li>Ch-7 Decimals</li>
                          <li>Ch-8 Measurement</li>
                          <li>Ch-9 Time</li>
                          <li>Ch-10 Money</li>
                          <li>Ch-13 Volumes & Nets</li>
                          <li>Ch-14 Data Handling</li>
                        </ul>
                      </td>
                    </tr>

                    <tr>
                      <td><b>Hindi</b></td>
                      <td>
                        <b>MCB:</b>
                        <ul>
                          <li>नाच री कठपुतली</li>
                          <li>हवा चली</li>
                          <li>ईदगाह</li>
                          <li>दादा जी की चौपाल</li>
                        </ul>

                        <b>Grammar:</b>
                        <ul>
                          <li>विलोम शब्द</li>
                          <li>अनेकार्थी शब्द</li>
                          <li>वाक्यांश के लिए एक शब्द</li>
                          <li>विराम-चिह्न</li>
                          <li>अशुद्धि शोधन</li>
                          <li>मुहावरे</li>
                        </ul>

                        <b>Writing:</b>
                        अनुच्छेद लेखन, सुलेख, पत्र लेखन (औपचारिक), अपठित गद्यांश, चित्र वर्णन
                      </td>
                    </tr>

                    <tr>
                      <td><b>EVS</b></td>
                      <td>
                        <ul>
                          <li>Ch-12 Water Management</li>
                          <li>Ch-13 Shelter and Houses</li>
                          <li>Ch-14 Time to Travel</li>
                          <li>Ch-15 Maps & Places</li>
                          <li>Ch-16 Local Institutions Around Us</li>
                          <li>Ch-17 I am a Scientist</li>
                        </ul>
                        SEA – Ch 14 & 15
                      </td>
                    </tr>

                    <tr>
                      <td><b>Computer</b></td>
                      <td>
                        Ch-7 & 8<br/>
                        Practical – PowerPoint Slides (5 slides)  
                        <b>Topic:</b> Seasons
                      </td>
                    </tr>

                    <tr>
                      <td><b>G.K</b></td>
                      <td>Ch-35 to 54</td>
                    </tr>

                    <tr>
                      <td><b>Drawing</b></td>
                      <td>Save Every Drop</td>
                    </tr>

                    <tr>
                      <td><b>Art & Craft</b></td>
                      <td>Owl (Origami) – Page 41</td>
                    </tr>

                  </tbody>
                </table>
              </div>
              {/* Table 2 & 3 */}
              <CommonExamTables/>
            
            </>
          )}            
          {selectedClass === "V" && (
            <>
                    {/* Class V */}
              <h2 className="table-main-heading">
                Syllabus for Annual Exam (2025–26)
              </h2>
            <h4 className="table-sub-heading">Class V</h4>
            <div className="table-wrapper">
              <table className="syllabus-table">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Syllabus</th>
                  </tr>
                </thead>
                <tbody>

                  <tr>
                    <td><b>English</b></td>
                    <td>
                      <b>Reader:</b> Lessons 14 to 17<br/>
                      <b>Grammar:</b> Lessons 19 to 24<br/>
                      <b>Writing:</b> Notice, Story & Informal Letter Writing<br/>
                      <b>Reading:</b> Seen & Unseen Passage<br/>
                      SEA – Reading Comprehension
                    </td>
                  </tr>

                  <tr>
                    <td><b>Maths</b></td>
                    <td>
                      <ul>
                        <li>Ch-7 Percentage</li>
                        <li>Ch-8 Measurement</li>
                        <li>Ch-11 Profit & Loss</li>
                        <li>Ch-13 Perimeter, Area & Volume</li>
                        <li>Ch-15 Data Handling</li>
                        <li>Ch-16 Mapping Skills</li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td><b>Hindi</b></td>
                    <td>
                      <b>MCB:</b>
                      <ul>
                        <li>Ch-11 विकलांग नहीं, दिव्यांग हूँ मैं</li>
                        <li>Ch-12 सुख का कुंज</li>
                        <li>Ch-13 बैक्टीरिया</li>
                        <li>Ch-14 तोत्तो-चान</li>
                      </ul>
                      <br/>
                      <b>Grammar:</b>
                      <ul>
                        <li>Ch-11 अविकारी शब्द</li>
                        <li>Ch-12  शब्द भंडार</li>
                        <li>Ch-13 मुहावरे और लोकोक्तियाँ</li>
                        <li>Ch-14 विराम-चिह्न</li>
                      </ul><br/>
                      <b>Writing:</b> अनुच्छेद लेखन,सुलेख,पत्र लेखन (अनौपचारिक), अपठित गद्यांश, चित्र वर्णन
                    </td>
                  </tr>
                  <tr>
                    <td><b>S.St</b></td>
                    <td>Ch-14 to 17<br/>SEA – Case Based Question</td>
                  </tr>

                  <tr>
                    <td><b>Science</b></td>
                    <td>
                      <ul>
                        <li>Ch-11 Solid, Liquid & Gas</li>
                        <li>Ch-12 Light & Shadow</li>
                        <li>Ch-13 Force & Energy</li>
                        <li>Ch-14 Measurement</li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td><b>Computer</b></td>
                    <td>
                      Ch-7 & 8<br/>
                      Practical – Table on MS Excel
                    </td>
                  </tr>

                  <tr>
                    <td><b>G.K</b></td>
                    <td>Ch-33 to 54</td>
                  </tr>

                  <tr>
                    <td><b>Drawing</b></td>
                    <td>Digital India</td>
                  </tr>

                  <tr>
                    <td><b>Art & Craft</b></td>
                    <td>Tree Frame – Page No. 33</td>
                  </tr>
                  </tbody>
                    </table>
                  </div>
                  {/* Table 2 & 3 */}
                  <CommonExamTables/>
                  
                  </>
                )}

              {selectedClass === "VI" && (
                <>
                   {/* Class VI*/}
          <h2 className="table-main-heading">
            Syllabus for Annual Exam (2025–26)
          </h2>
          <h4 className="table-sub-heading">Class VI</h4>
          <div className="table-wrapper">
  <table className="syllabus-table">
    <thead>
      <tr>
        <th>Subject</th>
        <th>Syllabus</th>
      </tr>
    </thead>
    <tbody>

      <tr>
        <td><b>English</b></td>
        <td>
          <b>Reader:</b> Lessons 9 to 16<br/>
          <b>Grammar:</b> Lessons 1, 11–13 & 18–28<br/>
          <b>Writing:</b> Diary Entry, Notice Writing, Informal Letter Writing<br/>
          <b>Reading:</b> Seen & Unseen Passage<br/>
          <b>ASL:</b> Listening
        </td>
      </tr>

      <tr>
        <td><b>Maths</b></td>
        <td>
          <ul>
            <li>Ch-5 Prime Time</li>
            <li>Ch-6 Perimeter and Area</li>
            <li>Ch-7 Fractions</li>
            <li>Ch-8 Playing with Construction</li>
            <li>Ch-9 Symmetry</li>
            <li>Ch-10 Other Side of Zero</li>
          </ul> 
        </td>
      </tr>

      <tr>
        <td><b>Hindi</b></td>
        <td>
          <b>MCB:</b>
          <ul>
            <li>Ch-8 डॉ. भीमराव अंबेडकर</li>
            <li>Ch-9 तुलसीदास और कबीरदास के दोहे</li>
            <li>Ch-10 गाँव बड़ा या शहर</li>
            <li>Ch-11 मिठाईवाला</li>
            <li>Ch-12 मिथिला की मधुबनी </li>
            <li>Ch-13 कलम आज उनकी जय बोल!</li>
            <li>Ch-14 पक्की दोस्ती</li>
          </ul>
          बाल रामायण - Page no -41 to 84<br/>

          <b>Grammar:</b>
          <ul>
            <li>Ch-11 वचन</li>
            <li>Ch-12 कारक </li>
            <li>Ch-13 सर्वनाम</li>
            <li>Ch-14 विशेषण</li>
            <li>Ch-15 क्रिया </li>
            <li>Ch-16  काल</li>
            <li>Ch-17 अव्यय  (अविकारी शब्द)</li>
            <li>CH-18 वाक्य</li>
            <li>CH-19 वर्तनी एवं वाक्य-रचना  संबंधी सामान्य अशुद्धियाँ</li>
            <li>CH-20 विराम-चिह्न</li>
            <li>CH-21 मुहावरे</li>
            <li></li>
          </ul><br/>
          <b>Writing:</b>
         अपठित गद्यांश, पद्यांश , अनुच्छेद लेखन, पत्र लेखन (औपचारिक), संवाद लेखन, कहानी लेखन, चित्र वर्णन
        </td>
      </tr>

      <tr>
        <td><b>S.St</b></td>
        <td>
           <ul>
            <li>Ch-1 Locating Places on Earth</li>
            <li>Ch-6  The beginnings of Indian civilization</li>
            <li>Ch-7  India's Cultural Roots</li>
            <li>Ch-10 Grassroots Democracy part I Governance  </li>
            <li>Ch-11 Grassroots Democracy part II Local Government in  
             Rural areas  </li>
            <li>Ch-12 Grassroots Democracy part III Local Government in  
             Urban areas  </li>
            <li>Ch-13 The Value of Work </li>
            <li>Ch-14 Economic activities around us</li>
          </ul>
          <br/>
          <b>Map Work:</b>Map practice book Page 50 & 74
        </td>
      </tr>

      <tr>
        <td><b>Science</b></td>
        <td>
          <ul>
            <li>Ch-6 Materials around us</li>
            <li>Ch-7 Temperature</li>
            <li>Ch-8 A journey through states of water</li>
            <li>Ch-9 Methods of separation in everyday life </li>
            <li>Ch-10 Living Creatures </li>
            <li>Ch-11 Nature’s Treasure</li>
            <li>Ch-12 Beyonds Earth </li>
          </ul>
        </td>
      </tr>

      <tr>
        <td><b>Sanskrit</b></td>
        <td>
          <ul>
            <li>अपठित गद्यांश</li>
            <li>दीपकम्</li>
            <li>पठित अवबोधनम् - गद्यांश–पद्यांश–नाट्यांश </li>
            <li>९.नवमः पाठः - यो जानाति सः पण्डितः </li>
            <li>१०. दशमः पाठः - त्वम् आपणां गच्छ </li>
            <li>११. एकादशः पाठः - पृथिव्यां त्रिणि रत्नानि</li>
            <li>१२. द्वादशः पाठः - आलस्यं हि मनुष्याणां शरीरस्थो महान् रिपु</li>
            <li>१३. त्रयोदशः पाठः - सङ्ख्यागणना ननु सरला</li>
            <li>१४. चतुर्दशः पाठः - माधवस्य प्रियम् अङ्गम्</li>
            <li>१५. पञ्चदशः पाठः - वृक्षाः सत्पुरुषाः इव</li>
          </ul>
          <br/>
          <b>दिव्यम्-</b>
          <ul>
            <li>ch- 4. पुरुष-विचारः</li>
            <li>ch- 8. अकारान्त-पुल्लिंग-शब्द-रूपाणि</li>
            <li>Ch- 9. इकारान्त-उकारान्त-पुल्लिंग-शब्द-रूपाणि</li>
            <li>10. आकारान्त-स्त्रीलिंग-शब्द-रूपाणि</li>
            <li>11. सर्वनाम-शब्द-रूपाणि</li>
            <li>12. संख्यावाचक-शब्दाः</li>
            <li>13. धातु-रूपाणि</li>
            <li>14. विशेषण-विशेष्य-सम्बन्धः</li>
            <li>15. अव्यय-पदानि</li>
            <li>16. सन्धिः</li>
            <li>17. अशुद्धि-संशोधनम्</li>
          </ul>
          <br/>
          <b>Writing:</b> पत्रलेखनम् ,  सांवादाः , चित्र वर्णनम् 
        </td>
      </tr>
      <tr>
        <td><b>Computer</b></td>
        <td>Ch-6, 7, 8, 9</td>
          </tr>
          <tr>
            <td><b>G.K</b></td>
            <td>Page 57 to 72</td>
          </tr>
          <tr>
            <td><b>Drawing</b></td>
            <td>Folk Art (Page 53)</td>
          </tr>
        </tbody>
      </table>
    </div>

          {/*Table 2 & 3 */}
          <ExamTables/>
          
        </>
      )}
      
      {selectedClass === "VII" && (
        <>
              {/* Class VII */}
          <h2 className="table-main-heading">
            Syllabus for Annual Exam (2025–26)
          </h2>
          <h4 className="table-sub-heading">Class VII</h4>
          <div className="table-wrapper">
            <table className="syllabus-table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Syllabus</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td><b>English</b></td>
                  <td>
                    <b>Reader:</b> Unit-1 (Three Questions), Unit-5 to 8<br/>
                    <b>Supplementary:</b> Lessons 5 to 7<br/>
                    <b>Grammar:</b> Lessons 5 & 14 to 25<br/>
                    <b>Writing:</b> E-mail Writing, Paragraph Writing, Diary Entry<br/>
                    <b>Reading:</b> Seen & Unseen Passage<br/>
                    <b>ASL:</b> Listening
                  </td>
                </tr>

                <tr>
                  <td><b>Maths</b></td>
                  <td>
                    <ul>
                      <li>Ch-4 Simple Equation</li>
                      <li>Ch-7 Comparing Quantities</li>
                      <li>Ch-8 Rational Numbers</li>
                      <li>Ch-9 Perimeter & Area</li>
                      <li>Ch-10 Algebraic Expression</li>
                      <li>Ch-11 Exponents & Powers</li>
                      <li>Ch-12 Symmetry</li>
                      <li>Ch-13 Visualising Solid Shapes</li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td><b>Hindi</b></td>
                  <td>
                    <b>MCB:</b>
                    <ul>
                      <li>बाल लीला</li>
                      <li>गुमनाम नायक</li>
                      <li>खुराफाती</li>
                      <li>यहाँ शब्द नहीं तीर बोलते हैं</li>
                      <li>सरिता</li>
                      <li>प्रकृति का सान्निध्य</li>
                      <li>मॉरीशस छोटा सा हिंदुस्तान</li>
                    </ul>

                    <b>Grammar:</b>
                    <ul>
                      <li>वचन</li>
                      <li>कारक</li>
                      <li>सर्वनाम</li>
                      <li>विशेषण</li>
                      <li>क्रिया</li>
                      <li>काल</li>
                      <li>वाच्य</li>
                      <li>अव्यय / अविकारी शब्द</li>
                      <li>वाक्य</li>
                      <li>शब्द व वाक्य रचना की अशुद्धियाँ</li>
                      <li>विराम चिन्ह</li>
                      <li>मुहावरे और लोकोक्तियाँ</li>
                    </ul>

                    <b>Writing:</b>
                    अनुच्छेद लेखन, पत्र लेखन, संवाद लेखन, ई-मेल लेखन, चित्र वर्णन<br/>
                    <b>बाल महाभारत:</b> Page 52–97
                     Non Academic exam Listening comprehension
                  </td>
                </tr>

                <tr>
                  <td><b>S.St</b></td>
                  <td>
                    <b>History:</b> 
                    <ul>
                      <li>Ch-4 The Mughal Empire </li>
                      <li>Ch-5 Tribes, Nomads and settled communities </li>
                      <li>Ch-6 Devotional Paths to the Divine  </li>
                      <li>Ch-7 The making of regional culture</li>
                      <li>Ch-8  Eighteenth century political formation</li>
                    </ul>
                    <br/>
                    <b>Geography:</b> 
                    <ul>
                      <li>Ch-4  Air</li>
                      <li>Ch-5 Water</li>
                      <li>Ch-6 The Tropical and Sub-Tropical Regions </li>
                      <li>Ch-7 Life in the Deserts</li>
                    </ul>
                    <br/>
                    <b>Civics:</b> 
                    <ul>
                      <li>Ch-5 Women Change the World </li>
                      <li>Ch-6 Understanding Media</li>
                      <li>Ch-7 Market around us</li>
                      <li>Ch-8 A Shirt in the Market </li>
                    </ul>
                    <br/>
                    <b>Map Work:</b>Map Practice book Page 66, 67 & 84
                  </td>
                </tr>

                <tr>
                  <td><b>Science</b></td>
                  <td>
                    <ul>
                      <li>Ch-4 Acids ,bases and salts</li>
                      <li>Ch-5 Physical and chemical changes </li>
                      <li>Ch- 8 Reproduction in plants</li>
                      <li>Ch-9 Motion and time </li>
                      <li>Ch-10 Electric current and its effect</li>
                      <li>Ch-12- Forests</li>
                      <li>Ch-13 wastewater story</li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td><b>Sanskrit</b></td>
                  <td>
                    अपठित गद्यांश
                    <b>रुचिरा —</b>
                    <ul>
                        <li>पठित अवबोधनम् - गद्यांश, पद्यांश, नाट्यांश</li>
                        <li>अष्टमः पाठः - त्रिवर्णः ध्वजः</li>
                        <li>नवमः पाठः - अहमपि विद्यालयं गमिष्यामि</li>
                        <li>दशमः पाठः - विश्वबन्धुत्वम्</li>
                        <li>एकादशः पाठः - समवायो हि दुर्जयः</li>
                        <li>द्वादशः पाठः - विद्यालयम्</li>
                        <li>त्रयोदशः पाठः - अमृतं संस्कृतम्</li>
                        <li>चतुर्दशः पाठः - लालगीतम्</li>
                    </ul>
                  <br/>
                  <b>दिव्यम्- </b>
                  <ul>
                    <li>ch-2 सन्धिः</li>
                    <li>ch-3 कारकाः उपपद - विभक्तयः च</li>
                    <li>ch-9 उपसर्गाः अव्ययाः च</li>
                    <li>ch-10 प्रत्ययाः</li>
                    <li>ch-11 अशुद्धि - संशोधनम्</li>
                    <li>ch-12 समय - लेखनम्</li>
                  </ul>
                  <b>Writing:</b> पत्र लेखनम्, संवाद लेखनम्, चित्र वर्णनम्, चित्राधारित प्रश्नाः
                  Non Academic Exam Listening Comprehension 
                  </td>
                </tr>

                <tr>
                  <td><b>Computer</b></td>
                  <td>Ch-6, 7, 8, 9</td>
                </tr>

                <tr>
                  <td><b>G.K</b></td>
                  <td>Lessons 29 to 56</td>
                </tr>

                <tr>
                  <td><b>Drawing</b></td>
                  <td>Folk Art (Page 53–54)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ExamTables/>
        </>
      )}
          
      {selectedClass === "VIII" && (
        <>
            {/* class 8 */}
          <h2 className="table-main-heading">
            Syllabus for Annual Exam (2025–26)
          </h2>
          <h4 className="table-sub-heading">Class VIII</h4>
          <div className="table-wrapper">
            <table className="syllabus-table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Syllabus</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td><b>English</b></td>
                  <td>
                    <b>Reader:</b> Unit-5 to 8<br/>
                    <b>Supplementary:</b> Lessons 1 & 5 to 8<br/>
                    <b>Grammar:</b> Lessons 2, 7, 15 to 27<br/>
                    <b>Writing:</b> E-mail, Notice & Informal Letter Writing<br/>
                    <b>Reading:</b> Seen & Unseen Passage<br/>
                    <b>ASL:</b> Listening
                  </td>
                </tr>

                <tr>
                  <td><b>Maths</b></td>
                  <td>
                    <ul>
                      <li>Ch-3 Understanding quadrilateral </li>
                      <li>Ch-5 Square and square root</li>
                      <li>Ch-6 Cubes and cube root </li>
                      <li>Ch-7 Comparing Quantities </li>
                      <li>Ch-8 Algebraic expression</li>
                      <li>Ch-9 Mensuration </li>
                      <li>Ch-12 Factorisation </li>
                      <li>Ch-13 Introduction to graph</li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td><b>Hindi</b></td>
                  <td>
                    <ul>
                      <li>L-8 साइकिल की सवारी </li>
                      <li>L-9  कर्मवीर</li>
                      <li>L-10 डायरी का एक पन्ना</li>
                      <li>L-11 मेरा विद्यार्थी जीवन</li>
                      <li>L-12 भविष्य का भय</li>
                      <li>L-13  गिरधर की कुंडलियाँ</li>
                      <li>L-14 नीलू </li>
                    </ul>
                    <br/>
                    <b>Grammar:</b> 
                    <ul>
                      <li>L-10 वचन </li>
                      <li>L-11 कारक </li>
                      <li>L-12 सर्वनाम </li>
                      <li>L-13  विशेषण </li>
                      <li>L-14  क्रिया</li>
                      <li>L-15 काल</li>
                      <li>L-16 अव्यय या अवविारी शब्द</li>
                      <li>L-17 वाच्य </li>
                      <li>L-18 पद परिचय</li>
                      <li>L-19 वाक्य विचार </li>
                      <li>L-20 शब्द-पद-पदबंध </li>
                      <li>L-21 वाक्य रचना की अशुद्धियाँ</li>
                      <li>L-22 विराम चिन्ह </li>
                      <li>L-24  मुहावरे</li>
                    </ul>
                    <br/>
                    <b>Writing:</b> 
                    अनुच्छेद लेखन, पत्र लेखन, नारा लेखन,
                    संवाद लेखन, चित्र वर्णन<br/>
                    <b>Bharat ki khoj:</b>L-6 अंतिम दौर-१ L-7 अंतिम दौर-२ L-8 तनाव अपठित गद्यांश, पद्यांश
                    Non academic exam listening comprehension
                  </td>
                </tr>

                <tr>
                  <td><b>S.St</b></td>
                  <td>
                    <b>History:</b> 
                    <ul>
                      <li>Ch-4 Tribals, Dikus and the vision of a golden age </li>
                      <li>Ch-5 When People Rebel: 1857 and after</li>
                      <li>Ch-6 Civilising the Native Educating the nation</li>
                      <li>Ch-7 Women, Caste and Reform </li>
                      <li>Ch-8 The making of the National Movement 1870-1947</li>
                    </ul>
                    <br/>
                    <b>Geography:</b> 
                    <ul>
                     <li>Ch-3 Agriculture  </li>
                     <li>Ch-4 Industries  </li>
                     <li>Ch-5 Human Resources </li> 
                    </ul>
                    <br/>
                    <b>Civics:</b> 
                    <ul>
                      <li>Ch-5 Understanding Marginalisation </li>
                      <li>Ch-6 Confronting Marginalisation</li>
                      <li>Ch-7 Public Facilities</li>
                      <li>Ch-8 Law and Social justice</li>
                    </ul>
                    <br/>
                    <b>Map Work:</b>Map Practice book Page 70 & 84
                  </td>
                </tr>

                <tr>
                  <td><b>Science</b></td>
                  <td>
                    <ul>
                      <li>Ch-3 coal and petroleum </li>
                      <li>Ch-4 combustion and flame </li>
                      <li>Ch-5 conservation of plants and animals </li>
                      <li>Ch-6 Reproduction in animals</li>
                      <li>Ch-7 Reaching the age of adolescence </li>
                      <li>Ch-10 sound </li>
                      <li>Ch-11 chemical effects of electric current </li>
                      <li>Ch-12 Some natural phenomenon</li>
                      <li>Ch-13 Light </li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td><b>Sanskrit</b></td>
                  <td>
                  अपठित गद्यांश<br/>
                  <b>रुचिरा</b>
                  <ul>
                    <li>पठित अवबोधनम् - गद्यांश, पद्यांश, नाट्यांश</li>
                    <li>नवमः पाठः - सत्यमेव जयते</li>
                    <li>दशमः पाठः - नीति नवनीतम्</li>
                    <li>एकादशः पाठः - सावित्री बाई फुले</li>
                    <li>द्वादशः पाठः - कः खलु कः रक्षितः</li>
                    <li>त्रयोदशः पाठः - हिन्दो राजते भारतस्वर्णभूमिः</li>
                    <li>चतुर्दशः पाठः - आर्यमटः</li>
                    <li>पञ्चदशः पाठः - प्रहेलिकाः</li>
                  </ul>
                  <br/>
                  <b>दिव्यम् –</b>
                  <ul>
                    <li>ch-2 सन्धि-प्रकरणम्</li>
                    <li>ch-3 कारकाः उपपद-विभक्तयः च</li>
                    <li>ch-9 समास-परिचयः</li>
                    <li>ch-10 समय-लेखनम्</li>
                    <li>ch-11 प्रत्ययाः</li>
                    <li>ch-12 वाच्य-परिवर्तनम्</li>
                    <li>ch-13 अशुद्धि-संशोधनम्</li>
                  </ul>
                  <br/>
                    <b>Writing:</b>पत्र लेखनम्, संवाद लेखनम्,चित्र वर्णनम्
                    Non Academic Exam Listening Comprehension
                  </td>
                </tr>
                <tr>
                  <td><b>Computer</b></td>
                  <td>Ch-6, 7, 8, 9</td>
                </tr>
                <tr>
                  <td><b>G.K</b></td>
                  <td>Lessons 35 to 68</td>
                </tr>
                <tr>
                  <td><b>Drawing</b></td>
                  <td>Folk Art (Page 60–61)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ExamTables/>   
        </>
      )}                         
        </div>
      </section>
     <ExploreMore />
    </>
  );
}
