
import React from "react";
import "./Roob.css";

function Roob() {

  const products = [
    {
      name: "Topaz",
      price: "$59.00",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700"
    },
    {
      name: "Garnet",
      price: "$29.00",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=700"
    },
    {
      name: "Pearl",
      oldPrice: "$90.00",
      price: "$35.00",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700"
    },
    {
      name: "Jade",
      price: "$110.00",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=700"
    },
    {
      name: "Ruby",
      oldPrice: "$80.00",
      price: "$40.00",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=700"
    },
    {
      name: "Emerald",
      price: "$50.00",
      image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=700"
    }
  ];

  return (
    <section className="roob-section">

      <div className="roob-container">

        <div className="roob-grid">

          {products.map((product, index) => (
            <div
              className="roob-card"
              key={index}
              style={{ "--delay": `${index * 0.15}s` }}
            >

              <div className="roob-image-box">

                <img
                  src={product.image}
                  alt={product.name}
                  className="roob-image"
                />

                <div className="roob-overlay">
                  <button className="roob-view-btn">
                    View Product
                  </button>
                </div>

              </div>

              <div className="roob-details">

                <h3>{product.name}</h3>

                <div className="roob-price">

                  {product.oldPrice && (
                    <del>{product.oldPrice}</del>
                  )}

                  <span>{product.price}</span>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Roob;
