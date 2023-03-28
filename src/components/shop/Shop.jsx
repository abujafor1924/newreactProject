import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Card/Cart";

import Product from "../product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    // console.log("products", products);
    const storeCard = getShoppingCart();
    const addCart = [];
    for (const id in storeCard) {
      // console.log(id);
      const saveProduct = products.find((product) => product.id === id);
      if (saveProduct) {
        const quantity = storeCard[id];
        saveProduct.quantity = quantity;
        addCart.push(saveProduct);
      }
      // console.log(saveProduct);
    }
    setCard(addCart);
  }, [products]);

  const handalEvent = (product) => {
    const newCard = [...card, product];
    setCard(newCard);
    addToDb(product.id);
  };
  return (
    <div className="flex justify-between">
      {/* <h1 className="text-2xl font-normal">
        product coming Hear : {products.length}
      </h1> */}
      <div className="grid grid-cols-3 gap-2 w-full m-4">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            className="grid grid-cols-3"
            handalEvent={handalEvent}
          ></Product>
        ))}
      </div>
      <div className="p-4 w-2/6">
        <Cart cart={card}></Cart>
      </div>
    </div>
  );
};

export default Shop;
