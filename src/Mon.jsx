
import React, { useState, useEffect } from "react";
import "./Mon.css";

import focusImage from "./focus-06.jpg";
import focusImage2 from "./focus-05.jpg";
import focusImage3 from "./focus-07.jpg";
import avatar from "./avatar-04.jpg";

const testimonials = [
  {
    text: "I highly recommend them to anyone seeking quality and results. Their dedication have made all the difference.",
    name: "Emily Johnson",
    city: "Miami",
    image: avatar,
  },
  {
    text: "The food, service and overall experience were absolutely wonderful. Everything was fresh, beautiful and delicious.",
    name: "Sophia Williams",
    city: "New York",
    image: avatar,
  },
  {
    text: "A fantastic experience from beginning to end. I love the quality, creativity and attention to every detail.",
    name: "Olivia Brown",
    city: "California",
    image: avatar,
  },
];

const foodImages = [focusImage, focusImage2, focusImage3];

export default function Mon() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActive(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section className="mon-section">

      {/* LEFT IMAGE SECTION */}
      <div className="mon-image-container">
        <img
          key={foodImages[active]}
          src={foodImages[active]}
          alt="Fresh and healthy food bowls"
          className="mon-main-image"
        />

        <div className="mon-image-overlay">
          <span>Fresh Taste</span>
          <h2>Healthy Food, Happy Life.</h2>
        </div>
      </div>

      {/* RIGHT TESTIMONIAL SECTION */}
      <div
        className="mon-testimonial"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >

        <div className="mon-decoration mon-decoration-one"></div>
        <div className="mon-decoration mon-decoration-two"></div>

        <div className="mon-content" key={active}>

          <p className="mon-quote">
            {testimonials[active].text}
          </p>

          <div className="mon-profile">
            <img
              src={testimonials[active].image}
              alt={testimonials[active].name}
              className="mon-avatar"
            />

            <h3>{testimonials[active].name}</h3>
            <span>{testimonials[active].city}</span>
          </div>

        </div>

        {/* SLIDER ARROWS */}
        <button
          className="mon-arrow mon-prev"
          onClick={prevSlide}
          aria-label="Previous testimonial"
        >
          &#8249;
        </button>

        <button
          className="mon-arrow mon-next"
          onClick={nextSlide}
          aria-label="Next testimonial"
        >
          &#8250;
        </button>

        {/* SLIDER DOTS */}
        <div className="mon-dots">
          {testimonials.map((item, index) => (
            <button
              key={index}
              className={`mon-dot ${active === index ? "active" : ""}`}
              onClick={() => setActive(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

      </div>

    </section>
  );
}
