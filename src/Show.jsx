
import React, { useEffect } from "react";
import "./Show.css";

import food1 from "./focus-02.jpg";
import food2 from "./focus-05.jpg";

function Show() {

  // SCROLL REVEAL ANIMATION
  useEffect(() => {
    const elements = document.querySelectorAll(".show-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-active");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="show-section">

      {/* LEFT COLUMN */}

      <div className="show-left">

        {/* HEADING */}

        <div className="show-heading show-reveal">

          <p className="show-subtitle">
            Crafting Experiences That Convert
          </p>

          <h1>Service Strategy</h1>

        </div>

        {/* FIRST FOOD IMAGE */}

        <div className="show-image-box show-image-one show-reveal">

          <img
            src={food1}
            alt="Fresh healthy food bowl"
            className="show-image"
          />

          <div className="show-image-overlay"></div>

        </div>

      </div>

      {/* RIGHT COLUMN */}

      <div className="show-right">

        {/* SECOND FOOD IMAGE */}

        <div className="show-image-box show-image-two show-reveal">

          <img
            src={food2}
            alt="Healthy vegetable bowl"
            className="show-image"
          />

          <div className="show-image-overlay"></div>

        </div>

        {/* DESCRIPTION */}

        <div className="show-description show-reveal">

          <p>
            In a competitive business landscape, reaching and engaging
            your target audience is vital for success. Cornerstone for
            businesses seeking to maximize their online presence and
            drive growth. Maximize their online presence and drive growth.
          </p>

          <button className="show-button">
            MORE INFO
            <span> ↗ </span>
          </button>

        </div>

      </div>

    </section>
  );
}

export default Show;
