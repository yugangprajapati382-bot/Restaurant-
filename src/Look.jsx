import React, { useEffect } from "react";
import "./Look.css";
import one from './focus-12.jpg'
import two from './focus-11.jpg'
import three from './focus-02.jpg'
import four from './focus-10.jpg'
import five from './focus-08.jpg'

function Look() {

  useEffect(() => {
    const elements = document.querySelectorAll(".look-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("look-show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Consulting",
      description:
        "Providing strategic guidance to improve business growth.",
      image: one,
      size: "large",
    },
    {
      title: "Planning",
      description:
        "Offering expertise in management and wealth planning.",
      image: two,
      size: "large",
    },
    {
      title: "Solutions",
      description:
        "Assisting recruitment and employee development.",
      image: three,
      size: "small",
    },
    {
      title: "Sales",
      description:
        "Driving revenue growth and expanding market reach.",
      image: four,
      size: "small",
    },
    {
      title: "Management",
      description:
        "Optimizing supply chain operations for cost-effectiveness.",
      image: five,
      size: "small",
    },
  ];
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.setProperty("--rotateX", `${rotateX}deg`);
    card.style.setProperty("--rotateY", `${rotateY}deg`);
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.setProperty("--rotateX", "0deg");
    e.currentTarget.style.setProperty("--rotateY", "0deg");
  };

  return (
    <section className="look-section">
      <div className="look-heading look-reveal">

        <p className="look-subtitle">
          Diverse Solutions Tailored to Your Needs
        </p>

        <h1>
          Comprehensive <span>Services</span>
        </h1>

        <p className="look-description">
          A multifaceted array of tailored solutions to address
          your unique requirements and elevate your experience.
        </p>

        <div className="look-line"></div>

      </div>

      <div className="look-container">

        {services.map((service, index) => (

          <div
            className={`look-card ${service.size} look-reveal`}
            key={service.title}
            style={{
              "--delay": `${index * 180}ms`,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >

            <img
              src={service.image}
              alt={service.title}
              className="look-image"
            />

            <div className="look-overlay"></div>

            <div className="look-shine"></div>

            <div className="look-content">

              <span className="look-number">
                0{index + 1}
              </span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <div className="look-arrow">
                <span>Explore More</span>
                <span className="arrow-icon">↗</span>
              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Look;
