const categories = [
  "All",
  "Campus",
  "Events",
  "Sports",
  "Academics",
  "Celebrations",
];

const GalleryFilters = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="gallery-filters" data-aos="fade-right">
      {categories.map((cat) => (
        <button
          key={cat}
          className={activeCategory === cat ? "active" : ""}
          onClick={() => setActiveCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default GalleryFilters;
