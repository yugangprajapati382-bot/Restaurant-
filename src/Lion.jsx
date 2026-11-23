
import React, { useEffect } from "react";
import "./Lion.css";

const blogs = [
  {
    title: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=1000",
    description:
      "One conscious choice, join us on a journey of stewardship, ethical practices, and a brighter, sustainable future for all.",
  },
  {
    title: "New Website",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1000",
    description:
      "Explore the exciting world of our brand new website - your gateway to innovation, inspiration, and experiences.",
  },
  {
    title: "Meet the Staff",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1000",
    description:
      "Discover the heart and soul behind our success: a closer look at the amazing individuals who make up our dedicated team.",
  },
  {
    title: "Check Events",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1000",
    description:
      "Discover a world of excitement and stay informed about upcoming events, gatherings, celebrations and much more.",
  },
];

function Lion() {
  useEffect(() => {
    const elements = document.querySelectorAll(".lion-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("lion-show");
          } else {
            entry.target.classList.remove("lion-show");
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

  return (
    <div className="lion-page">

      {/* Header Section */}
      <section className="lion-header">
        <div className="lion-header-content">
          <h1>Category: Blog</h1>
          <p>
            Exploring topics, sharing perspectives, and igniting
            conversations in a journey through ideas
          </p>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="lion-blog-section">
        <div className="lion-blog-container">

          {blogs.map((blog, index) => (
            <div
              className="lion-card lion-reveal"
              key={index}
              style={{ "--delay": `${index * 0.15}s` }}
            >
              <div className="lion-image-box">
                <img src={blog.image} alt={blog.title} />

                <div className="lion-image-overlay">
                  <span>Explore More</span>
                </div>
              </div>

              <div className="lion-card-content">
                <h2>{blog.title}</h2>

                <p>{blog.description}</p>

                <div className="lion-details">
                  <span>
                    <i>◷</i> August 29, 2023
                  </span>

                  <span>
                    <i>☷</i> Blog
                  </span>
                </div>

                <button className="lion-button">
                  Read More <span>→</span>
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}

export default Lion;
