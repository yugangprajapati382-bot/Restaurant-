import React, { useEffect, useState } from "react";
import "./Cell.css";

import team from "./team-01.jpg";
import avatar1 from "./avatar-01.jpg";
import avatar2 from "./avatar-02.jpg";
import avatar3 from "./avatar-03.jpg";
import avatar4 from "./avatar-04.jpg";

function Cell() {

  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      image: avatar1,
      name: "Sarah Johnson",
      city: "Seattle",
      message:
        "The quality of products and services from this business is consistently top-notch. I've been a long-time customer, and I'm always impressed."
    },
    {
      image: avatar2,
      name: "Emily Wilson",
      city: "New York",
      message:
        "Amazing experience! The team provides excellent service and always pays attention to every little detail."
    },
    {
      image: avatar3,
      name: "Sophia Martin",
      city: "California",
      message:
        "Their dedication and quality are outstanding. I highly recommend their services to everyone."
    },
    {
      image: avatar4,
      name: "Olivia Smith",
      city: "London",
      message:
        "A wonderful experience from beginning to end. Everything was professional, creative, and beautifully presented."
    }
  ];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // SCROLL ANIMATION
  useEffect(() => {
    const elements = document.querySelectorAll(".cell-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cell-active");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="cell-section">

      <div className="cell-heading cell-reveal">

        <p>Customer Voices</p>

        <h1>Standard of Excellence</h1>

        <span>
          As you explore these testimonials, we hope you'll gain insight
          into the quality, reliability,
          <br />
          and outstanding customer service
        </span>

      </div>

      {/* MAIN CONTENT */}

      <div className="cell-container">

        {/* LEFT CONTENT */}

        <div className="cell-info cell-reveal">

          <div className="cell-info-content">

            <h2>
              Hear what our clients have to say
            </h2>

            <p>
              We take immense pride in our work and continuously
              strive to provide top-quality services/products
              that meet and exceed your expectations.
            </p>

            <button className="cell-button">
              READ MORE
              <span> ↗ </span>
            </button>

          </div>

        </div>

        {/* CENTER IMAGE */}

        <div className="cell-team cell-reveal">

          <img
            src={team}
            alt="Our team member"
          />

          <div className="cell-team-overlay">
            <h3>Our Team</h3>
            <p>Quality, Passion & Excellence</p>
          </div>

        </div>

        <div className="cell-review cell-reveal">

          <div className="cell-review-content">

            <p className="cell-message" key={current}>
              {testimonials[current].message}
            </p>
            <div className="cell-arrows">

              <button
                onClick={prevSlide}
                aria-label="Previous testimonial"
              >
                &#8249;
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next testimonial"
              >
                &#8250;
              </button>

            </div>

            {/* AVATAR */}

            <div className="cell-avatar" key={`avatar-${current}`}>
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
              />
            </div>

            <h3>{testimonials[current].name}</h3>

            <span className="cell-city">
              {testimonials[current].city}
            </span>

            {/* DOTS */}

            <div className="cell-dots">

              {testimonials.map((item, index) => (
                <button
                  key={index}
                  className={current === index ? "active" : ""}
                  onClick={() => setCurrent(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Cell;