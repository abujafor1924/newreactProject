import React from "react";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <div className="w-full h-24 bg-slate-800 flex justify-between p-4 ">
      <img src={logo} />
      <div className="text-3xl space-x-4 mx-8 font-medium text-slate-100 align-middle  mt-4">
        <a href="/shop">shop</a>
        <a href="/order">order</a>
        <a href="/inventory">inventory</a>
        <a href="/login">login</a>
      </div>
    </div>
  );
};

export default Header;
