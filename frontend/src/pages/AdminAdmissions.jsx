import { useEffect, useState } from "react";
import "../pages/AdminAdmissions.css";
import axios from "axios";
import {
   FaSearch
} from "react-icons/fa"

const AdminAdmissions = () => {
  const [admissions, setAdmissions] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [filterClass, setFilterClass] = useState("");
  const [selectedAdmission, setSelectedAdmission] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchAdmissions = async () => {
    const res = await axios.get("http://localhost:5000/api/admission");
    setAdmissions(res.data);
    setFiltered(res.data);
  };

  useEffect(() => {
    fetchAdmissions();
  }, []);

  const handleSearch = () => {
    let data = admissions;

    if (search) {
      data = data.filter((item) =>
        item.studentName.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (filterClass) {
      data = data.filter((item) => item.applyingClass === filterClass);
    }

    setFiltered(data);

    // 🔥 Reset inputs AFTER search
    setSearch("");
    setFilterClass("");
  };

  // 🗑 Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this admission?")) return;

    try {
      // Update UI instantly
      const updatedData = admissions.filter((item) => item._id !== id);

      setAdmissions(updatedData);
      setFiltered(updatedData);

      // Delete from backend
      await axios.delete(`http://localhost:5000/api/admission/${id}`);
    } catch (error) {
      console.error(error);
      alert("Error deleting admission");
    }
  };

  // 🔄 Status Update
  const handleStatusChange = async (id, status) => {
    try {
      // Update UI instantly
      const updatedData = admissions.map((item) =>
        item._id === id ? { ...item, status } : item,
      );

      setAdmissions(updatedData);
      setFiltered(updatedData);

      // Update backend
      await axios.put(`http://localhost:5000/api/admission/${id}/status`, {
        status,
      });
    } catch (error) {
      console.error(error);
      alert("Error updating status");
    }
  };

  // 📥 Export CSV
  const exportToCSV = () => {
    const headers = ["Name", "Class", "Father", "Mobile", "Email", "Status"];

    const rows = filtered.map((item) => [
      item.studentName,
      item.applyingClass,
      item.fatherName,
      item.mobile,
      item.email,
      item.status,
    ]);

    let csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map((e) => e.join(",")).join("\n");

    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = "admissions.csv";
    link.click();
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Approved":
        return {
          // backgroundColor: "#28a745",
          color: "#28a745",
          border: "none",
        };
      case "Rejected":
        return {
          // backgroundColor: "#dc3545",
          color: "#dc3545",
          border: "none",
        };
      case "Pending":
        return {
          // backgroundColor: "#dc3545",
          color: "#ffc107",
          border: "none",
        };
      default:
        return {
          // backgroundColor: "#ffc107",
          color: "#000",
          border: "none",
        };
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="card p-4 shadow">
        <div className="d-flex justify-content-between mb-3">
          <h3>
            <i
              class="fa-solid fa-bars-progress fs-2 me-3"
              style={{ color: "#f2b705" }}
            ></i>
            Admissions
          </h3>
          <button className="btn btn-secondary" onClick={exportToCSV}>
            Export CSV
          </button>
        </div>

        {/* 🔍 Search + Filter */}
        <div className="row mb-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search by student name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <select
              className="form-control"
              value={filterClass}
              onChange={(e) => setFilterClass(e.target.value)}
            >
              <option value="">All Classes</option>
              <option>PlayGroup</option>
              <option>Nursery</option>
              <option>KG-I</option>
              <option>KG-II</option>
              <option>Class I</option>
              <option>Class II</option>
              <option>Class III</option>
              <option>Class IV</option>
              <option>Class V</option>
              <option>Class VI</option>
              <option>Class VII</option>
              <option>Class VIII</option>
              <option>Class IX</option>
              <option>Class X</option>
              <option>Class XI</option>
              <option>Class XII</option>
            </select>
          </div>

          <div className="col-md-2">
            <button className="btn w-80 p-2 searchbtn" onClick={handleSearch}>
              <span><FaSearch/> Search</span>
            </button>
          </div>

          {/* 🔥 CLEAR BUTTON */}
          <div className="col-md-1">
            <button
              className="btn btn-secondary w-80 p-2 ms-0"
              onClick={() => {
                setFiltered(admissions);
                setSearch("");
                setFilterClass("");
              }}
            >
              Reset
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Class</th>
                <th>Father</th>
                <th>Mobile No.</th>
                <th>Email Id</th>
                <th>Profile</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((item, i) => (
                <tr key={item._id}>
                  <td>{i + 1}</td>
                  <td>{item.studentName}</td>
                  <td>{item.applyingClass}</td>
                  <td>{item.fatherName}</td>
                  <td>{item.mobile}</td>
                  <td>{item.email}</td>
                  <td>
                    <button
                      className="btn btn-info btn-sm"
                      onClick={() => {
                        setSelectedAdmission(item);
                        setShowModal(true);
                      }}
                    >
                      <i className="fa fa-eye"></i> View
                    </button>
                  </td>
                  <td>
                    <span className="badge" style={getStatusStyle(item.status)}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ✅ ✅ PASTE MODAL HERE (IMPORTANT) */}
        {showModal && selectedAdmission && (
          <div className="custom-modal-overlay">
            <div className="custom-modal">
              <button
                className="btn btn-secondary close-button"
                onClick={() => setShowModal(false)}
              >
                X
              </button>
              <h4 className="mb-4">Admission Details</h4>

              <div className="row">
                <div className="col-md-4">
                  <p>
                    <strong>Student:</strong> {selectedAdmission.studentName}
                  </p>
                  <p>
                    <strong>Aadhar:</strong> {selectedAdmission.aadharNumber}
                  </p>
                  <p>
                    <strong>DOB:</strong>{" "}
                    {selectedAdmission.dob?.substring(0, 10)}
                  </p>
                  <p>
                    <strong>Gender:</strong> {selectedAdmission.gender}
                  </p>
                  <p>
                    <strong>Class:</strong> {selectedAdmission.applyingClass}
                  </p>
                  <p>
                    <strong>Nationality:</strong>{" "}
                    {selectedAdmission.nationality}
                  </p>
                  <p>
                    <strong>Religion:</strong> {selectedAdmission.religion}
                  </p>
                  <p>
                    <strong>Address:</strong> {selectedAdmission.localAddress}
                  </p>
                </div>

                <div className="col-md-4">
                  <p>
                    <strong>Father:</strong> {selectedAdmission.fatherName}
                  </p>
                  <p>
                    <strong>Occupation:</strong> {selectedAdmission.occupation}
                  </p>
                  <p>
                    <strong>Mobile:</strong> {selectedAdmission.mobile}
                  </p>
                  <p>
                    <strong>Email:</strong> {selectedAdmission.email}
                  </p>
                  <p>
                    <strong>Category:</strong> {selectedAdmission.category}
                  </p>
                  <p>
                    <strong>Caste:</strong> {selectedAdmission.caste}
                  </p>
                  <p>
                    <strong>Mother Tongue:</strong>{" "}
                    {selectedAdmission.motherTongue}
                  </p>
                </div>

                <div className="col-md-4">
                  <p>
                    <strong>Last Class:</strong> {selectedAdmission.lastClass}
                  </p>
                  <p>
                    <strong>Year of Passing:</strong>{" "}
                    {selectedAdmission.yearOfPassing}
                  </p>
                  <p>
                    <strong>Previous School:</strong>{" "}
                    {selectedAdmission.previousSchool}
                  </p>
                  <p>
                    <strong>Board:</strong> {selectedAdmission.board}
                  </p>
                  <p>
                    <strong>Medium:</strong> {selectedAdmission.medium}
                  </p>
                  <p>
                    <strong>Place of Birth:</strong>{" "}
                    {selectedAdmission.placeOfBirth}
                  </p>
                  <p>
                    <strong>Special Needs:</strong>{" "}
                    {selectedAdmission.specialNeeds}
                  </p>
                </div>
              </div>

              <hr />

              {/* STATUS */}
              <div className="d-flex align-items-center gap-3 mt-3 flex-wrap">
                <strong>Status:</strong>

                <button
                  className="btn btn-success mx-3"
                  onClick={() =>
                    handleStatusChange(selectedAdmission._id, "Approved")
                  }
                >
                  Approved
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() =>
                    handleStatusChange(selectedAdmission._id, "Rejected")
                  }
                >
                  Rejected
                </button>

                <button
                  className="btn btn-danger del-button mx-3"
                  onClick={() => {
                    handleDelete(selectedAdmission._id);
                    setShowModal(false);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminAdmissions;
