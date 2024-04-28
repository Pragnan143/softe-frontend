import React from "react";
import Card from "./Card.js";

const Products = () => {
  return (
    <div className="bg-gray-500 h-screen  flex-col justify-center ">
      <div className="h-24 text-2xl font-medium flex-col justify-center ">
        <h1> Learn What salesforce products can do for you . </h1>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
};


export default Products;
