
import React, { useEffect, useRef, useState } from "react";
import "./Hook.css";

import one from "./focus-04.jpg";
import two from "./focus-02.jpg";
import three from "./focus-06.jpg";
import four from "./focus-08.jpg";

function Hook() {
  const sectionRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeCard, setActiveCard] = useState(2);

  const slides = [one, two, three, four];

  const services = [
    {
      image: two,
      title: "Customer Insights 360",
      price: "$45",
      description:
        "Understand customer preferences, behavior, and sentiment to tailor your strategies.",
    },
    {
      image: three,
      title: "Dedicated Consultant",
      price: "$60",
      description:
        "Provide guidance on regulatory compliance, contracts, intellectual property.",
    },
    {
      image: four,
      title: "Customer Catalyst",
      price: "$80",
      description:
        "Strengthen customer loyalty, increase retention rates, and boost revenue.",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("hook-show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const items = section.querySelectorAll(".hook-reveal");

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  return (
    <section className="hook-section" ref={sectionRef}>

      <div className="hook-container">

        <div className="hook-left hook-reveal">

          <div className="hook-slider">

            <img
              src={slides[activeSlide]}
              alt="Delicious restaurant food"
              className="hook-main-image"
              key={activeSlide}
            />

            <button
              className="hook-arrow hook-prev"
              onClick={prevSlide}
              aria-label="Previous image"
            >
              ‹
            </button>

            <button
              className="hook-arrow hook-next"
              onClick={nextSlide}
              aria-label="Next image"
            >
              ›
            </button>

            <div className="hook-dots">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  className={activeSlide === index ? "active" : ""}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

          </div>

          <div className="hook-caption">

            <h2>Efficiency Max Workflow</h2>

            <p>
              Elevate your brand presence and engagement.
              Stand out in the market, build brand loyalty,
              and attract new customers. Empower your team
              to focus on high-value tasks.
            </p>

          </div>

        </div>

        <div className="hook-right">

          {services.map((service, index) => (

            <div
              className={`hook-service hook-reveal ${
                activeCard === index ? "hook-active" : ""
              }`}
              key={index}
              style={{ "--delay": `${index * 0.2}s` }}
              onMouseEnter={() => setActiveCard(index)}
              onClick={() => setActiveCard(index)}
            >

              <div className="hook-service-image">
                <img src={service.image} alt={service.title} />
              </div>

              <div className="hook-service-content">

                <div className="hook-service-heading">

                  <h3>{service.title}</h3>

                  <span className="hook-line"></span>

                  <span className="hook-price">
                    {service.price}
                  </span>

                </div>

                <p>{service.description}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Hook;
