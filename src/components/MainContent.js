import React, { useContext, useState } from "react";
import "./MainContent.css";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function MainContent() {
  const { addToCart } = useContext(CartContext);
  const [message, setMessage] = useState("");
  
  const products = [
    {
      id: 1,
      name: "Himalaya Baby Cream",
      price: "₹159.00",
      image: "/assets/images/himalayababycream.jpg",
    },
    {
        id: 2,
        name: "Mother Child",
        price: "₹549.00",
        image: "/assets/images/Mother-Child.webp",
      },
  
    {
        id: 4,
        name: "Eco Mama Soap",
        price: "₹479.00",
        image: "/assets/images/ecomama.webp",
      },
   
      {
        id: 5,
        name: "Sanosan Shampoo",
        price: "₹479.00",
        image: "/assets/images/Sanosanshampo.webp",
      },
      {
        id: 6,
        name: "Baby Sleep",
        price: "₹149.00",
        image: "/assets/images/babysleep.jpg",
      },
      {
        id: 7,
        name: "Sharo Piilow",
        price: "₹479.00",
        image: "/assets/images/babypilow.jpeg",
      },
      {
        id: 8,
        name: "Altaila Baby Oil",
        price: "₹549.00",
        image: "/assets/images/sbmayuroil.webp",
      },
      {
        id: 9,
        name: "Intex Baby Pool",
        price: "₹549.00",
        image: "/assets/images/intex.jpeg",
      },
      {
        id: 10,
        name: "Baby Pool",
        price: "₹479.00",
        image: "/assets/images/intext.webp",
      },
      {
        id: 19,
        name: "Jhonson Shampoo",
        price: "₹159.00",
        image: "/assets/images/jhonsonshampo.webp",
      },
      {
        id:11,
        name: "Jhonson Baby Soap",
        price: "₹549.00",
        image: "/assets/images/jhonsonbaby.jpg",
      },
      {
        id: 12,
        name: "Jhonson Baby Powder",
        price: "₹479.00",
        image: "/assets/images/johnson.jpg",
      },
      {
        id: 14,
        name: "Mas Pharmacy",
        price: "₹479.00",
        image: "/assets/images/mas pharmacy.jpg",
      },
      {
        id: 15,
        name: "Rattles Toy",
        price: "₹159.00",
        image: "/assets/images/rattlestoy.webp",
      },
      {
        id: 3,
        name: "Pink Dress",
        price: "₹549.00",
        image: "/assets/images/babydress.jpg",
      },
      {
        id: 21,
        name: "Baby Sheet",
        price: "₹549.00",
        image: "/assets/images/babysheet.jpg",
      },


  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    setMessage(`${product.name} added to cart`);
    setTimeout(() => setMessage(""), 3000); 
  };

  return (
    <main className="main-content">
      <div className="hero-section">
        <img
          src="/assets/images/b1.jpg"
          alt="Baby clothes"
          className="hero-image"
        />
        <div className="left">
          <h1>Everything you need for your baby</h1>
          <p>
            Explore our collection of new and popular baby clothes, designed with
            both style and comfort in mind.
          </p>
          <Link to="/cart">
          <button className="shop-now">Shop Now</button>
        </Link>
         
        </div>
      </div>

      {message && <div className="cart-message">{message}</div>}

      <section className="product-section">
        <h2>Delightful Discoveries</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <button
                className="add-to-cart"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default MainContent;
