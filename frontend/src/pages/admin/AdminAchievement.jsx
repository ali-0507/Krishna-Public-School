import { useEffect, useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaTrophy, FaAngleUp } from "react-icons/fa";

import {
  getAchievements,
  uploadAchievement,
  updateAchievement,
  addAchievementImages,
  deleteAchievement,
  deleteAchievementImage,
} from "../../services/api";
import "./AdminAchievement.css";

export default function AdminAchievement() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "academic",
  });

  const [files, setFiles] = useState([]);
  const [editing, setEditing] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // =========================
  // FETCH DATA
  // =========================
  const fetchData = async () => {
    try {
      const res = await getAchievements();
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


const openAddImagesModal = (id) => {
  setSelectedId(id);
  setShowImageModal(true);
};
  // =========================
  // HANDLE UPLOAD
  // =========================
   const handleUpload = async () => {
  try {
    if (editing) {
      // ✅ UPDATE
      await updateAchievement(editing._id, form);
      alert("Updated successfully");
    } else {
      // ✅ CREATE
      const formData = new FormData();

      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("category", form.category);

      files.forEach((file) => {
        formData.append("images", file);
      });

      await uploadAchievement(formData);
      alert("Created successfully");
    }

    setShowModal(false);
    setFiles([]);
    setEditing(null);

    setForm({
      title: "",
      description: "",
      category: "academic",
      year: "",
      highlighted: false,
    });

    fetchData();

  } catch (err) {
    console.error(err);
    alert("❌ Failed");
  }
};
  // Handle Edit
  const handleEdit = (item) => {
    setEditing(item);
    setShowModal(true);

    setForm({
      title: item.title,
      description: item.description,
      category: item.category,
      year: item.year || "",
      highlighted: item.highlighted || false,
    });
  };

  
 

  const handleAddImages = async () => {
  try {
    const formData = new FormData();

    files.forEach((file) => {
      formData.append("images", file);
    });

    await addAchievementImages(selectedId, formData);

    alert("Images added successfully");

    setShowImageModal(false);
     setFiles([]);
    fetchData();

  } catch (err) {
    console.error(err);
    alert("❌ Failed to add images");
  }
};
  // =========================
  // DELETE
  // =========================
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this achievement?")) return;

    try {
      await deleteAchievement(id);
      alert("Deleted");
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };


  const handleDeleteImage = async (id, key) => {
    if (!window.confirm("Delete this image?")) return;
  try {
    await deleteAchievementImage(id, key);
    alert("Image deleted");

    fetchData(); // refresh
  } catch (err) {
    console.error(err);
    alert("Failed to delete image");
  }
};
  // =========================
  // CATEGORY COLOR
  // =========================
  const getCategoryColor = (cat) => {
    switch (cat) {
      case "academic":
        return "badge-blue";
      case "sports":
        return "badge-green";
      case "cultural":
        return "badge-purple";
      case "olympiad":
        return "badge-orange";
      default:
        return "";
    }
  };

  return (
    <div className="admin-page">
      {/* HEADER */}
      <div className="page-header">
        <div>
          <h2>Achievements Management</h2>
          <p>Manage student results, awards, and recognition</p>
        </div>

        <button className="primary-btn" onClick={() => setShowModal(true)}>
          <FaPlus /> Add Achievement
        </button>
      </div>

      <div className="achievement-grid mt-3">
        {data.map((item) => (
          <div
            key={item._id}
            className={`ach-card ${item.highlighted ? "highlighted" : ""}`}
          >
            {/* LEFT ICON */}
            <div className="ach-icon">
              <FaTrophy />
            </div>

            {/* CONTENT */}
            <div className="ach-content">
              <div className="ach-top">
                <h4>{item.title}</h4>

                <div className="ach-actions">
                 <FaPlus onClick={() => openAddImagesModal(item._id)}/>
                  <FaEdit onClick={() => handleEdit(item)} className="edit" />
                  <FaTrash
                    onClick={() => handleDelete(item._id)}
                    className="delete"
                  />

                </div>
              </div>

              <div className="ach-tags">
                <span className="tag">{item.category}</span>
                <span className="year">{item.year || "2025"}</span>

                {item.highlighted && (
                  <span className="highlight">⭐ Highlighted</span>
                )}
              </div>

              <p>{item.description}</p>
        <div className="image-preview-grid">
          {item.images?.map((img) => (
            <div key={img.key} className="preview-item">
              <img src={img.url} alt="img" />
              <button
                className="delete-img-btn"
                onClick={() => handleDeleteImage(item._id, img.key)}
              >
                X
              </button>
            </div>
          ))}
        </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {showModal && (
         <div className="ach-modal-overlay">
  <div className="ach-modal">

    <h2>{editing ? "Edit Achievement" : "Add Achievement"}</h2>

    <div className="form-group">
      <label>Title</label>
      <input
        type="text"
        value={form.title}
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
        placeholder="Enter achievement title"
      />
    </div>

    <div className="form-group">
      <label>Description</label>
      <textarea
        value={form.description}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
        placeholder="Enter description"
      />
    </div>

    <div className="form-row">
      <div className="form-group">
        <label>Category</label>
        <select
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        >
          <option value="academic">Academic</option>
          <option value="sports">Sports</option>
          <option value="special">Special</option>
          <option value="olympiad">Olympiad</option>
        </select>
      </div>

      <div className="form-group">
        <label>Year</label>
        <input
          type="text"
          value={form.year}
          onChange={(e) =>
            setForm({ ...form, year: e.target.value })
          }
          placeholder="2025"
        />
      </div>
    </div>

    <div className="form-group">
      <label>Upload Images</label>
      <input
        type="file"
        multiple
        onChange={(e) =>
          setFiles([...e.target.files])
        }
      />
      <div className="preview-grid">
         {files.map((file, i) => (
         <img key={i} src={URL.createObjectURL(file)} 
           alt="preview" />
       ))}
     </div>
    </div>

    <div className="form-check">
      <input
        type="checkbox"
        checked={form.highlighted}
        onChange={(e) =>
          setForm({ ...form, highlighted: e.target.checked })
        }
      />
      <label>Mark as Highlighted</label>
    </div>

    <div className="form-actions">
      <button className="btn-primary" onClick={handleUpload}>
        Upload
      </button>
      <button
        className="btn-secondary"
        onClick={() => setShowModal(false)}
      >
        Cancel
      </button>
    </div>

  </div>
</div>
      )}


      {showImageModal && (
  <div className="ach-modal-overlay">
    <div className="ach-modal">
      <h3>Add More Images</h3>

      <input
        type="file"
        multiple
        onChange={(e) => setFiles([...e.target.files])}
      />

      <div className="preview-grid">
         {files.map((file, i) => (
         <img key={i} src={URL.createObjectURL(file)} 
           alt="preview" />
       ))}
     </div>

      <div className="form-actions">
        <button onClick={handleAddImages}>Upload</button>
        <button onClick={() => setShowImageModal(false)}>Cancel</button>
      </div>
    </div>
  </div>
)}
    </div>
  );
}
