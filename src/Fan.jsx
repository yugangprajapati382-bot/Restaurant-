
import React, { useState, useEffect, useRef } from "react";
import "./Fan.css";

const counterData = [
  {
    title: "Professional Services",
    number: 67,
  },
  {
    title: "Quality Products",
    number: 83,
  },
  {
    title: "Business Solutions",
    number: 27,
  },
  {
    title: "Consumer Goods",
    number: 58,
  },
];

const Counter = ({ title, number, start, index }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    let frame;

    const duration = 2000;

    const animate = (time) => {
      if (!startTime) startTime = time;

      const progress = Math.min(
        (time - startTime) / duration,
        1
      );

      // Smooth ease-out animation
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easeOut * number));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setCount(number);
      }
    };

    // Stagger counter animations
    const timeout = setTimeout(() => {
      frame = requestAnimationFrame(animate);
    }, index * 200);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [start, number, index]);

  return (
    <div className={`fan-item fan-item-${index + 1}`}>
      <span className="fan-number">
        {count}
      </span>

      <h3 className="fan-title">
        {title}
      </h3>
    </div>
  );
};

const Fan = () => {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    const section = sectionRef.current;

    if (section) {
      observer.observe(section);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className={`fan-section ${start ? "visible" : ""}`}
      ref={sectionRef}
    >
      <div className="fan-container">
        {counterData.map((item, index) => (
          <Counter
            key={index}
            title={item.title}
            number={item.number}
            start={start}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Fan;
