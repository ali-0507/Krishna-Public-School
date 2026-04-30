import { useState } from "react";
import "yet-another-react-lightbox/styles.css";

const GalleryCard = ({ item }) => {
 const modalId = `galleryModal-${item._id}`;;

const [Open, setOpen] = useState(false);
const [photoIndex, setPhotoIndex] = useState(0);

  return (

    <>
      {/* CARD */}
      <div className="gallery-card"
  data-aos="fade-left"
  data-bs-toggle="modal"
  data-bs-target={`#${modalId}`}
>

  <div className="gallery-image">
    <img
      src={item.images?.[0]?.src || "/placeholder.jpg"}
      alt={item.title}
    />
  </div>

  <div className="gallery-title">
    {item.title}
  </div>

</div>

      {/* MODAL */}
      <div
        className="modal fade"
        id={modalId}
        tabIndex="-1"
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
                  className="carousel-control-prev "
                  type="button"
                  data-bs-target={`#${modalId}-carousel`}
                  data-bs-slide="prev"
                 
                >
                  <span className="carousel-control-prev-icon btn-secondary" ></span>
                </button>

                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target={`#${modalId}-carousel`}
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon btn-secondary"></span>
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
