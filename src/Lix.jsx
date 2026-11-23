
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Lix.css";

import one from "./Focus-12.jpg";
import two from "./Focus-11.jpg";
import three from "./Focus-10.jpg";

function Lix() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("lix-show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const items = section.querySelectorAll(".lix-reveal");

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      number: "1",
      image: one,
      title: "Responsive Assistance",
      description:
        "From inquiries to troubleshooting, our support team is here for you.",
    },
    {
      number: "2",
      image: two,
      title: "Tailored Solutions",
      description:
        "Our experts understand your unique requirements, delivering solutions.",
    },
    {
      number: "3",
      image: three,
      title: "Continuous Delight",
      description:
        "Client happiness is an ongoing commitment and we always refine our services.",
    },
  ];

  return (
    <section className="lix-section" ref={sectionRef}>

      <div className="lix-leaf lix-leaf-left"></div>
      <div className="lix-leaf lix-leaf-right"></div>

      <div className="lix-heading lix-reveal">

        <h2>Unmatched Service Excellence</h2>

        <p>Explore boundless opportunities</p>

      </div>

      <div className="lix-container">

        {services.map((item, index) => (

          <div
            className={`lix-card lix-reveal lix-card-${index + 1}`}
            key={item.number}
            style={{ "--delay": `${index * 0.2}s` }}
          >

            <div className="lix-image-box">

              <img src={item.image} alt={item.title} />

              <span className="lix-number">
                {item.number}
              </span>

            </div>

            <div className="lix-card-content">

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>

          </div>

        ))}

      </div>

      <div className="lix-button-box lix-reveal">

        <Link to="/services" className="lix-button">
          MORE INFO <span>→</span>
        </Link>

      </div>

    </section>
  );
}

export default Lix;
