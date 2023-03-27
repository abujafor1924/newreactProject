import React from "react";

const Cart = ({ cart }) => {
  console.log(cart);
  let totalPrice = 0;
  let shipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    shipping = shipping + product.shipping;
  }
  const tex = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + shipping + tex;
  return (
    <div className="text-2xl font-medium bg-red-200 px-4 py-8 sticky top-0 ">
      <h1 className="text-2xl font-normal">Order Summary</h1>
      <p>selected item : {cart.length}</p>
      <p>Total Price : ${totalPrice} </p>
      <p>Total Shipping : ${shipping}</p>
      <p>Tex : ${tex.toFixed(2)}</p>
      <h3>Grand Total :${grandTotal.toFixed(2)} </h3>
    </div>
  );
};

export default Cart;
