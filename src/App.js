import React, { useState } from "react";
import "./App.css";
import Product from "./product";
import Cart from "./cart";
import products from "./data/product"; // Ürün verilerini içe aktar

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((item) => item.id !== productToRemove.id));
  };

  return (
    <div className="App">
      <div className="title-container">
        <h1>Alışveriş Sepeti Uygulaması</h1>
      </div>
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image} // Görsel eklemek için image prop'unu kullanın
            onAddToCart={addToCart}
          />
        ))}
      </div>
      <Cart cart={cart} onRemoveFromCart={removeFromCart} />
    </div>
  );
}

export default App;
