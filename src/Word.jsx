
import React, { useEffect, useRef } from "react";
import "./Word.css";

function Word() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("word-show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = section.querySelectorAll(".word-reveal");

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="word-section" ref={sectionRef}>
      <div className="word-container">

        <p className="word-subtitle word-reveal">
          Restaurant WordPress Theme
        </p>

        <h1 className="word-title word-reveal">
          Prices
        </h1>

      </div>
    </section>
  );
}

export default Word;
