
import React, { useEffect, useRef } from "react";
import "./Lap.css";

function Lap() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("lap-show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = section.querySelectorAll(".lap-reveal");

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="lap-section" ref={sectionRef}>

      <div className="lap-leaves lap-leaves-left"></div>
      <div className="lap-leaves lap-leaves-right"></div>

      <div className="lap-content">

        <span className="lap-subtitle lap-reveal">
          Restaurant WordPress Theme
        </span>

        <h1 className="lap-title lap-reveal">
          Services
        </h1>

      </div>

    </section>
  );
}

export default Lap;
