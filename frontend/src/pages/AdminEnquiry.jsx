 import { useEffect, useState } from "react";
import axios from "axios";

const AdminEnquiry = () => {

  const [enquiries, setEnquiries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  // 📥 Fetch
  const fetchEnquiries = async () => {
    const res = await axios.get("http://localhost:5000/api/enquiry");
    setEnquiries(res.data);
    setFiltered(res.data);
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  // 🔍 Search
  useEffect(() => {
    let data = enquiries;

    if (search) {
      data = data.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(data);
  }, [search, enquiries]);

  // 🗑 Delete
  const handleDelete = async (id) => {

    if (!window.confirm("Delete this enquiry?")) return;

    try {

      const updated = enquiries.filter(item => item._id !== id);
      setEnquiries(updated);
      setFiltered(updated);

      await axios.delete(`http://localhost:5000/api/enquiry/${id}`);

    } catch (error) {
      alert("Error deleting enquiry");
    }
  };

  // 📥 Export CSV
  const exportToCSV = () => {

    const headers = ["Name", "Mobile", "Class"];

    const rows = filtered.map(item => [
      item.name,
      item.mobile,
      item.classInterested
    ]);

    const csv =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map(e => e.join(",")).join("\n");

    const link = document.createElement("a");
    link.href = encodeURI(csv);
    link.download = "enquiries.csv";
    link.click();
  };

  return (
    <div className="container mt-5 mb-5">

      <div className="card p-4 shadow">

        <div className="d-flex justify-content-between">
          <h3>Kids Enquiries</h3>
          <button className="btn btn-secondary" onClick={exportToCSV}>
            Export CSV
          </button>
        </div>

        {/* 🔍 Search */}
        <input
          type="text"
          className="form-control mt-3"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Table */}
        <div className="table-responsive mt-3">
          <table className="table table-bordered">

            <thead>
              <tr>
                <th>S.No</th>
                <th>Guardian Name</th>
                <th>Mobile</th>
                <th>Wants admission in</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((item, i) => (
                <tr key={item._id}>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.mobile}</td>
                  <td>{item.classInterested}</td>

                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
};

export default AdminEnquiry;