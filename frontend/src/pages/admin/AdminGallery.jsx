import { useEffect, useState } from "react";
import { getPhotos, uploadPhoto, deletePhoto } from "../../services/galleryApi";
import "./gallery.css";

export default function AdminGallery() {
  const [photos, setPhotos] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("events");
  const [subCategory, setSubCategory] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchPhotos();
  }, []);

  useEffect(() => {
    filterPhotos();
  }, [photos, activeFilter, search]);

  const fetchPhotos = async () => {
    const res = await getPhotos();
    setPhotos(res.data);
  };

  const filterPhotos = () => {
    let data = [...photos];

    if (activeFilter !== "all") {
      data = data.filter(p => p.subCategory === activeFilter);
    }

    if (search) {
      data = data.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(data);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("tag", tag);
    formData.append("subCategory", subCategory);
    formData.append("image", image);

    await uploadPhoto(formData);
    setShowModal(false);
    fetchPhotos();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this photo?")) {
      await deletePhoto(id);
      fetchPhotos();
    }
  };

  return (
    <div className="admin-gallery">
      {/* Header */}
      <div className="gallery-top">
        <div>
          <h2>Gallery Management</h2>
          <p>{photos.length} photos across categories</p>
        </div>

        <button className="upload-button" onClick={() => setShowModal(true)}>
          + Upload Photos
        </button>
      </div>

      {/* Search + Filters */}
      <div className="gallery-controls">
        <input
          type="text"
          placeholder="Search photos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="filter-tabs">
          {["all", "Annual Day", "Sports Day", "Republic Day", "Classrooms", "Science Fair", "Awards"].map(cat => (
            <button
              key={cat}
              className={activeFilter === cat ? "active-tab" : ""}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="photo-grid">
        {filtered.map(photo => (
          <div className="photo-card" key={photo._id}>
            <div className="photo-img">
              <img
                src={`http://localhost:5000${photo.imageUrl}`}
                alt={photo.title}
              />

              <div className="photo-overlay">
                <button onClick={() =>
                  window.open(`http://localhost:5000${photo.imageUrl}`, "_blank")
                }>View</button>

                <button onClick={() => handleDelete(photo._id)}>
                  Delete
                </button>
              </div>
            </div>

            <div className="photo-info">
              <div>
                <h4>{photo.title}</h4>
                <p>{photo.subCategory}</p>
              </div>
              <span>
                {new Date(photo.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="upload-modal">
            <h3>Upload Photos</h3>

            <div className="drag-box">
              <input type="file" onChange={(e) => setImage(e.target.files[0])}/>
              <p>Drag & drop photos here</p>
              <span>or click to browse files</span>
            </div>

            <input
              type="text"
              placeholder="Photo title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <select value={tag} onChange={(e) => setTag(e.target.value)}>
              <option value="events">Events</option>
              <option value="sports">Sports</option>
              <option value="campus">Campus</option>
              <option value="academics">Academics</option>
              <option value="celebrations">Celebrations</option>
            </select>

            <input
              type="text"
              placeholder="Sub category"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
            />

            <button className="confirm-upload" onClick={handleUpload}>
              Upload
            </button>

            <span className="close-x" onClick={() => setShowModal(false)}>×</span>
          </div>
        </div>
      )}
    </div>
  );
}