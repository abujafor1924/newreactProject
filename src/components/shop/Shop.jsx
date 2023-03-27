import React, { useEffect, useState } from "react";
import Product from "../product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
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
          ></Product>
        ))}
      </div>
      <div className="p-4 w-2/5">
        <h1 className="text-2xl font-normal">Order Summary</h1>
      </div>
    </div>
  );
};

export default Shop;
