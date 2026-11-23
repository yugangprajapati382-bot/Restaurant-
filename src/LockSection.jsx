
import React, { useEffect } from "react";
import "./Lock.css";
import food from "./focus-02.jpg";

function LockSection() {

  useEffect(() => {
    const elements = document.querySelectorAll(".lock-reveal");

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("lock-show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty(
      "--rotateX",
      `${((y - rect.height / 2) / (rect.height / 2)) * -5}deg`
    );

    card.style.setProperty(
      "--rotateY",
      `${((x - rect.width / 2) / (rect.width / 2)) * 5}deg`
    );
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.setProperty("--rotateX", "0deg");
    e.currentTarget.style.setProperty("--rotateY", "0deg");
  };

  return (
    <section className="lock-section">

      <div className="lock-left">
        <div className="lock-heading lock-reveal">

          <span className="lock-subtitle">
            Business Insights and Beyond
          </span>

          <h1>Unveiling the Revolution</h1>

          <p>
            In a rapidly evolving world, the only constant is change.
            Nowhere is this truer than in the realms of technology
            and innovation. As we stand on the precipice of the fourth
            industrial revolution, it's essential to understand and
            adapt to the seismic shifts shaping our future. It's no
            longer enough to innovate incrementally; we must be ready
            to disrupt ourselves.
          </p>

          <button className="lock-button">
            MORE INFO
          </button>

        </div>
      </div>

      <div
        className="lock-right lock-reveal"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >

        <img src={food} alt="Healthy food" className="lock-image" />

        <div className="lock-image-overlay"></div>

        <button className="lock-play" aria-label="Play video">
          ▶
        </button>

      </div>

      <div className="lock-info lock-reveal">

        <div className="lock-info-item">
          <h3>Exploring Strategies</h3>
          <p>
            Join us on this insightful journey as we uncover
            the tactics that drive progress.
          </p>
        </div>

        <div className="lock-info-item">
          <h3>Innovation Hub</h3>
          <p>
            We dive into the world of effective planning,
            execution, and success in various fields.
          </p>
        </div>

      </div>

    </section>
  );
}

export default LockSection;
