
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Door.css";

function Door() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("door-show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const progress = [
    {
      title: "Milestones Achieved",
      value: 78,
      color: "pink",
    },
    {
      title: "Pathways to Success",
      value: 52,
      color: "blue",
    },
    {
      title: "Quantifying Our Impact",
      value: 90,
      color: "pink",
    },
  ];

  return (
    <section className="door-section" ref={sectionRef}>

      <div className="door-leaf door-leaf-top">
        <svg viewBox="0 0 200 200">
          <path d="M10 190 Q80 100 190 10" />
          <path d="M10 190 Q40 110 30 30" />
          <path d="M10 190 Q100 140 170 70" />
          <path d="M45 150 Q50 90 30 30" />
          <path d="M75 120 Q110 70 140 40" />
          <path d="M100 95 Q130 100 170 70" />
        </svg>
      </div>

      <div className="door-container">

        <div className="door-images">

          <div className="door-image-box door-image-one">
            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?w=700&q=85"
              alt="Fresh healthy food"
            />
          </div>

          <div className="door-image-box door-image-two">
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700&q=85"
              alt="Fresh vegetable bowl"
            />
          </div>

        </div>

        <div className="door-content">

          <p className="door-subtitle">
            Building Futures
          </p>

          <h2 className="door-heading">
            Who We Are
          </h2>

          <p className="door-description">
            We are more than just a company, we are a dedicated team
            of professionals committed to making a meaningful impact.
            Established with a vision to provide exceptional
            solutions, we've grown through hard work, innovation,
            and unwavering dedication.
          </p>

          <div className="door-progress-list">

            {progress.map((item, index) => (
              <div
                className="door-progress-item"
                key={index}
                style={{ "--delay": `${0.8 + index * 0.2}s` }}
              >

                <p>{item.title}</p>

                <div className="door-progress-bg">

                  <div
                    className={`door-progress-fill ${item.color}`}
                    style={{ "--progress": `${item.value}%` }}
                  ></div>

                </div>

              </div>
            ))}

          </div>

          <Link to="/contact" className="door-button">
            CONTACT NOW
            <span>→</span>
          </Link>

        </div>

      </div>

      <div className="door-leaf door-leaf-bottom">
        <svg viewBox="0 0 200 200">
          <path d="M10 190 Q80 100 190 10" />
          <path d="M10 190 Q40 110 30 30" />
          <path d="M10 190 Q100 140 170 70" />
          <path d="M45 150 Q50 90 30 30" />
          <path d="M75 120 Q110 70 140 40" />
          <path d="M100 95 Q130 100 170 70" />
        </svg>
      </div>

    </section>
  );
}

export default Door;
