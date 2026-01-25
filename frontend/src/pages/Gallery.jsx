import "../styles/gallery.css";
import GalleryHero from "../components/Gallery/GalleryHero";
import GalleryFilters from "../components/Gallery/GalleryFilters";
import GalleryGrid from "../components/Gallery/GalleryGrid";
import { useState } from "react";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="gallery-page">
      <GalleryHero />
      <GalleryFilters
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <GalleryGrid activeCategory={activeCategory} />
    </div>
  );
};

export default Gallery;
