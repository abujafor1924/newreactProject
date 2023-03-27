import React from "react";

const Product = (props) => {
  const { img, name, price, category, quantity } = props.product;
  // console.log(props.product);

  return (
    <div className="product">
      <div className=" w-80 bg-slate-100 shadow-xl h-full">
        <figure className="">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Category : {category}</p>
          <p>Price : ${price}</p>
          <div className="bg-blue-700 w-full p-4 rounded">
            <button className="text-xl font-medium text-slate-50">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;