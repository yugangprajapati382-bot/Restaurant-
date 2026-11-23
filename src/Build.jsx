
import React, { useEffect, useRef } from "react";
import "./Build.css";

import background from "./clear-02.jpg";
import food1 from "./vertical-01.jpg";
import food2 from "./vertical-02.jpg";
import smallFood from "./slide-01.jpg";

const Build = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements =
      sectionRef.current?.querySelectorAll(".build-reveal");

    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("build-show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="build-section" ref={sectionRef}>

      {/* LEAF BACKGROUND */}
      <div
        className="build-background"
        style={{ backgroundImage: `url(${background})` }}
      />

      {/* LEFT HEADING */}
      <div className="build-heading build-reveal">
        <p>Fostering Tomorrow's Innovators</p>

        <h1>
          Sparks
          <br />
          Success
        </h1>
      </div>

    
      <div className="build-image-one build-reveal">
        <img src={food1} alt="Fresh healthy food bowl" />
      </div>
      <div className="build-image-two build-reveal">
        <img src={food2} alt="Healthy vegetables meal" />
      </div>
      <div className="build-info build-reveal">

        <div className="build-small-image">
          <img src={smallFood} alt="Healthy food" />
        </div>

        <div className="build-info-content">

          <div className="build-info-title">
            <span>Innovative Solution</span>
            <div className="build-dots"></div>
            <span>$ 24</span>
          </div>

          <p>
            Our team of experts is always ready to assist you,
            whether you have questions, need support, or more.
          </p>

        </div>
      </div>

    </section>
  );
};

export default Build;
