import { useEffect, useState } from "react";
import { FaSearch, FaEye, FaTrash } from "react-icons/fa";
// import { uploadPhoto, deletePhoto } from "../../services/galleryApi";
import API, { getGallery, uploadPhoto, deletePhoto, addImagesToGallery, updateGallery, updateCaption } from "../../services/api.js";
import "./gallery.css";

export default function AdminGallery() {
  const [photos, setPhotos] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [preview, setPreview] = useState([]);

  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("events");
  const [category, setCategory] = useState("");
  const [caption, setCaption] = useState("");
  const [images, setImages] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [captions, setCaptions] = useState({});

  useEffect(() => {
    fetchPhotos();
  }, []);

  useEffect(() => {
    filterPhotos();
  }, [photos, activeFilter, search]);

  const fetchPhotos = async () => {
    const res = await getGallery();
    setPhotos(res.data);
  };

  const filterPhotos = () => {
    let data = [...photos];

    if (activeFilter !== "All") {
      data = data.filter(
        (p) => p.category?.toLowerCase() === activeFilter.toLowerCase(),
      );
    }

    if (search) {
      data = data.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    setFiltered(data);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);

    const previewUrls = files.map((file) => URL.createObjectURL(file));
    setPreview(previewUrls);
  };



  const handleUpload = async () => {
    if (images.length === 0) {
      alert("Please select images");
      return;
    }
    try {
      const formData = new FormData();

      formData.append("title", title);
      formData.append("category", tag);
      
      images.forEach((img) => {
        formData.append("images", img); // IMPORTANT
      });

      await uploadPhoto(formData);

      alert("Images uploaded successfully");

      setShowModal(false);
      setImages([]);
      setPreview(null);
      setTitle("");
      fetchPhotos();
    } catch (err) {
      console.error(err.message);
    }
  };



  const handleDeleteImage = async (id, imageUrl) => {
    const confirmDelete = window.confirm("Delete this image?");

     if (!confirmDelete) return;

  try {
    await API.put(`/gallery/${id}/delete-image`, {
      imageUrl,
    });

      fetchPhotos();
      setPreview(null); // close modal after delete
    } catch (err) {
      console.error(err);
    }
  };


  const handleDeleteGallery = async (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this gallery?");

  if (!confirmDelete) return;

  try {
    await deletePhoto(id);
    fetchPhotos(); // refresh UI
  } catch (err) {
    console.error(err);
  }
};

const handleAddMoreImages = (e) => {
  const files = Array.from(e.target.files);
  setNewImages(files);
};

const handleUploadMore = async () => {
  if (!newImages.length) return alert("Select images");

  const formData = new FormData();

  newImages.forEach((img) => {
    formData.append("images", img);
  });

  try {
    await addImagesToGallery(preview._id, formData);

    alert("Images added successfully");

    setNewImages([]);
    fetchPhotos();
    setPreview(null);
  } catch (err) {
    console.error(err);
  }
};


const handleUpdateGallery = async () => {
  try {
    await updateGallery(preview._id, {
      title: editTitle,
      category: editCategory,
    });

    alert("Updated successfully");

    fetchPhotos();
    setPreview(null);
  } catch (err) {
    console.error(err);
  }
};


const handleCaptionChange = async (imageUrl, caption) => {
  try {
    await updateCaption(preview._id, {
      imageUrl,
      caption,
    });

    fetchPhotos();
  } catch (err) {
    console.error(err);
  }
};
  return (
    <div className="admin-gallery">
      {/* HEADER */}

      <div className="gallery-top">
        <div>
          <h2>Gallery Management</h2>
          <p>{photos.length} photos across categories</p>
        </div>

        <button className="upload-button" onClick={() => setShowModal(true)}>
          + Upload Photos
        </button>
      </div>

      {/* SEARCH + FILTERS */}

      <div className="gallery-controls">
        <div className="search-box">
          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search photos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="filter-tabs">
          {[
            "All",
            "Campus",
            "Events",
            "Sports",
            "Academics",
            "Celebrations",
          ].map((cat) => (
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

      {/* PHOTO GRID */}

      <div className="photo-grid">
        {filtered.length === 0 ? (
          <div className="empty-gallery">
            <p>No photos found</p>
            <span>Upload your first gallery photo</span>
          </div>
        ) : (
          filtered.map((photo) => (
            <div className="photo-card" key={photo._id}>
              <div className="photo-img">
                <img
                  loading="lazy"
                  src={
                    photo.images?.[0]?.src ||
                    photo.imageUrl ||
                    "/placeholder.jpg"
                  }
                  alt={photo.title}
                />

                <span className="category-badge">{photo.category}</span>
                 

                <div className="photo-overlay">
                  <button
                  style={{ 
                    background: "black",
                    fontSize:"10px",
                  }}
                    className="view-btn"
                    onClick={() => {
                      setPreview(photo);
                      setEditTitle(photo.title);
                      setEditCategory(photo.category);
                      const initialCaptions = {};
                      photo.images.forEach((img) => {
                        initialCaptions[img.src] = img.caption || "";
                      });
                      setCaptions(initialCaptions);
                    }} >

                    <FaEye />
                  </button>

                  <button
                   style={{ 
                    background: "red",
                    color:"white",
                    fontSize:"10px",
                  }}
                    className="delete-btn"
                    onClick={() => handleDeleteGallery(photo._id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>

              <div className="photo-info">
                <div>
                  <h4>{photo.title}</h4>
                  <p>{photo.caption}</p>
                </div>

                <span>{new Date(photo.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* IMAGE PREVIEW MODAL */}

      {preview?.images?.length > 0 && (
        <div className="preview-modal">
          <div className="preview-content">

          <input
        type="text"
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}
        placeholder="Edit title"
      />

      <select
        value={editCategory}
        onChange={(e) => setEditCategory(e.target.value)}
      >
        <option value="events">Events</option>
        <option value="sports">Sports</option>
        <option value="campus">Campus</option>
        <option value="academics">Academics</option>
        <option value="celebrations">Celebrations</option>
      </select>

      <button onClick={handleUpdateGallery}>
        Save Changes
      </button>
            {preview.images.map((img, index) => (
              <div key={index} style={{ position: "relative" }}>
                <img src={img.src} style={{ width: "250px", margin: "10px" }} />

                 <input type="file" multiple onChange={handleAddMoreImages} />
                 <input
            type="text"
            placeholder="Add caption"
            value={captions[img.src] || ""}
          onChange={(e) => {
          const newCaption = e.target.value;

           setCaptions((prev) => ({
          ...prev,
          [img.src]: newCaption,
        }));
      }}
          />
          <button onClick={() =>
           handleCaptionChange(img.src, captions[img.src])}>
        Save Caption
        </button>
                
                <button onClick={handleUploadMore} className="mx-3">
                  Add More Images
                 </button>

                {/* DELETE SINGLE IMAGE */}
                <button
                  style={{
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                    background: "red",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    marginTop:"62px"
                  }}
                  onClick={() => handleDeleteImage(preview._id, img.src)}
                >
                  <FaTrash/>
                </button>
              </div>
            ))}

            <span className="close-preview" onClick={() => 
            setPreview(null)}>
              X
            </span>
          </div>
        </div>
      )}

      {/* UPLOAD MODAL */}

      {showModal && (
        <div className="modal-overlay">
          <div className="upload-modal">
            <h3>Upload Photos</h3>

            <div className="drag-box">
              <input type="file" multiple onChange={handleFileChange} />

              <p>Drag & drop photos here</p>
              <span>or click to browse files</span>
            </div>

            {/* IMAGE PREVIEW GRID */}

            {preview.length > 0 && (
              <div className="preview-grid">
                {preview.map((img, index) => (
                  <img key={index} src={img} className="preview-img" />
                ))}
              </div>
            )}

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
              placeholder="Caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />

            <button className="confirm-upload" onClick={handleUpload}>
              Upload
            </button>

            <span className="close-x" onClick={() => setShowModal(false)}>
              ×
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
