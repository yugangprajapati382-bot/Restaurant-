
import React, { useEffect } from "react";
import "./Top.css";

function Top() {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".reveal");

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been received.");
    e.target.reset();
  };

  return (
    <div className="top-page">

      {/* Contact Banner */}
      <section className="top-banner">
        <div className="top-banner-content">
          <p>Restaurant WordPress Theme</p>
          <h1>Contact</h1>
        </div>
      </section>


      {/* About Company */}
      <section className="top-about reveal">

        <div className="top-about-text">
          <span className="top-small-title">
            About Our Company
          </span>

          <h2>
            Transforming challenges into
            opportunities and ideas into
            reality.
          </h2>

          <p>
            Our story is one of dedication, innovation,
            and a commitment to creating positive change.
            From humble beginnings to a thriving business,
            we've remained focused on quality and excellence.
          </p>

          <div className="top-progress">
            <p>Pillars of Accomplishment</p>
            <div className="top-progress-bg">
              <div className="top-progress-fill"></div>
            </div>
          </div>

          <button className="top-button">
            MORE INFO
          </button>
        </div>

        <div className="top-about-images">
          <img
            className="top-main-image"
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900"
            alt="Healthy food"
          />

          <img
            className="top-small-image top-img-one"
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"
            alt="Fresh salad"
          />

          <img
            className="top-small-image top-img-two"
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400"
            alt="Healthy meal"
          />

          <img
            className="top-small-image top-img-three"
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400"
            alt="Fresh ingredients"
          />
        </div>

      </section>


      {/* Contact Form Section */}
      <section className="top-contact reveal">

        <div className="top-contact-image">
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?w=1000"
            alt="Healthy restaurant food"
          />
        </div>

        <div className="top-contact-form">

          <h2>Reach Out and Connect</h2>

          <span className="top-small-title">
            Connecting for Excellence
          </span>

          <div className="top-contact-details">

            <div>
              <h4>Address :</h4>
              <p>Miami, FL 33139</p>
            </div>

            <div>
              <h4>Email :</h4>
              <p>info@mail.com</p>
            </div>

            <div>
              <h4>Phone :</h4>
              <p>+1 392 483 387</p>
            </div>

          </div>

          <form onSubmit={handleSubmit}>

            <div className="top-input-row">
              <input
                type="text"
                placeholder="Name"
                required
              />

              <input
                type="text"
                placeholder="Surname"
                required
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              required
            />

            <textarea
              placeholder="Message"
              rows="6"
              required
            ></textarea>

            <button type="submit">
              SEND MESSAGE
            </button>

          </form>

        </div>

      </section>


      {/* Reach Out Section */}
      <section className="top-reach reveal">

        <div className="top-reach-text">

          <span className="top-small-title">
            Your Voice Matters, and We're Here to Listen
          </span>

          <h2>Reach Out and Connect</h2>

          <p>
            We value your feedback and inquiries.
            Please feel free to get in touch with us
            using the contact information below or by
            filling out our contact form. We look
            forward to hearing from you.
          </p>

          <button className="top-button">
            GET IN TOUCH
          </button>

        </div>


        <div className="top-reach-details">

          <div className="top-detail-item">
            <span>📍</span>
            <div>
              <h3>Address :</h3>
              <p>23 Ocean Av. Miami, FL 33101</p>
            </div>
          </div>

          <div className="top-detail-item">
            <span>◷</span>
            <div>
              <h3>Timetables :</h3>
              <p>09:00 am - 11:00 pm</p>
            </div>
          </div>

          <div className="top-detail-item">
            <span>✉</span>
            <div>
              <h3>Email :</h3>
              <p>info@mail.com</p>
            </div>
          </div>

          <div className="top-detail-item">
            <span>☎</span>
            <div>
              <h3>Phone :</h3>
              <p>+1 834 268 302</p>
            </div>
          </div>

        </div>


        <div className="top-map">
          <iframe
            title="Restaurant Location"
            src="https://maps.google.com/maps?q=Miami%20Florida&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </section>

    </div>
  );
}

export default Top;
