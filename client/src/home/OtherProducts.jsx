import React, { useEffect, useState } from "react";
import ProductCards from "../components/ProductCards";
import {Circles} from 'react-loading-icons';

const OtherProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_LocalHost}/all-products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(0, 6));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  return (
    <div>
        {loading ? (
        // Show a loading spinner or message while fetching data
        <div className="flex items-center justify-center">
    
          <Circles stroke="#000" strokeOpacity={1} speed={.75} className="mr-5"/>
          Loading...        
          </div>
          
      ) : (
        // Render the product cards when data is available
        <ProductCards products={products} headline="" />
      )}
    </div>
  );
};

export default OtherProducts;
