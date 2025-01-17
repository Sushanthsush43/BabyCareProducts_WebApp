import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./ItemCart.css";

function ItemCart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="item-cart">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-item-price">{item.price}</p>
                <button
                  className="remove-from-cart"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ItemCart;
