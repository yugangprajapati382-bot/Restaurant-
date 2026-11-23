
import React, { useEffect, useRef } from "react";
import "./Proo.css";

import food1 from "./food-01.jpg";
import food2 from "./food-02.jpg";
import food3 from "./food-03.jpg";

import person1 from "./team-01.jpg";
import person2 from "./team-02.jpg";
import person3 from "./team-04.jpg";

function Proo() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("proo-show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const items = section.querySelectorAll(".proo-reveal");

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      image: food1,
      person: person1,
      title: "Call Us Now",
      detail: "+ 321 (12) 34672",
      type: "phone",
    },
    {
      image: food2,
      person: person2,
      title: "Get a Quotation",
      detail: "info@mail.com",
      type: "email",
    },
    {
      image: food3,
      person: person3,
      title: "Our Address in NY",
      detail: "40, Rome Street",
      type: "address",
    },
  ];

  return (
    <section className="proo-section" ref={sectionRef}>

      <div className="proo-heading proo-reveal">
        <span>Elevating Excellence</span>
        <h2>Exceptional Team</h2>
        <p>
          Harmonizing expertise and innovation: discover the collective
          genius behind our success of our visionary endeavors
        </p>
      </div>

      <div className="proo-container">

        {cards.map((card, index) => (
          <div
            className="proo-card proo-reveal"
            key={card.type}
            style={{ "--delay": `${index * 0.2}s` }}
          >

            <div className="proo-image">
              <img src={card.image} alt={card.title} />

              <div className="proo-image-overlay">
                <span>Discover More</span>
              </div>
            </div>

            <div className="proo-info">

              <div className="proo-avatar">
                <img src={card.person} alt="Team member" />
              </div>

              <div className="proo-text">
                <p>{card.title}</p>

                <h3>
                  {card.type === "phone" && (
                    <a href="tel:+3211234672">{card.detail}</a>
                  )}

                  {card.type === "email" && (
                    <a href="mailto:info@mail.com">{card.detail}</a>
                  )}

                  {card.type === "address" && card.detail}
                </h3>
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Proo;
