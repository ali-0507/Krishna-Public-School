// import { FaBookOpen, FaDownload, FaListUl } from "react-icons/fa";
// import { RiBookShelfFill } from "react-icons/ri";
// import AcademicHero from "../../components/Academics/AcademicHero";
// import ExploreMore from "../../components/Academics/ExploreMore";
// import "../../styles/academics.css";

// const bookListData = [
//   {
//     title: "Primary Section",
//     desc: "Book list for Nursery to Class V (2026–27)",
//     icon: <FaBookOpen />
//   },
//   {
//     title: "Middle & Senior",
//     desc: "Book list for Class VI to XII",
//     icon: <FaListUl />
//   },
//   {
//     title: "Download PDF",
//     desc: "Download complete book list in PDF format.",
//     icon: <FaDownload />
//   }
// ];

// export default function BookList() {
//   return (
//      <>
//       <AcademicHero
//         icon={<RiBookShelfFill />}
//         title="Book List 2026–27"
//         subtitle="Prescribed textbooks for all academic levels"
//       />
//     <section className="academics-section">
//       <div className="container">
//         <div className="row g-4">
//           {bookListData.map((item, index) => (
//             <div
//               className="col-md-4"
//               key={index}
//               data-aos="flip-up"
//               data-aos-delay={index * 120}
//             >
//               <div className="card academics-card h-100 text-center">
//                 <div className="card-body">
//                   <div className="icon-box mx-auto mb-3">{item.icon}</div>
//                   <h5>{item.title}</h5>
//                   <p>{item.desc}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//         <ExploreMore />
//     </>
//   );
// }



import { RiBookShelfFill } from "react-icons/ri";
import AcademicHero from "../../components/Academics/AcademicHero";
import ExploreMore from "../../components/Academics/ExploreMore";
import "../../styles/academics.css";



export default function BookList() {
  return (
    <>
      <AcademicHero
        icon={<RiBookShelfFill />}
        title="Book List 2026–27"
        subtitle="Prescribed textbooks for all academic levels"
      />

      {/* VIEW PDF BUTTON */}
      <div className="booklist-btn-wrapper" data-aos="fade-up">
        <h3>View & Download Complete Book List (PDF)</h3>
      <button className="booklist-view-btn mt-2"
        onClick={() => window.open("/pdf/book-list-2026-27.pdf", "_blank")}>
          Click Here !
      </button>
      </div>

      <section className="mpd-page">

        {/* CLASS I */}
        <div className="mpd-section">
          <h3 className="mpd-section-title" data-aos="fade-up">Class I</h3>

          <div className="mpd-table-wrapper">
            <table className="mpd-table">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Subject</th>
                  <th>Name of Book</th>
                  <th>Publication</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>English</td>
                  <td>English Expert [Course Book] 1</td>
                  <td>Collins</td> 
                </tr>
                <tr>
                  <td>2</td>
                  <td>English Grammar</td>
                  <td>Grammar Blocks – I</td>
                  <td>Collins</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Hindi Grammar</td>
                  <td>Vyakaran Sambodh</td>
                  <td>Madhuban pub</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Hindi</td>
                  <td> Vat Vriksh VER-2</td>
                  <td>Harbour Press International</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>EVS</td>
                  <td>The World For You & Me</td>
                  <td>Macmillan</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Maths</td>
                  <td>Dimensions 1</td>
                  <td>Collins</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Computer</td>
                  <td>Computers with-AI</td>
                  <td>Creative Kids Cardova</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>G.K</td>
                  <td>Junior Genius (Ver.-2.0)</td>
                  <td>My Stone Education</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Reasoning & Aptitude</td>
                  <td>Junior Thinkers (Ver.-1)</td>
                  <td>Focus Learning</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Art & Craft</td>
                  <td>Junior Artist Ver.-2</td>
                  <td>My Stone Education</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        {/* CLASS II */}
         <div className="mpd-section">
          <h3 className="mpd-section-title" data-aos="fade-up">Class II</h3>

          <div className="mpd-table-wrapper"> 
            <table className="mpd-table">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Subject</th>
                  <th>Name of Book</th>
                  <th>Publication</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>English</td>
                  <td>English Expert (Course Book)</td>
                  <td>Collins</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>English Grammar</td>
                  <td>Grammar Blocks</td>
                  <td>Collins</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Hindi Grammar</td>
                  <td>Vyakaran Sambodh</td>
                  <td>Madhuban pub</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Hindi</td>
                  <td> Vat Vriksh VER-2</td>
                  <td>Harbour Press International</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>EVS</td>
                  <td>The World For You & Me</td>
                  <td>Macmillan</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Maths</td>
                  <td>Dimensions</td>
                  <td>Collins</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Computer</td>
                  <td>Computers with-AI</td>
                  <td>Creative Kids Cardova</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>G.K</td>
                  <td>Junior Genius (Ver.-2.0)</td>
                  <td>My Stone Education</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Reasoning & Aptitude</td>
                  <td>Junior Thinkers (Ver.-1)</td>
                  <td>Focus Learning</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Art & Craft</td>
                  <td>Junior Artist Ver.-2</td>
                  <td>My Stone Education</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        {/* CLASS III */}
        <div className="mpd-section">
          <h3 className="mpd-section-title" data-aos="fade-up">Class III</h3>

          <div className="mpd-table-wrapper">
            <table className="mpd-table">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Subject</th>
                  <th>Name of Book</th>
                  <th>Publication</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>English</td>
                  <td>English Expert [Course Book] 3</td>
                  <td>Collins</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>English</td>
                  <td>Grammar Blocks–3</td>
                  <td>Collins</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Hindi</td>
                  <td> Vat Vriksh VER-2</td>
                  <td>Harbour Press International</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Hindi Grammar</td>
                  <td>Vyakaran Sambodh 3</td>
                  <td>Madhuban pub</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>EVS</td>
                  <td>The World For You & Me</td>
                  <td>Macmillan</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Maths</td>
                  <td>Dimensions 3</td>
                  <td>Collins</td>
                </tr>
                 <tr>
                  <td>7</td>
                  <td>G.K</td>
                  <td>Junior Genius (Ver.-2.0)</td>
                  <td>My Stone Education</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Computer</td>
                  <td>Computers with-AI</td>
                  <td>Creative Kids Cardova</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Reasoning & Aptitude</td>
                  <td>Junior Thinkers (Ver.-1)</td>
                  <td>Focus Learning</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Art & Craft</td>
                  <td>Junior Artist Ver.-2</td>
                  <td>My Stone Education</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        {/* CLASS IV */}
        <div className="mpd-section">
          <h3 className="mpd-section-title" data-aos="fade-up">Class IV</h3>

          <div className="mpd-table-wrapper">
            <table className="mpd-table">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Subject</th>
                  <th>Name of Book</th>
                  <th>Publication</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>English</td>
                  <td>English Expert [Course Book]-4</td>
                  <td>Collins</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>English</td>
                  <td>Grammar Blocks-4</td>
                  <td>Collins</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Hindi</td>
                  <td> Vat Vriksh VER-2</td>
                  <td>Harbour Press International</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Hindi Grammar</td>
                  <td>Vyakaran Sambodh 4</td>
                  <td>Madhuban pub</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>EVS</td>
                  <td>The World For You & Me</td>
                  <td>Macmillan</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Maths</td>
                  <td>Dimensions 4</td>
                  <td>Collins</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>G.K</td>
                  <td>Junior Genius Ver.-2</td>
                  <td>My Stone Education</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Computer</td>
                  <td>Computers with-AI</td>
                  <td>Creative Kids Cardova</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Reasoning & Aptitude</td>
                  <td>Junior Thinkers (Ver.-1)</td>
                  <td>Focus Learning</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Art & Craft</td>
                  <td>Junior Artist Ver.-2</td>
                  <td>My Stone Education</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        {/* CLASS V */}
        <div className="mpd-section">
          <h3 className="mpd-section-title" data-aos="fade-up">Class V</h3>

          <div className="mpd-table-wrapper">
            <table className="mpd-table">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Subject</th>
                  <th>Name of Book</th>
                  <th>Publication</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>English</td>
                  <td>English Expert [Course Book] 5</td>
                  <td>Collins</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>English</td>
                  <td>Grammar Blocks</td>
                  <td>Collins</td>
                </tr>
                 <tr>
                  <td>3</td>
                  <td>Hindi</td>
                  <td> Vat Vriksh VER-2</td>
                  <td>Harbour Press International</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Hindi Grammar</td>
                  <td>Vyakaran Sambodh 5</td>
                  <td>Madhuban pub</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Social Science</td>
                  <td>Cascade 5</td>
                  <td>Collins</td>
                </tr>
                 <tr>
                  <td>6</td>
                  <td>Science</td>
                  <td>Enhanced Science Now 5</td>
                  <td>Collins</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Maths</td>
                  <td>Dimensions 5</td>
                  <td>Collins</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Art & Craft</td>
                  <td>Junior Artist Ver.-2</td>
                  <td>My Stone Education</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Computer</td>
                  <td>Computers with-AI</td>
                  <td>Creative Kids Cardova</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Reasoning & Aptitude</td>
                  <td>Junior Thinkers (Ver.-1)</td>
                  <td>Focus Learning</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>GK</td>
                  <td>Junior Genius (Ver.-2.0)</td>
                  <td>My Stone Education</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        {/* CLASS VI */}
        <div className="mpd-section">
          <h3 className="mpd-section-title" data-aos="fade-up">Class VI</h3>

          <div className="mpd-table-wrapper">
            <table className="mpd-table">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Subject</th>
                  <th>Name of Book</th>
                  <th>Publication</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>English</td>
                  <td>Poorvi</td>
                  <td>NECRT</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>English</td>
                  <td>Collins English Grammar & Composition 6</td>
                  <td>Collins</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Hindi</td>
                  <td> Vat Vriksh VER-2</td>
                  <td>Harbour Press International</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Hindi</td>
                  <td>Vyakaran Sambodh</td>
                  <td>Madhuban pub</td>
                </tr>
                
                <tr>
                  <td>5</td>
                  <td>Social Science</td>
                  <td>Exploring Society india and Beyond</td>
                  <td>NECRT</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Social Science</td>
                  <td>Oxford Map practice</td>
                  <td>Oxford</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Science</td>
                  <td>Couriosity</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Maths</td>
                  <td>Garmita Prakash</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Maths</td>
                  <td>RS Agrawal(for practice)</td>
                  <td>Bharti Bhawan</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>GK</td>
                  <td>Junior Genius (Ver.-2.0)</td>
                  <td>My Stone Education</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Computer</td>
                  <td>Computers with-AI</td>
                  <td>Creative Kids Cardova</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Sanskrit</td>
                  <td>Deepakam-I</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Sanskrit</td>
                  <td>Together with Divyam(for practice)</td>
                  <td>Rachna Sagar</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Drawing</td>
                  <td>Junior Artist</td>
                  <td>My Stone Education</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        {/* CLASS VII */}
        <div className="mpd-section">
          <h3 className="mpd-section-title" data-aos="fade-up">Class VII</h3>

          <div className="mpd-table-wrapper">
            <table className="mpd-table">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Subject</th>
                  <th>Name of Book</th>
                  <th>Publication</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>English</td>
                  <td>Poorvi</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>English Grammar</td>
                  <td>Collins English Grammar & Composition 7</td>
                  <td>Collins</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Hindi</td>
                  <td> Vat Vriksh VER-2</td>
                  <td>Harbour Press International</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Hindi</td>
                  <td>Vyakaran Sambodh</td>
                  <td>Madhuban pub</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Social Science</td>
                  <td>Exploring Society: India and Beyond-Part1, Part2</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Social Science</td>
                  <td>Oxford Map Practice</td>
                  <td>Oxford</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Science</td>
                  <td>Couriosity</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Maths</td>
                  <td>Garmita Prakash-Part1, Part2</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Maths</td>
                  <td>RS Agrawal (For Practice)</td>
                  <td>Bharti Bhawan</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>G.K</td>
                  <td>Junior Genius (Ver.-2.0)</td>
                  <td>My Stone Education</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Computer</td>
                  <td>Computers with-AI</td>
                  <td>Creative Kids Cardova</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Sanskrit</td>
                  <td>Deepakam</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Sanskrit</td>
                  <td>Together with Divyam (for Practice)</td>
                  <td>Rachna Sagar</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Drawing</td>
                  <td>Junior Artist</td>
                  <td>My Stone Education</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        {/* CLASS VIII */}
        <div className="mpd-section">
          <h3 className="mpd-section-title" data-aos="fade-up">Class VIII</h3>

          <div className="mpd-table-wrapper">
            <table className="mpd-table">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Subject</th>
                  <th>Name of Book</th>
                  <th>Publication</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>English</td>
                  <td>Poorvi</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>English Grammar</td>
                  <td>Collins English Grammar & Composition 8</td>
                  <td>Collins</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Hindi</td>
                  <td> Vat Vriksh VER-2</td>
                  <td>Harbour Press International</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Hindi</td>
                  <td>Vyakaran Sambodh</td>
                  <td>Madhuban pub</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Social Science</td>
                  <td>Exploring Society: India and Beyond-Part1, Part2</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Social Science</td>
                  <td>Oxford Map Practice</td>
                  <td>Oxford</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Science</td>
                  <td>Couriosity</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Maths</td>
                  <td>Garmita Prakash-Part1, Part2</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Maths</td>
                  <td>RS Agrawal (For Practice)</td>
                  <td>Bharti Bhawan</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>G.K</td>
                  <td>Junior Genius (Ver.-2.0)</td>
                  <td>My Stone Education</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Computer</td>
                  <td>Computers with-AI</td>
                  <td>Creative Kids Cardova</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Sanskrit</td>
                  <td>Deepakam</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Sanskrit</td>
                  <td>Together with Divyam (for Practice)</td>
                  <td>Rachna Sagar</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Drawing</td>
                  <td>Junior Artist</td>
                  <td>My Stone Education</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CLASS IX */}
        <div className="mpd-section">
          <h3 className="mpd-section-title" data-aos="fade-up">Class IX</h3>

          <div className="mpd-table-wrapper">
            <table className="mpd-table">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Subject</th>
                  <th>Name of Book</th>
                  <th>Publication</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>English</td>
                  <td>Moments</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>English</td>
                  <td>Beehive</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Hindi</td>
                  <td>Pathya Pustak Sparsh</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Hindi</td>
                  <td>Purak Pustak Sanchyan</td>
                  <td>NCERT</td>
                </tr>
                 <tr>
                  <td>5</td>
                  <td>Hindi</td>
                  <td>Vyakaran Grammer Parichay</td>
                  <td>The Language House</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Social Science</td>
                  <td>Political Science</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Social Science</td>
                  <td>History</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Social Science</td>
                  <td>Geography</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Social Science</td>
                  <td>Economics</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Social Science</td>
                  <td>Together with Study Material Social Science</td>
                  <td>Rachna Sagar</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Science</td>
                  <td>Science Text Book</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Science</td>
                  <td>Physics</td>
                  <td>S.Chand</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Science</td>
                  <td>Chemistry</td>
                  <td>S.Chand</td>
                </tr>
                 <tr>
                  <td>14</td>
                  <td>Science</td>
                  <td>Biology-Foundation Course</td>
                  <td>MTG</td>
                </tr>
                 <tr>
                  <td>15</td>
                  <td>Science</td>
                  <td>Lab Mannual ABC</td>
                  <td>Modern</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>Maths</td>
                  <td>Mathematics</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Maths</td>
                  <td>RS Agrawal (For Practice)</td>
                  <td>Bharti Bhawan</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>Computer</td>
                  <td>Information Technology</td>
                  <td>Sumita Arora</td>
                </tr>
                 <tr>
                  <td>19</td>
                  <td>Sanskrit</td>
                  <td>Together with Sanskrit Part-1</td>
                  <td>Rachna Sagar</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>Sanskrit</td>
                  <td>Shemushi</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>Drawing</td>
                  <td>Big Drawing Copy</td>
                </tr>
                 <tr>
                  <td>22</td>
                  <td>Colour</td>
                  <td>Doms Pencil Colour (Super Soft)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        {/* CLASS X */}
        <div className="mpd-section">
          <h3 className="mpd-section-title" data-aos="fade-up">Class X</h3>

          <div className="mpd-table-wrapper">
            <table className="mpd-table">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Subject</th>
                  <th>Name of Book</th>
                  <th>Publication</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>English</td>
                  <td>First Flight</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>English</td>
                  <td>Footprints Without Feet</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Hindi</td>
                  <td>Pathya Pustak Sparsh</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Hindi</td>
                  <td>Purak Pustak Sanchyan</td>
                  <td>NCERT</td>
                </tr>
                 <tr>
                  <td>5</td>
                  <td>Hindi</td>
                  <td>Vyakaran Grammer Parichay</td>
                  <td>The Language House</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Social Science</td>
                  <td>Political Science</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Social Science</td>
                  <td>History</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Social Science</td>
                  <td>Geography</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Social Science</td>
                  <td>Economics</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Social Science</td>
                  <td>Together with Study Material Social Science</td>
                  <td>Rachna Sagar</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Science</td>
                  <td>Science Text Book</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Science</td>
                  <td>Physics</td>
                  <td>S.Chand</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Science</td>
                  <td>Chemistry</td>
                  <td>S.Chand</td>
                </tr>
                 <tr>
                  <td>14</td>
                  <td>Science</td>
                  <td>Biology</td>
                  <td>MTG</td>
                </tr>
                 <tr>
                  <td>15</td>
                  <td>Science Lab Mannual</td>
                  <td>Lab Mannual ABC</td>
                  <td>Modern</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>Maths</td>
                  <td>Maths</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Mathematics</td>
                  <td>RS Agrawal</td>
                  <td>Bharti Bhawan</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>Computer</td>
                  <td>Information Technology (402)</td>
                  <td>Sumita Arora</td>
                </tr>
                 <tr>
                  <td>19</td>
                  <td>Sanskrit</td>
                  <td>Together with Sanskrit Part-1</td>
                  <td>Rachna Sagar</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>Sanskrit</td>
                  <td>Shemushi</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>Drawing</td>
                  <td>Big Drawing Copy</td>
                </tr>
                 <tr>
                  <td>22</td>
                  <td>Colour</td>
                  <td>Doms Pencil Colour (Super Soft)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        {/* CLASS XI */}
        <div className="mpd-section">
          <h3 className="mpd-section-title" data-aos="fade-up">Class XI</h3>

          <div className="mpd-table-wrapper">
            <table className="mpd-table">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Subject</th>
                  <th>Name of Book</th>
                  <th>Publication</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>English</td>
                  <td>Snapshot</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>English</td>
                  <td>Hornbill</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Physical Education</td>
                  <td>Health and Physical Education</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>PCM</td>
                  <td>Physics</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>PCM</td>
                  <td>Chemistry</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>PCM</td>
                  <td>Maths + (R.D Sharma)</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>PCB</td>
                  <td>Physics</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>PCB</td>
                  <td>Chemistry</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>PCB</td>
                  <td>Biology</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Commerce</td>
                  <td>Financial Accounting Part-I and Part-II</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Commerce</td>
                  <td>Business Studies</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Commerce</td>
                  <td>Micro Economics and Statistic</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Computer Science</td>
                  <td>Computer Science with Python (083)</td>
                  <td>Sumita Arora</td>
                </tr>                                  
              </tbody>
            </table>
          </div>
        </div>


         {/* CLASS XII */}
        <div className="mpd-section">
          <h3 className="mpd-section-title" data-aos="fade-up">Class XII</h3>

          <div className="mpd-table-wrapper">
            <table className="mpd-table">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Subject</th>
                  <th>Name of Book</th>
                  <th>Publication</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>English</td>
                  <td>Flamingo</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>English</td>
                  <td>Vistas</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Physical Education</td>
                  <td>Health and Physical Education</td>
                  <td>Saraswati Publication</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>PCM</td>
                  <td>Physics</td>
                  <td>Part-I & II - NCERT</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>PCM</td>
                  <td>Chemistry</td>
                  <td>Part-I & II - NCERT</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>PCM</td>
                  <td>Maths</td>
                  <td>NCERT + (R.D Sharma)</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>PCB</td>
                  <td>Physics</td>
                  <td>Part-I & II - NCERT</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>PCB</td>
                  <td>Part-I & II - Chemistry</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>PCB</td>
                  <td>Biology</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Commerce</td>
                  <td>Accounting-Part-A-Accounting for partnership firm and Companies <br/>Part-B-Financial Statement Analysis</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Commerce</td>
                  <td>Business Studies - Part-I & II</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Commerce</td>
                  <td>Economics <br/>Part-A-Macro Economics <br/> Part-B-Indian Economics Development</td>
                  <td>NCERT</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Computer Science</td>
                  <td>Computer Science with Python</td>
                  <td>Sumita Arora</td>
                </tr>                                  
              </tbody>
            </table>
          </div>
        </div>           
      </section>

      <ExploreMore />
    </>
  );
}