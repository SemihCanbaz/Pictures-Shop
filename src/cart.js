// Cart.js

import React from "react";

function Cart({ cart, onRemoveFromCart }) {
  // Sepetten ürün çıkarma işlevi
  const handleRemoveFromCart = (product) => {
    onRemoveFromCart(product);
  };

  // Toplam tutarı hesapla
  const totalAmount = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="cart">
      <h2>Sepet</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}{" "}
            <button onClick={() => handleRemoveFromCart(product)}>
              Ürünü Kaldır
            </button>
          </li>
        ))}
      </ul>
      <h3>Toplam Tutar: ${totalAmount}</h3>
    </div>
  );
}

export default Cart;
