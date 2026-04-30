import { useEffect, useState } from "react";
import {
  getDocuments,
  uploadDocument,
  deleteDocument,
} from "../../services/api";

import { FaTrash, FaEye, FaUpload } from "react-icons/fa";
import "./AdminDocument.css";

export default function AdminDocuments() {
  const [documents, setDocuments] = useState([]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [docCategory, setDocCategory] = useState("syllabus");

  // ================= FETCH =================
  const fetchDocs = async () => {
    const res = await getDocuments(category);
    setDocuments(res.data);
  };

  useEffect(() => {
    fetchDocs();
  }, [category]);

  // ================= UPLOAD =================
  const handleUpload = async () => {
    if (!file || !title) return alert("Fill all fields");

    try{
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("category", docCategory);

    await uploadDocument(formData);
    alert("Document uploaded successfully!!");

    setFile(null);
    setTitle("");
    fetchDocs();
    }catch{
    alert("❌ Upload failed");
    console.error(err);
    }
  };

  // ================= DELETE =================
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this document?")) return;

    await deleteDocument(id);
    fetchDocs();
  };

  // ================= FILTER =================
  const filteredDocs = documents.filter((doc) =>
    doc.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-docs">
      <h2>Document Management</h2>

      {/* TOP BAR */}
      <div className="doc-topbar">
        <input
          type="text"
          placeholder="Search documents..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={docCategory}
          onChange={(e) => setDocCategory(e.target.value)}
        >
          <option value="syllabus">Syllabus</option>
          <option value="fee">Fee</option>
          <option value="policy">Policy</option>
          <option value="books">Books</option>
          <option value="transport">Transport</option>
          <option value="magazine">Magazine</option>
          <option value="calendar">Calendar</option>
          <option value="compliance">Compliance</option>
        </select>

        <input type="file" onChange={(e) => setFile(e.target.files[0])} />

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={handleUpload}>
          <FaUpload /> Upload Document
        </button>
      </div>

      {/* CATEGORY FILTER */}
      <div className="doc-filters">
        {[
          "All",
          "syllabus",
          "fee",
          "policy",
          "books",
          "transport",
          "magazine",
          "calendar",
          "compliance",
        ].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={category === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* TABLE */}
      <table className="doc-table">
        <thead>
          <tr>
            <th>Document</th>
            <th>Category</th>
            <th>Size</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredDocs.map((doc) => (
            <tr key={doc._id}>
              <td>{doc.title}</td>
              <td>{doc.category}</td>
              <td>{doc.size}</td>
              <td>
            <span className={`status ${doc.status === "Published" ? "published" : "draft"}`}>
                {doc.status}
            </span>
            </td>

              <td>
                <a href={doc.fileUrl} target="_blank">
                  <FaEye />
                </a>

                <FaTrash
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                  onClick={() => handleDelete(doc._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}