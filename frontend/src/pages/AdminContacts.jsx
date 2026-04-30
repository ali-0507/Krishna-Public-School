 import { useEffect, useState } from "react";
import axios from "axios";

const AdminContacts = () => {

  const [contacts, setContacts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  // 📥 Fetch
  const fetchContacts = async () => {
    const res = await axios.get("http://localhost:5000/api/contact");
    setContacts(res.data);
    setFiltered(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // 🔍 Search
  useEffect(() => {

    let data = contacts;

    if (search) {
      data = data.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(data);

  }, [search, contacts]);

  // 🗑 Delete
  const handleDelete = async (id) => {

    if (!window.confirm("Delete this message?")) return;

    try {

      const updated = contacts.filter(item => item._id !== id);
      setContacts(updated);
      setFiltered(updated);

      await axios.delete(`http://localhost:5000/api/contact/${id}`);

    } catch (error) {
      alert("Error deleting message");
    }
  };

  // 📥 Export CSV
  const exportToCSV = () => {

    const headers = ["Name", "Email", "Subject", "Message"];

    const rows = filtered.map(item => [
      item.name,
      item.email,
      item.subject,
      item.message
    ]);

    const csv =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map(e => e.join(",")).join("\n");

    const link = document.createElement("a");
    link.href = encodeURI(csv);
    link.download = "contacts.csv";
    link.click();
  };

  return (
    <div className="container mt-5 mb-5">

      <div className="card p-4 shadow">

        <div className="d-flex justify-content-between">
          <h3>Contact Messages</h3>
          <button className="btn btn-secondary" onClick={exportToCSV}>
            Export CSV
          </button>
        </div>

        {/* 🔍 Search */}
        <input
          type="text"
          className="form-control mt-3"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Table */}
        <div className="table-responsive mt-3">
          <table className="table table-bordered">

            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((item, i) => (
                <tr key={item._id}>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.subject}</td>
                  <td>{item.message}</td>

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

export default AdminContacts;