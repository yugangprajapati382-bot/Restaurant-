
import React, { useEffect, useRef } from "react";
import "./Cool.css";

const posts = [
  {
    title: "Check Events",
    description:
      "Discover a world of excitement and stay informed about the upcoming events, gatherings, celebrations and much more.",
    date: "August 29, 2023",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=700",
  },
  {
    title: "Meet the Staff",
    description:
      "Discover the heart and soul behind our success: a closer look at the amazing individuals who make up our dedicated team.",
    date: "August 29, 2023",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=700",
  },
  {
    title: "New Website",
    description:
      "Explore the Exciting World of Our Brand New Website - Your Gateway to Innovation, Inspiration, and Experiences.",
    date: "August 29, 2023",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700",
  },
];

const Cool = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements =
      sectionRef.current?.querySelectorAll(".cool-reveal");

    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="cool-section" ref={sectionRef}>

      {/* Decorative leaves */}
      <div className="cool-leaf cool-leaf-left"></div>
      <div className="cool-leaf cool-leaf-right"></div>

      <div className="cool-container">

        {/* Header */}
        <div className="cool-header cool-reveal">
          <div>
            <h2 className="cool-heading">
              Latest Posts
            </h2>

            <p className="cool-subheading">
              Exploring topics, sharing perspectives, and
              igniting conversations in a journey through ideas
            </p>
          </div>

          <a href="#all-posts" className="cool-view-btn">
            VIEW ALL
          </a>
        </div>

        {/* Posts Layout */}
        <div className="cool-content" id="all-posts">

          {/* Featured Post */}
          <article className="cool-featured cool-reveal">

            <div className="cool-featured-image">
              <img
                src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200"
                alt="Healthy sustainable food"
              />
            </div>

            <div className="cool-featured-info">
              <h3>Sustainability</h3>

              <p>
                One conscious choice, join us on a journey of
                stewardship, ethical practices, and a brighter,
                sustainable future for all.
              </p>

              <div className="cool-meta">
                <span>
                  <span className="cool-icon">◷</span>
                  August 29, 2023
                </span>

                <span>
                  <span className="cool-icon">☷</span>
                  Blog
                </span>
              </div>
            </div>

          </article>

          {/* Right Side Posts */}
          <div className="cool-post-list">

            {posts.map((post, index) => (
              <article
                className="cool-post cool-reveal"
                key={index}
                style={{
                  "--delay": `${index * 0.2}s`,
                }}
              >

                <div className="cool-post-image">
                  <img
                    src={post.image}
                    alt={post.title}
                  />
                </div>

                <div className="cool-post-info">

                  <h3>{post.title}</h3>

                  <p>{post.description}</p>

                  <div className="cool-date">
                    <span className="cool-icon">◷</span>
                    {post.date}
                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Cool;
