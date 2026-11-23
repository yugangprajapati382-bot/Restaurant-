
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Rish.css";

import one from "./team-05.jpg";
import two from "./team-02.jpg";
import three from "./team-04.jpg";
import four from "./team-01.jpg";

function Rich() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("rich-show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const items = section.querySelectorAll(".rich-reveal");

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const team = [
    {
      type: "profile",
      name: "Sarah Davy",
      role: "Administrative Assistant",
    },
    {
      type: "image",
      image: one,
      alt: "Restaurant team member",
    },
    {
      type: "image",
      image: two,
      alt: "Restaurant team member",
    },
    {
      type: "feature",
      title: "Teamwork",
      description: "Unity in diversity",
    },
    {
      type: "image",
      image: three,
      alt: "Restaurant team member",
    },
    {
      type: "image",
      image: two,
      alt: "Restaurant team member",
    },
    {
      type: "profile",
      name: "Emily Smit",
      role: "General Manager",
    },
    {
      type: "image",
      image: four,
      alt: "Restaurant team member",
    },
  ];

  return (
    <section className="rich-section" ref={sectionRef}>

      <div className="rich-grid">

        {team.map((item, index) => (

          <div
            className={`rich-card rich-reveal rich-${item.type}`}
            key={index}
            style={{ "--delay": `${index * 0.12}s` }}
          >

            {item.type === "profile" && (
              <div className="rich-profile-content">

                <h2>{item.name}</h2>

                <p>{item.role}</p>

                <Link to="/contact" className="rich-button">
                  CONTACT ME
                  <span>→</span>
                </Link>

              </div>
            )}

            {item.type === "image" && (
              <div className="rich-image-wrapper">

                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                />

                <div className="rich-image-overlay">
                  <span>Our Team</span>
                </div>

              </div>
            )}

            {item.type === "feature" && (
              <div className="rich-feature-content">

                <div className="rich-feature-box">

                  <h2>{item.title}</h2>

                  <p>{item.description}</p>

                </div>

              </div>
            )}

          </div>

        ))}

      </div>

    </section>
  );
}

export default Rich;
