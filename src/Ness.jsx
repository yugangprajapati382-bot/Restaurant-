
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Ness.css";

import foodImage from "./team-05.jpg";

function Ness() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ness-show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = section.querySelectorAll(".ness-reveal");

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: "♨",
      title: "Quality Assurance",
    },
    {
      icon: "♧",
      title: "Customer-Centric",
    },
    {
      icon: "✿",
      title: "Reliability and Trust",
    },
  ];

  return (
    <section className="ness-section" ref={sectionRef}>

      {/* Left Image */}
      <div className="ness-image-box ness-reveal">

        <img
          src={foodImage}
          alt="Fresh healthy food"
          className="ness-main-image"
        />

        <div className="ness-image-overlay"></div>

        <Link to="/about" className="ness-play-button">
          <span>▷</span>
        </Link>

      </div>

      {/* Center Content */}
      <div
        className="ness-content ness-reveal"
        style={{ "--delay": "0.2s" }}
      >

        <span className="ness-small-heading">
          Our Promise
        </span>

        <h2>A Commitment Beyond Business</h2>

        <p className="ness-description">
          We are committed to excellence in everything we do.
          With a passion for innovation and a dedication to
          delivering exceptional value, we strive to be a
          trusted partner for all your needs. We believe that
          success is not just about profits; it's about the
          positive changes we bring to the world. From our
          dedicated team to our cutting-edge solutions.
        </p>

        <div className="ness-points">

          <p><span>›</span> We listen to all needs</p>
          <p><span>›</span> Solutions always up-to-date</p>
          <p><span>›</span> Team of good experts</p>
          <p><span>›</span> Unwavering commitment</p>

        </div>

        <Link to="/contact" className="ness-action-button">
          TAKE ACTION TODAY
          <span> → </span>
        </Link>

      </div>

      {/* Right Feature Panel */}
      <div className="ness-feature-panel">

        {features.map((item, index) => (

          <div
            className="ness-feature ness-reveal"
            key={index}
            style={{ "--delay": `${0.3 + index * 0.2}s` }}
          >

            <div className="ness-feature-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Ness;
