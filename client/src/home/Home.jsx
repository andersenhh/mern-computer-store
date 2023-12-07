import React from "react";
import Banner from "../components/Banner";
import FavBook from "./FavBook";
import PromoBanner from "./PromoBanner";
import Review from "./Review";
import BestSellerProducts from "./BestSellerProducts";
import OtherProducts from "./OtherProducts";
const Home = () => {
  return (
<div>
    <Banner/>
    {/* <BestSellerProducts/> */}
    {/* <FavBook/>
    <PromoBanner/> */}
    <OtherProducts/>
    <Review/>
  
</div>
  );
};

export default Home;
