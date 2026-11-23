
import React, { useEffect, useRef } from "react";
import "./Add.css";

function Add() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("add-show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const items = section.querySelectorAll(".add-reveal");

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      number: "01",
      title: "Fresh Ingredients",
      description:
        "We use fresh and quality ingredients to make every meal delicious and healthy.",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700",
    },
    {
      number: "02",
      title: "Made With Love",
      description:
        "Every dish is carefully prepared with passion, creativity and attention.",
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?w=700",
    },
    {
      number: "03",
      title: "Amazing Taste",
      description:
        "Enjoy delicious flavours and discover something special in every bite.",
      image:
        "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=700",
    },
  ];

  return (
    <section className="add-section" ref={sectionRef}>
      <div className="add-heading add-reveal">
        <span>Discover Something Special</span>
        <h2>Why Choose Us</h2>
        <p>
          Fresh food, amazing flavours and wonderful experiences.
          We make every meal special for you.
        </p>
      </div>

      <div className="add-container">
        {features.map((item, index) => (
          <div
            className="add-card add-reveal"
            key={item.number}
            style={{ "--delay": `${index * 0.2}s` }}
          >
            <div className="add-image">
              <img src={item.image} alt={item.title} loading="lazy" />

              <span className="add-number">{item.number}</span>
            </div>

            <div className="add-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <a href="/contact" className="add-link">
                Learn More <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Add;
