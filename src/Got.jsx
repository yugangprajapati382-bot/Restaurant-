
import React, { useEffect, useRef } from "react";
import "./Got.css";

function Got() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("got-show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const items = section.querySelectorAll(".got-reveal");

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: "Basic",
      price: "12",
      button: "MORE",
      features: [
        ["Updates Included", true],
        ["Extensive Feature", true],
        ["Custom Solutions", false],
        ["Customer Support", false],
        ["Basic Resources !", true],
      ],
      note: "* Updated prices",
      featured: false,
    },
    {
      name: "Standard",
      price: "27",
      button: "INFO",
      features: [
        ["Custom Solutions", true],
        ["Updates Included", true],
        ["Basic Resources !", true],
        ["Customer Support", true],
        ["Extensive Feature", true],
      ],
      note: "* Prepayment",
      featured: true,
    },
    {
      name: "Premium",
      price: "17",
      button: "CONTACT",
      features: [
        ["Extensive Feature", false],
        ["Basic Resources !", true],
        ["Custom Solutions", true],
        ["Updates Included", true],
        ["Customer Support", true],
      ],
      note: "* Online promo",
      featured: false,
    },
  ];

  return (
    <section className="got-section" ref={sectionRef}>

      <div className="got-heading got-reveal">
        <span>Invest in Excellence</span>

        <h2>Transparent Pricing</h2>

        <p>
          Exploring pricing plans: where affordability meets
          uncompromising for unmatched value and quality
        </p>
      </div>

      <div className="got-container">

        {plans.map((plan, index) => (
          <div
            className={`got-card got-reveal ${
              plan.featured ? "got-featured" : ""
            }`}
            key={plan.name}
            style={{ "--delay": `${index * 0.2}s` }}
          >

            <h3>{plan.name}</h3>

            <div className="got-price">
              <span className="got-dollar">$</span>
              <strong>{plan.price}</strong>
              <span className="got-month">/ mon</span>
            </div>

            <button
              className="got-button"
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              {plan.button}
            </button>

            <div className="got-features">

              {plan.features.map((feature, i) => (
                <div className="got-feature" key={i}>

                  <span className={feature[1] ? "got-check" : "got-cross"}>
                    {feature[1] ? "✓" : "×"}
                  </span>

                  <p>{feature[0]}</p>

                </div>
              ))}

            </div>

            <h4>{plan.note}</h4>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Got;
