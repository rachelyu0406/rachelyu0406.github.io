import React from "react";
import "../styles/ArtGallery.css";
import FadeInSection from "./FadeInSection";
import { Link } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

const ArtGallery = () => {
  const allArt = [
    { src: "/assets/art/art1.png", title: "artwork 1" },
    { src: "/assets/art/art2.png", title: "artwork 2" },
    { src: "/assets/art/art2_1.JPG", title: "artwork 3" },
    { src: "/assets/art/art3.png", title: "artwork 4" },
    { src: "/assets/art/art4.png", title: "artwork 5" },
    { src: "/assets/art/art5.png", title: "artwork 6" },
    { src: "/assets/art/art6.png", title: "artwork 7" },
    { src: "/assets/art/art7.png", title: "artwork 8" },
    { src: "/assets/art/art8.png", title: "artwork 9" },
    { src: "/assets/art/art9.png", title: "artwork 10" },
    { src: "/assets/art/art10.png", title: "artwork 11" },
    { src: "/assets/art/art11.png", title: "artwork 12" }
  ];

  return (
    <div className="art-gallery-page">
      <div className="section-header">
        <Link to="/" className="back-button">
          <ArrowBackRoundedIcon />
        </Link>
        <span className="section-title">/ art gallery</span>
      </div>
      <FadeInSection delay="200ms">
        <div className="gallery-description">
          A collection of my digital and traditional artwork, exploring different styles and mediums.
        </div>
      </FadeInSection>
      <div className="gallery-grid">
        {allArt.map((art, i) => (
          <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
            <div className="gallery-card">
              <img src={art.src} alt={art.title} className="gallery-image" />
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
};

export default ArtGallery;
