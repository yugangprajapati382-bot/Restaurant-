
import React, { useEffect, useRef } from "react";
import "./Took.css";

function Took({ title = "About", subtitle = "Restaurant WordPress Theme" }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("took-show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="took-section" ref={sectionRef}>

      <div className="took-leaf took-leaf-left">
        <svg viewBox="0 0 300 400" fill="none">
          <path d="M10 390 C40 250 90 100 270 10" />
          <path d="M10 390 C20 270 15 120 65 20" />
          <path d="M10 390 C100 290 170 200 270 10" />
          <path d="M10 390 C90 310 100 170 65 20" />
          <path d="M40 320 C100 300 160 250 210 170" />
          <path d="M65 250 C120 240 160 200 190 140" />
          <path d="M90 190 C130 180 160 140 180 100" />
          <path d="M40 320 C20 250 20 190 65 20" />
          <path d="M100 280 C120 220 130 150 120 80" />
          <path d="M150 200 C180 140 200 90 210 30" />
        </svg>
      </div>

      <div className="took-leaf took-leaf-right">
        <svg viewBox="0 0 300 400" fill="none">
          <path d="M290 390 C260 250 210 100 30 10" />
          <path d="M290 390 C280 270 285 120 235 20" />
          <path d="M290 390 C200 290 130 200 30 10" />
          <path d="M290 390 C210 310 200 170 235 20" />
          <path d="M260 320 C200 300 140 250 90 170" />
          <path d="M235 250 C180 240 140 200 110 140" />
          <path d="M210 190 C170 180 140 140 120 100" />
          <path d="M260 320 C280 250 280 190 235 20" />
          <path d="M200 280 C180 220 170 150 180 80" />
        </svg>
      </div>

      <div className="took-content">

        <p className="took-subtitle">
          {subtitle}
        </p>

        <h1 className="took-title">
          {title}
        </h1>

        <div className="took-line"></div>

      </div>

    </section>
  );
}

export default Took;
