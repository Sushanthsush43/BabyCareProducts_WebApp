import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ItemCart from "./components/ItemCart";
import { CartProvider } from "./context/CartContext";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/cart" element={<ItemCart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
