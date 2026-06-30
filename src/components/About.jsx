import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

const About = () => {
  const one = (
    <p>
      I am currently a <b>Software Engineer Intern</b> at
      <a href="https://www.ncrvoyix.com/"> NCR Voyix</a>, where I build AI
      infrastructure, turning agent configurations into deployable backend
      services. Previously, I worked on{" "}
      <a href="https://bigdata.duke.edu/projects/deep-multi-modal-detection-of-early-alzheimers/">
        machine learning research at Duke University
      </a>
      , spanning large-scale fMRI preprocessing, 3D brain modeling, and
      Alzheimer’s prediction.
    </p>
  );
  const two = (
    <p>
      In my free time, I make art, play club volleyball, build with Duke
      Robotics, and occasionally wander down technical rabbit holes just to see
      where they lead.
    </p>
  );

  const techStack = [
    "Python",
    "C/C++",
    "Go",
    "TypeScript",
    "React",
    "PyTorch",
  ];

  return (
    <div id="about">
      <FadeInSection>
        <div className="section-header ">
          <span className="section-title">/ about me</span>
        </div>
        <div className="about-content">
          <div className="about-description">
            {one}
            {"Here are some technologies I have been working with:"}
            <ul className="tech-stack">
              {techStack.map((techItem, i) => (
                <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
                  <li>{techItem}</li>
                </FadeInSection>
              ))}
            </ul>
            {two}
          </div>
          <div className="about-image">
            <img alt="Rachel Yu" src={"/assets/me2.jpg"} />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;
