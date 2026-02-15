import { FaFileAlt, FaShieldAlt, FaGavel, FaFolderOpen } from "react-icons/fa";
import AcademicHero from "../../components/Academics/AcademicHero";
import ExploreMore from "../../components/Academics/ExploreMore";
import "../../styles/academics.css";
import "../../styles/disclosure.css";

export default function PolicyDocumentation() {
  return (
    <>      
    <AcademicHero
        icon={<FaFolderOpen />}
        title="Rules & Regulations"
        subtitle="Guidelines and policies ensuring a safe learning environment"
      />
      <br/>
      <div className="mpd-tabs"data-aos="fade-left">

       <button onClick={() => document.getElementById("bus").scrollIntoView()}>
            BUS RULES
       </button>

       <button onClick={() => document.getElementById("library").scrollIntoView()}>
            LIBRARY RULES
       </button>

       <button onClick={() => document.getElementById("school").scrollIntoView()}>
            SCHOOL RULES
       </button>
      </div>

    <section className="exam-section">
                                   
                                     {/*BUS RULES*/}

      <h2 id="bus" data-aos="fade-up">BUS RULES</h2>
      <ol style={{textAlign:"justify",lineHeight:"2.1"}} data-aos="fade-right">
        <li>Students are expected to follow the guidelines given by the Bus staff & escort & must not misbehave with them.</li>
        <li>Subject to availability of seats, students may avail bus facility as per existing rules and fares. </li>
        <li>Bus fees will have to be remitted along with the tuition fees. </li>
        <li>The school does not entertain any change in the bus route to suit the individual's convenience.</li>
        <li>Bus facility can not be withdrawn in the month of May, June and December to Feb.</li>
        <li>Bus facility will be charged for the whole academic session.</li>
        <li>Students are expected to be on the right side of their bus stops along with escorting persons at least five 
            minutes before the arrival of the bus.</li>
        <li>Buses will not wait for the late - comers. Students must report 5 to 10 minutes before the arrival of bus on the bus 
            stops.</li>
        <li>The drivers are authorised to stop buses at the designated stop only, unless, directed by the Transport - incharge.</li>
        <li>Objects of any kind must not be thrown inside or outside the bus.</li>
        <li>Commuters are not allowed to change school buses or go by other means of transport without written 
            permission from the Principal/Vice Principal.</li>
        <li><b>The driver's attention must not be diverted for any reason by the students. If any such case comes to 
               notice, bus facility may be cancelled.</b></li>
        <li><b>Indisciplinary behaviour is strictly prohibited. In such a case, Bus service will be withdrawn 
               immediately, without prior intimation.</b></li>
        <li>Students will be held responsible and punished for any damage to buses caused by negligence or vandalism 
            and fined accordingly.</li>
        <li>Students are supposed to use seats provided by the school and not interchange the seats without permission.</li>
        <li><b>Parents of such students, who are availing bus facility will be fully responsible for any 
               mishappening incidents/accidents during the journey performed from residence to School & 
               back to home from School. Management will not be responsible in any case. To have Bus pass is 
               compulsory. </b></li>
        <li>Transport Card.</li>
        <li>The Parents should ensure that transportation of their wards to and from the school is comfortable and 
            small kids of Nursery to class XI are properly escorted, boarded and received personally at the bus stop.</li>
        <li>Parents will not enter the bus & will not interfere in any matter /problems of the bus. They have to inform 
            the school authorities for necessary action.</li>
        <li>A responsible person from the school is on duty in every vehicle with a mobile phone to keep connectivity with 
            the school - office. Please note down the telephone number of the respective bus in-charge, from the school - office.</li>
        <li><b>Parents are requested not to enter the bus and disrupt the functioning of the transport. All the problems 
               related to bus will be strictly sorted out by the school authorities only. Parents’ involvement is strictly 
               prohibited. </b></li>
        <li>Eating in the buses or littering is not permitted.</li>
        <li>A suggestion book is placed in all school vehicles. This can be used by parents for lodging any 
            suggestion/complaint, as and when required. Such exercise will provide us the necessary inputs to upgrade 
            the existing system.</li>
        <li>GPS & Camera, are installed in all the buses. Parents can use this facility.</li>
        <li>Fighting, playing, shouting & roaming from one place to another is not permitted in bus as these may lead to 
            diversion of driver’s attention.</li>
        <li>Students are not allowed to get down from the bus for any purpose in the route & will be deboarded only at final stoppage.</li>
        <li>Boarding of the students must be on time in school also while returning back home & students who are 
            roaming in the school & not boarding on time may be left. In such indisciplinary cases parents have to manage 
            their own conveyance for their wards.</li>
        <li>Bus facility has to be availed for both the sides of the journey. It cannot be availed for one way only. The students 
            who come to school by bus, on any working day, have to return back by bus only. One - way bus facility can be 
            availed only in case of emergency or Half-day leave with prior intimation to the respective driver. </li> 
        <li>The students who avail bus facility, have to use the bus - service both- ways regularly, on all working days 
            and cannot cancel the service without prior intimation.</li>      
      </ol>
    <br/><br/>
    <hr/>

                                {/*LIBRARY RULES*/}

    <h2 id="library" data-aos="fade-up">LIBRARY RULES</h2>
      <ul style={{textAlign:"justify"}} data-aos="fade-right">
        <li><u><b style={{fontSize:"20px"}}>For registration:</b></u><br/>
            Details of students, duly filled in & counter signed by the class teacher must be submitted to the librarian. 
            <br/>(Forms are available in library) </li>

        <li><u><b style={{fontSize:"20px"}}>For clearance:</b></u><br/>
        All “Library Dues” should be clear before getting “Annual Exam Admit Card.” For Class-XII they can get library 
        books by money deposit from 1st January. They can keep books of competitive exams & it must be returned 
        after 5 days of exam.         
        </li>

        <li><u><b style={{fontSize:"20px"}}>Issue Section:</b></u><br/><br/>
            <b>a. About syllabus or competitive books:</b>
            <ol style={{listStyle:"lower-roman"}}>
              <li>Books are issued only for 15 days.</li>
              <li>Students can keep the books during vacation or holidays but it must be returned within 2 days of school reopening.</li>
              <li>Science & Biology students can get two books at a time. (Different subjects)</li>
            </ol>

            <b>b. About general books & magazine:</b>
            <ol style={{listStyle:"lower-roman"}}>
              <li>For classes VII to XII students, general books can be issued for 15 days from reference section on reference card & magazines can be issued for 7 days on magazine card. </li>
              <li>Question papers of previous exams are available in reference section. Students can get issued the question papers for a single day on the ‘Reference Card’ issued to theme.</li>             
            </ol>

            <b>c. About lost books:</b><br/>
            In case the book is lost, immediately the matter should be reported to the Librarian & their instructions should be followed to cover the loss. 

            <b>d. About Dead stock:</b><br/>
            Books of dead-stock are issued to students as book bank. For this students can select maximum 5 books & get them issued. These books are issued for the whole session. 
            At the time of clearance these books must be returned. In case these books are lost, 1/4th of the 
            cost of the book will be recovered. 

             <b>e. Late Submission:</b><br/> 
             Third late submission (Book of issue section) will be followed by no more library service.
        </li>

        <li><u><b style={{fontSize:"20px"}}>Reference Section:</b></u><br/><br/>
        Students & staff members are requested to get the books noted in the register even if they need them for a short 
        period. More than one book can be issued at a time (different subjects). Before leaving reading room books must 
        be returned with the signature of the Librarian. 
        </li>

        <br/>
        <li><u><b style={{fontSize:"20px"}}>About reading room:</b></u><br/>
         <ol style={{listStyle:"lower-roman"}}>
           <li>Students must maintain silence & discipline in the Library.</li>
           <li>Mobile phone is not allowed in Library.</li>
           <li>After entering the reading hall, name of the visitor with entry & exit time record will be noted.</li>
           <li>Before leaving the room, issued material should be returned. Magazines should be placed back on rack. 
               Chairs should be arranged without making noise.</li>
           <li>Any student found misusing reading room for escaping subject period will have to face severe punishment.</li>
           <li>Incase of the loss original card, a duplicate Library Card will be issued after a payment of Rs. 20.</li>
           <li>Library remains open from 7:00 am to 5:00 pm.</li>
         </ol>
        </li>
      </ul>

    <br/><br/>
    <hr/>
                                        {/* SCHOOL RULES */}
                
    <h2 id="school" data-aos="fade-up">SCHOOL RULES</h2>
      <ol style={{textAlign:"justify"}} data-aos="fade-right">
        <li><b>The students are supposed to reach the school 5 minutes before the school starts. School gate will be closed 
            sharp at the time when the 1st bell rings & entry of the students will be restricted after that. </b></li>
        <br/>
        <li>It has been observed with dismay that students turn up late to the school which is undesirable. Henceforth 
            <b>latecomers will be sent back home if they report after the school gate is closed</b>. This practice will be followed even on test days 
            too & no relaxation will be given in their regard. No correspondence in this regard will be entertained.</li>
        <br/>
        <li>Students should be very neatly dressed. The school uniform should be worn on all working days. No relaxation is acceptable in this regard.
        <b>THE UNIFORM OF THE STUDENT WILL BE CHECKED DURING THE ASSEMBLY OR AT ANY TIME DURING THEIR STAY IN THE SCHOOL BY THE STAFF OR BY THE STUDENT 
        PREFECTS</b> and defaulters will be punished. </li>
        <br/> 

        <li><b>Half Day / Short leave will not be given on any ground due to safety reasons</b>. Parents are directed not to send 
            their wards if they are ill or their wards are required for any work at home. </li>
        <br/>
        <li>No Half Day Leave will be given to the student even on test days also. </li>
        <br/>
        <li>In case of emergency, parents should submit , written application request along with the photocopy of ID 
            proof. for taking their wards during school hours. </li>
        <br/>
        <li>The School reserves the right, to terminate the schooling of students for unsatisfactory progress in studies 
            or whose conduct is a bad percept for others. </li>
        <br/>
        <li>The students should converse in English only in the school premises.</li>
        <br/>
        <li>Students should maintain discipline and observe good manners.</li>
        <br/>
        <li>Criticism of the teacher or the school in the presence of a child should be avoided by the parents. </li>
        <br/>
        <li>Every child should take proper care of the school property. Damage done even by accident should be 
            reported at once to the Class Teacher/Principal & damage cost will be realized by the student. </li>
        <br/>
        <li>Expensive things are not allowed to be brought in the school. </li>
        <br/>
        <li>Every student should take care of their private property. Money should not be lent or borrowed. The 
            school is not responsible for the goods lost.</li>
        <br/>
        <li>Students suffering from any contagious disease will not be allowed to continue classes until he/she recovers 
            from it and submits the medical certificate from a doctor. </li>
        <br/>
        <li>Two wheelers, bicycles must be properly locked and kept in the cycle stand. School will not be 
            responsible for the vehicles/bicycle kept out - side the school premises.</li>
        <br/>
        <li>Students should actively participate in various activities.</li>
        <br/>
        <li>Every student should carry his/her school diary to the school every day. </li>
        <br/>
        <li>The warning bell before a class or assembly is a signal for all to go to the assembly or to their respective class - 
            rooms. This should be done in silence. Changing of class - rooms during periods should be done in silence 
            and in an orderly manner. </li>
        <br/>
        <li>Shouting, whistling and running in the corridors are strictly prohibited.</li>
        <br/>
        <li>The students should bring tiffin, napkin and handkerchief daily. </li>
        <br/>
        <li>Students will not be permitted to leave the school during the school hours. </li>
        <br/>
        <li>Students should attend festivals and functions celebrated in the school. </li>
        <br/>
        <li>Parents should co-operate with the school in its attempt to help their children progress, paying attention to their 
            punctuality, regularity and discipline. They should take interest in their child's studies & other activities. </li>
        <br/>
        <li>Visiting hours for meeting the Principal - 10.30 am to 12.30 pm. Parents are requested to meet the Principal 
            as per their requirements only during the stipulated time. </li>
        <br/>
        <li>Taking leave during working days is strongly discouraged. Parents are responsible to make up for the loss of the 
            studies in case of leave taken. The school will expect these students to be at par with the class in every way and 
            that must be ensured by the parents only.</li>
        <br/>
        <li>Celebrating birthdays, festivals and partying in the classroom is strictly prohibited. </li>
        <br/>
        <li>To ensure safety sharp objects like blade, knife, scissors, needle should not be sent to school. </li>
        <br/>
        <li>Valuable articles like gold/diamond jewellery (chain & danglers), facial make up like eye make up & bindi, henna 
            decorating palms & feet, colouring hairs are strictly prohibited in the school. Electronic gadgets (mobiles, i-pod 
            and camera) are not permitted inside the school premises as per CBSE school rules. If found, the articles 
            will be confiscated and will be returned only after 6 months. If such instances are repeated, then the child 
            may be asked to leave the school. </li>
        <br/>
        <li>Every student will go home only by school transport/authorized transport or with the authorised escort of 
            their own. <b>Regarding authorization of the escort, parents are requested to submit a written 
            authorization letter</b>. The school should be informed immediately in writing about the change of authorized 
            escort. </li>
        <br/>
        <li>Parents must bring ID proof in case of visiting school. </li>
        <br/>
        <li>For safety and security, parents should refrain from sending money with their child without specific written notice from the school. </li>
        <br/>
        <li>Pay all the fee against your ward on time or name of your ward may be struck off from school roll due to non payment of fee. </li>
        <br/>
        <li>Entry of names of students in Attendance Register in next coming months will not be done if fees is not paid 
            for previous months. </li>
        <br/>
        <li>Parents must Attend PTM organized by the school regularly as the per the schedule given in the Almanac. </li>
        <br/>
        <li>Parents must not interfere in school’s policies, however written suggestions can be given when & where it is required. </li>
        <br/>
        <li>Parents must not misbehave with the school staff & all kind of matters must be solved with dignity & silence. </li>
        <br/>
        <li>Parents will not enter the bus & will not interfere in any matter /problems of the bus. They have to inform 
            the school authorities for necessary action. </li>
        <br/>
        <li>All kinds of complaints of the parents must be given in writing in complaint box.</li>
        <br/>
        <li>Accidents caused by non licensed students will not be the responsibility of school. Parents can give two 
            wheelers to their ward only at their risk. However it is strictly suggested by the school that all the students 
            must either avail bus facility or must come by parent escort to school.</li>
      </ol>
    </section>

        <ExploreMore />
    </>
  );
}
