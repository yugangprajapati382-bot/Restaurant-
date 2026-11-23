
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Vol.css";

import foodImage from "./team-05.jpg";

function Vol() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("vol-show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = section.querySelectorAll(".vol-reveal");

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="vol-section" ref={sectionRef}>

      {/* Left Side */}
      <div className="vol-left">

        {/* Heading Section */}
        <div className="vol-intro vol-reveal">

          <span className="vol-subtitle">
            Business Insights and Beyond
          </span>

          <h1>Unveiling the Revolution</h1>

          <p>
            In a rapidly evolving world, the only constant is change.
            Nowhere is this truer than in the realms of technology and
            innovation. As we stand on the precipice of the fourth
            industrial revolution, it's essential to understand and
            adapt to the seismic shifts shaping our future. It's no
            longer enough to innovate incrementally; we must be ready
            to disrupt ourselves.
          </p>

          <Link to="/about" className="vol-button">
            MORE INFO
            <span> → </span>
          </Link>

        </div>

        {/* Bottom Information Panel */}
        <div className="vol-info-panel vol-reveal">

          <div className="vol-info-item">

            <h3>Exploring Strategies</h3>

            <p>
              Join us on this insightful journey as we uncover
              the tactics that drive progress.
            </p>

          </div>

          <div className="vol-info-item">

            <h3>Innovation Hub</h3>

            <p>
              We dive into the world of effective planning,
              execution, and success in various fields.
            </p>

          </div>

        </div>

      </div>

      {/* Right Image */}
      <div className="vol-image-box vol-reveal">

        <img
          src={foodImage}
          alt="Fresh healthy vegetable bowl"
          className="vol-image"
          loading="lazy"
        />

        <div className="vol-image-overlay"></div>

        <Link to="/about" className="vol-play-button">
          <span>▷</span>
        </Link>

      </div>

    </section>
  );
}

export default Vol;
