
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Zoo.css";

function Zoo() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("zoo-show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const items = section.querySelectorAll(".zoo-reveal");

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="zoo-section" ref={sectionRef}>
      <div className="zoo-container">

        <div className="zoo-left zoo-reveal">
          <div className="zoo-heading">
            <span>Crafting experiences that convert</span>
            <h2>Service Strategy</h2>
          </div>

          <div className="zoo-image zoo-left-image">
            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?w=1000"
              alt="Healthy food"
            />
          </div>
        </div>

        <div className="zoo-right">

          <div className="zoo-image zoo-right-image zoo-reveal">
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1000"
              alt="Healthy vegetable bowl"
            />
          </div>

          <div className="zoo-description zoo-reveal">
            <p>
              In a competitive business landscape, reaching and engaging
              your target audience is vital for success. Our services
              provide creative solutions to maximize your online
              presence and drive growth.
            </p>

            <Link to="/services" className="zoo-button">
              MORE INFO
              <span>→</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Zoo;
