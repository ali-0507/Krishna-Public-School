import { useState } from "react";
import { FaClipboardCheck, FaBalanceScale, FaChartLine, FaUserShield, FaFileAlt } from "react-icons/fa";
import "../../styles/calendar.css";
import AcademicHero from "../../components/Academics/AcademicHero";
import cal from "/AcademicsBg/academicCalendar.jpg";

export default function AcademicCalendar() {

    const [selectedMonth, setSelectedMonth] = useState("All");

    const holidays = [
        { no: 1, date: "3rd April, 2026", day: "Friday", holiday: "Good Friday" },
        { no: 2, date: "14th April, 2026", day: "Tuesday", holiday: "Dr. Ambedkar Jayanti" },
        { no: 3, date: "1st May, 2026", day: "Friday", holiday: "Budh Purnima" },
        { no: 4, date: "27th May, 2026", day: "Wednesday", holiday: "Bakri Eid (Eis-UI-Adha)" },
        { no: 5, date: "26th June, 2026", day: "Friday", holiday: "Moharram" },
        { no: 6, date: "29th June, 2026", day: "Monday", holiday: "Kabir Jayanti" },
        { no: 7, date: "9th August, 2026", day: "Sunday", holiday: "Adivasi Diwas" },
        { no: 8, date: "12th August, 2026", day: "Wednesday", holiday: "Hareli" },
        { no: 9, date: "15th August, 2026", day: "Saturday", holiday: "Independence Day" },
        { no: 10, date: "26th August, 2026", day: "Wednesday", holiday: "Milad un nabi" },
        { no: 11, date: "28th August, 2026", day: "Friday", holiday: "Raksha Bandhan" },
        { no: 12, date: "4th September, 2026", day: "Friday", holiday: "Janmashtami" },
        { no: 13, date: "5th September, 2026", day: "Saturday", holiday: "Teacher’s Day" },
        { no: 14, date: "14th September, 2026", day: "Monday", holiday: "Hartalika Teej" },
        { no: 15, date: "15th September, 2026", day: "Tuesday", holiday: "Ganesh Chaturthi" },
        { no: 16, date: "17th September, 2026", day: "Thursday", holiday: "Vishwakarma Jayanti" },
        { no: 17, date: "2nd October, 2026", day: "Friday", holiday: "Gandhi Jayanti" },
        { no: 18, date: "18th to 20th Oct., 2026", day: "Sunday to Tuesday", holiday: "Dussehra" },
        { no: 19, date: "6th Nov. to 11th Nov., 2026", day: "Friday to Wednesday", holiday: "Diwali" },
        { no: 20, date: "14th November, 2026", day: "Saturday", holiday: "Children’s Day" },
        { no: 21, date: "15th November, 2026", day: "Sunday", holiday: "Chatt Puja" },
        { no: 22, date: "24th November, 2026", day: "Tuesday", holiday: "Guru Nanak Jayanti" },
        { no: 23, date: "18th December, 2026", day: "Friday", holiday: "Guru Ghasidas Jayanti" },
        { no: 24, date: "25th December, 2026", day: "Friday", holiday: "Christmas Day" },
        { no: 25, date: "31st December, 2026", day: "Thursday", holiday: "New Year Eve" },
        { no: 26, date: "1st January, 2027", day: "Friday", holiday: "New Year" },
        { no: 27, date: "14th January, 2027", day: "Thursday", holiday: "Makar Sankranti" },
        { no: 28, date: "22nd January, 2027", day: "Friday", holiday: "Cher Chera" },
        { no: 29, date: "26th January, 2027", day: "Tuesday", holiday: "Republic Day" },
        { no: 30, date: "11th February, 2027", day: "Thursday", holiday: "Basant Panchami" },
        { no: 31, date: "7th March, 2027", day: "Sunday", holiday: "Maha Shivratri" },
        { no: 32, date: "9th March, 2027", day: "Tuesday", holiday: "Id-ul-Fitr" },
        { no: 33, date: "15th March, 2027", day: "Monday", holiday: "Bhakt Mata karma Jayanti" },
        { no: 34, date: "22nd March, 2027", day: "Monday", holiday: "Holi" },
    ];

    const filteredHolidays =
  selectedMonth === "All"
    ? holidays
    : holidays.filter((item) =>
        item.date.toLowerCase().includes(selectedMonth.toLowerCase())
      );

    return (
        <>
            <AcademicHero
                icon={<FaFileAlt />}
                title="Academic Calendar"
                subtitle="2026-2027"
                bgimage={cal}
            />
            <section className="academic-calendar-section">
                <div className="calendar-container">
                    <div className="calendar-header">
                        <h2>Academic Calendar 2026–2027</h2>

                        <div className="calendar-actions">

                            {/* Month Filter */}
                            <select
                                value={selectedMonth}
                                onChange={(e) => setSelectedMonth(e.target.value)}
                                className="month-filter"
                            >
                                <option value="All">All Months</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="August">August</option>
                                <option value="October">October</option>
                                <option value="December">December</option>
                                <option value="January">January</option>
                                <option value="March">March</option>
                            </select>

                            {/* Download Button */}
                            <a
                                href="/pdf/ACADEMIC_CALENDAR.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="download-btn"
                            >
                                Download PDF
                            </a>

                        </div>
                    </div>

                    <div className="calendar-table-wrapper">
                        <table className="calendar-table">
                            <thead>
                                <tr>
                                    <th>S. No.</th>
                                    <th>Date</th>
                                    <th>Day</th>
                                    <th>Holiday</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredHolidays.map((item) => (
                                    <tr key={item.no}>
                                        <td>{item.no}</td>
                                        <td>{item.date}</td>
                                        <td>{item.day}</td>
                                        <td>{item.holiday}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <p className="calendar-note">
                        *Marked holidays are subject to appearance of Moon.
                    </p>
                </div>
            </section>


        </>

    );
}
