import React from "react";
import "../styles/Art.css";
import FadeInSection from "./FadeInSection";
import { Link } from "react-router-dom";

const Art = () => {
  const topArt = [
    { src: "/assets/art/art1.png", title: "artwork 1" },
    { src: "/assets/art/art2_1.JPG", title: "artwork 2" },
    { src: "/assets/art/art3.png", title: "artwork 3" },
    { src: "/assets/art/art4.png", title: "artwork 4" },
    { src: "/assets/art/art10.png", title: "artwork 5" },
    { src: "/assets/art/art7.png", title: "artwork 6" }
  ];

  return (
    <div id="art">
      <div className="section-header">
        <span className="section-title">/ art</span>
        <Link to="/art" className="explore-link">
          Explore collection
        </Link>
      </div>
      <FadeInSection delay="200ms">
        <div className="art-description">
          A collection of my digital and traditional artwork, exploring different styles and mediums.
        </div>
      </FadeInSection>
      <div className="art-container">
        <div className="art-grid">
          {topArt.map((art, i) => (
            <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
              <div className="art-card">
                <img src={art.src} alt={art.title} className="art-image" />
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Art;
