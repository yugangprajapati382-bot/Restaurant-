
import React, { useEffect, useRef, useState } from "react";
import "./Tel.css";
import foodImage from "./focus-05.jpg";

function Tel() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;

    if (!section || !image) return;

    let animationFrame;

    const handleScroll = () => {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const progress =
          (windowHeight - rect.top) /
          (windowHeight + rect.height);

        const movement = (progress - 0.5) * 160;

        image.style.transform = `translateX(${movement}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("tel-show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const items = section.querySelectorAll(".tel-reveal");

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);

    setFormData({
      name: "",
      surname: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="tel-section" ref={sectionRef}>

      <div className="tel-heading tel-reveal">
        <span>Direct communication</span>
        <h2>Connect with Us</h2>
      </div>

      <div className="tel-container">

        <div className="tel-image tel-reveal">
          <img
            ref={imageRef}
            src={foodImage}
            alt="Fresh healthy food bowl"
          />

          <div className="tel-image-overlay"></div>
        </div>

        <div className="tel-form-box tel-reveal">

          <form onSubmit={handleSubmit}>

            <div className="tel-input-row">

              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="surname"
                placeholder="Surname"
                value={formData.surname}
                onChange={handleChange}
                required
              />

            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="tel-button">
              SEND <span>→</span>
            </button>

            {sent && (
              <p className="tel-success">
                Thank you! Your message is ready.
              </p>
            )}

          </form>

        </div>

      </div>

    </section>
  );
}

export default Tel;
