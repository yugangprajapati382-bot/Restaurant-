
import React, { useEffect, useRef } from "react";
import "./Give.css";

import image1 from "./vertical-01.jpg";
import image2 from "./vertical-02.jpg";
import image3 from "./slide-01.jpg";
import image4 from "./focus-02.jpg";
import image5 from "./focus-05.jpg";
import image6 from "./focus-06.jpg";

const items = [
  {
    id: 1,
    image: image2,
    category: "HEALTHY FOOD",
    title: "Fresh And Healthy Meals",
    description:
      "Enjoy delicious meals prepared with fresh ingredients and natural flavors.",
  },
  {
    id: 2,
    image: image3,
    category: "FOOD STORIES",
    title: "Discover New Food Ideas",
    description:
      "Explore creative recipes and discover something delicious every day.",
  },
  {
    id: 3,
    image: image4,
    category: "FRESH INGREDIENTS",
    title: "A Taste Of Freshness",
    description:
      "Discover the beauty of fresh ingredients and colorful dishes.",
  },
  {
    id: 4,
    image: image5,
    category: "SPECIAL RECIPES",
    title: "Delicious Everyday Recipes",
    description:
      "Bring happiness to your table with our favorite recipes.",
  },
  {
    id: 5,
    image: image6,
    category: "FOOD INSPIRATION",
    title: "Make Every Meal Special",
    description:
      "Find inspiration for your next delicious homemade meal.",
  },
  {
    id: 6,
    image: image1,
    category: "HEALTHY LIFESTYLE",
    title: "Eat Fresh Live Better",
    description:
      "Enjoy beautiful food and make every moment memorable.",
  },
];

const Give = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements =
      sectionRef.current?.querySelectorAll(".give-reveal");

    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("give-show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="give-section" ref={sectionRef}>
      <div className="give-container">
        <div className="give-left">
          <div className="give-left-content give-reveal">
            <span className="give-subtitle">
              DISCOVER THE TASTE
            </span>

            <h1>
              Fresh Food
              <br />
              Happy Life
            </h1>

            <p>
              Discover delicious recipes, fresh ingredients
              and amazing food experiences. Make every
              meal a beautiful memory.
            </p>

            <a href="#give-recipes" className="give-button">
              EXPLORE MORE <span>↗</span>
            </a>

          </div>

          <div className="give-main-image give-reveal">
            <img src={image1} alt="Healthy fresh food" />
          </div>

          <div className="give-small-image">
            <img src={image3} alt="Fresh food" />
          </div>

          <div className="give-decoration">
            Fresh & Delicious
          </div>

        </div>
        <div className="give-right" id="give-recipes">
          <div className="give-heading give-reveal">
            <span>OUR COLLECTION</span>
            <h2>Explore Our Delicious World</h2>
            <p>
              A collection of beautiful food, fresh flavors
              and delicious inspiration.
            </p>
          </div>

          <div className="give-cards">

            {items.map((item, index) => (

              <article
                className="give-card give-reveal"
                key={item.id}
                style={{
                  "--delay": `${index * 120}ms`,
                }}
              >

                <div className="give-card-image">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />

                  <span className="give-number">
                    0{item.id}
                  </span>
                </div>

                <div className="give-card-content">

                  <span className="give-category">
                    {item.category}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <a href="/Blog">
                    READ MORE <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Give;
