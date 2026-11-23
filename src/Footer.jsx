
import React, { useEffect, useRef, useState } from "react";
import "./Footer.css";

const usefulLinks = [
  "Pricing",
  "Testimonials",
  "Customer Support",
  "Products & Services",
  "Pricing",
];

const siteLinks = [
  "Newsletter",
  "Partnerships",
  "Privacy Policy",
  "Terms and Conditions",
  "Partnerships",
];

const SocialIcon = ({ type }) => {
  const icons = {
    facebook: (
      <svg viewBox="0 0 24 24">
        <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V10H7v3h2.8v8h3.7Z" />
      </svg>
    ),
    twitter: (
      <svg viewBox="0 0 24 24">
        <path d="M22 5.9c-.7.3-1.5.5-2.3.6a4 4 0 0 0 1.8-2.2 8 8 0 0 1-2.5 1 4 4 0 0 0-6.9 3.7 11.4 11.4 0 0 1-8.3-4.2 4 4 0 0 0 1.2 5.3 4 4 0 0 1-1.8-.5v.1a4 4 0 0 0 3.2 3.9 4 4 0 0 1-1.8.1 4 4 0 0 0 3.7 2.8A8 8 0 0 1 3 18.2a11.3 11.3 0 0 0 17.4-9.5v-.5A8 8 0 0 0 22 5.9Z" />
      </svg>
    ),
    youtube: (
      <svg viewBox="0 0 24 24">
        <path d="M23 7a3 3 0 0 0-2.1-2.1C19 4.4 12 4.4 12 4.4s-7 0-8.9.5A3 3 0 0 0 1 7C.5 9 .5 12 .5 12s0 3 .5 5a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5A3 3 0 0 0 23 17c.5-2 .5-5 .5-5s0-3-.5-5ZM9.5 15.5v-7l6 3.5-6 3.5Z" />
      </svg>
    ),
  };

  return (
    <a
      href="/"
      className="footer-social-icon"
      aria-label={type}
    >
      {icons[type]}
    </a>
  );
};

const Footer = () => {
  const footerRef = useRef(null);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const elements =
      footerRef.current?.querySelectorAll(".footer-reveal");

    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("footer-show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Newsletter form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email.");
      return;
    }

    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="main-footer" ref={footerRef}>

      <div className="footer-container">

        <div className="footer-column footer-reveal">

          <h3>Useful :</h3>

          <ul className="footer-links">
            {usefulLinks.map((link, index) => (
              <li key={index}>
                <a href="#">
                  <span className="footer-arrow">›</span>
                  {link}
                </a>
              </li>
            ))}
          </ul>

        </div>
        <div
          className="footer-column footer-reveal"
          style={{ "--delay": "0.2s" }}
        >

          <h3>Site Links :</h3>

          <ul className="footer-links">
            {siteLinks.map((link, index) => (
              <li key={index}>
                <a href="#">
                  <span className="footer-arrow">›</span>
                  {link}
                </a>
              </li>
            ))}
          </ul>

        </div>

        {/* Newsletter */}
        <div
          className="footer-column footer-reveal"
          style={{ "--delay": "0.4s" }}
        >

          <h3>Newsletter :</h3>

          <form
            className="footer-newsletter"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setMessage("");
              }}
              required
            />

            <button type="submit">
              SEND
            </button>
          </form>

          {message && (
            <p className="footer-message">
              {message}
            </p>
          )}

          {/* Social Links */}
          <div className="footer-social-area">

            <div className="footer-social-box">
              <h3>Social :</h3>

              <div className="footer-social-icons">
                <SocialIcon type="facebook" />
                <SocialIcon type="twitter" />
                <SocialIcon type="youtube" />
              </div>
            </div>

            <div className="footer-social-box">
              <h3>Find us also :</h3>

              <div className="footer-social-icons">
                <SocialIcon type="facebook" />
                <SocialIcon type="twitter" />
                <SocialIcon type="youtube" />
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <div className="footer-bottom-links">
            <a href="#">Facebook</a>
            <span>•</span>
            <a href="#">Youtube</a>
            <span>•</span>
            <a href="#">Instagram</a>
          </div>

          <div className="footer-payments">
            <span>VISA</span>
            <span>PayPal</span>
            <span>◎</span>
            <span>stripe</span>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
