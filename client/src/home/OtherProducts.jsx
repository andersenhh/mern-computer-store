import React, { useEffect, useState } from "react";
import ProductCards from "../components/ProductCards";

const OtherProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_LocalHost}/all-products`)
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 6)));
  }, []);
  return (
    <div>
      <ProductCards products={products} headline="" />
    </div>
  );
};

export default OtherProducts;
