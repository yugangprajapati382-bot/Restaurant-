
import React, { useState } from "react";
import "./Touch.css";

function Touch() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: ""
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);

    setFormData({
      name: "",
      surname: "",
      email: "",
      message: ""
    });
  };

  return (
    <section className="touch-section">

      <div className="touch-heading">
        <p>Reach out and connect</p>
        <h1>Let's Stay in Touch</h1>
        <span>
          Your bridge to meaningful communication and personalized
          assistance, we're here to listen and assist you
        </span>
      </div>

      <form className="touch-form" onSubmit={handleSubmit}>

        <div className="touch-input-row">
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
        ></textarea>

        <button type="submit" className="touch-button">
          SEND
          <span className="touch-arrow"> →</span>
        </button>

        {sent && (
          <p className="touch-success">
            Thank you! Your message has been received.
          </p>
        )}

      </form>

    </section>
  );
}

export default Touch;
