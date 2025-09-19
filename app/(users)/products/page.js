import React from "react";

const Products = async (props) => {
  const name = await props.searchParams;
  console.log(name);

  return <div>Products</div>;
};

export default Products;
