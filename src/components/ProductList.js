import React, { useContext } from "react";
import ProductItem from "./ProductItem";

function ProductList({ products }) {
  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <ProductItem key={product.id} name={product.name} />
      ))}
    </div>
  );
}

export default ProductList;
