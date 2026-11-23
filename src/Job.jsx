
import React, { useState } from "react";
import "./Job.css";

const products = [
  {
    name: "Garnet",
    price: 29,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=700",
  },
  {
    name: "Jade",
    price: 110,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700",
  },
  {
    name: "Ruby",
    price: 40,
    oldPrice: 80,
    image:
      "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=700",
  },
  {
    name: "Emerald",
    price: 50,
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=700",
  },
];

function Job() {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState(0);

  const addToCart = () => {
    setCart(cart + quantity);
  };

  return (
    <div className="job-page">
{/* 
        <section className="job-banner">
        <h1>Shop</h1>
      </section> */}

      {/* Product Details */}
      <section className="job-product">

        <div className="job-product-image">
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1000"
            alt="Fresh healthy food bowl"
          />
        </div>

        <div className="job-product-info">

          <span className="job-small-heading">
            Fresh and Healthy Food
          </span>

          <h2>Pearl</h2>

          <div className="job-price">
            <del>$90.00</del>
            <span>$35.00</span>
          </div>

          <p>
            Enjoy fresh and delicious food prepared with quality
            ingredients. Our special food collection brings together
            amazing taste, freshness and healthy choices.
            Every bite gives you a wonderful experience.
          </p>

          <div className="job-quantity">
            <button
              onClick={() =>
                setQuantity(Math.max(1, quantity - 1))
              }
            >
              -
            </button>

            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, Number(e.target.value) || 1))
              }
            />

            <button
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>

          <button
            className="job-cart-btn"
            onClick={addToCart}
          >
            ADD TO CART
          </button>

          <p className="job-cart-message">
            {cart > 0 ? `${cart} item(s) added to cart!` : ""}
          </p>

          <div className="job-category">
            <p><b>Category:</b> Shop</p>
            <p><b>Tag:</b> Product</p>
          </div>

        </div>
      </section>

      {/* Description */}
      <section className="job-description">
        <h2>Description</h2>

        <p>
          Discover our delicious food collection, made with fresh
          ingredients and prepared with care. We believe in bringing
          quality, freshness and great taste together. Our products
          are perfect for people who love delicious food and a
          wonderful dining experience.
        </p>
      </section>

      {/* Related Products */}
      <section className="job-related">

        <h2>Related Products</h2>

        <div className="job-related-grid">

          {products.map((product, index) => (
            <div className="job-related-card" key={product.name}>

              <div className="job-related-image">
                <img
                  src={product.image}
                  alt={product.name}
                />

                {product.oldPrice && (
                  <span className="job-sale">Sale!</span>
                )}
              </div>

              <h3>{product.name}</h3>

              <div className="job-related-price">
                {product.oldPrice && (
                  <del>${product.oldPrice}.00</del>
                )}
                <span>${product.price}.00</span>
              </div>

              <button
                onClick={() => {
                  setCart(cart + 1);
                }}
              >
                Add to cart
              </button>

            </div>
          ))}

        </div>

        {cart > 0 && (
          <div className="job-cart-total">
            Cart Items: {cart}
          </div>
        )}

      </section>

    </div>
  );
}

export default Job;
