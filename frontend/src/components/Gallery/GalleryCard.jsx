
const GalleryCard = ({ item }) => {
  const modalId = `galleryModal-${item.title.replace(/\s+/g, "")}`;

  return (
    <>
      {/* CARD */}
      <div
        className="gallery-card"
        data-aos = "fade-left" data-bs-toggle="modal"
        data-bs-target={`#${modalId}`}
      >
        <div
          className="gallery-image"
          style={{ backgroundColor: item.color }}
        >
          <span>{item.title}</span>
        </div>
      </div>

      {/* MODAL */}
      <div
        className="modal fade"
        id={modalId}
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{item.title}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            {/* BODY */}
            <div className="modal-body">
              <div
                id={`${modalId}-carousel`}
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {item.images.map((img, index) => (
                    <div
                      className={`carousel-item ${
                        index === 0 ? "active" : ""
                      }`}
                      key={index}
                    >
                      <img
                        src={img.src}
                        className="d-block w-100 h-100 rounded"
                        alt={item.title}
                      />
                      <div className="carousel-caption">
                        <p>{img.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CONTROLS */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target={`#${modalId}-carousel`}
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>

                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target={`#${modalId}-carousel`}
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryCard;
