import React, { useEffect, useState } from "react";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-3 p-4">
        <h1 className="text-2xl font-normal">
          product coming Hear : {products.length}
        </h1>
      </div>
      <div className="p-4">
        <h1 className="text-2xl font-normal">Order Summary</h1>
      </div>
    </div>
  );
};

export default Shop;
