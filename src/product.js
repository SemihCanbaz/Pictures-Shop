import React from "react";
import "./product.css"; // Stil dosyasını içe aktar

function Product({ id, name, price, image, onAddToCart }) {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Fiyat: ${price}</p>
      <button
        className="add-to-cart-btn"
        onClick={() => onAddToCart({ id, name, price })}
      >
        Sepete Ekle
      </button>
    </div>
  );
}

export default Product;
