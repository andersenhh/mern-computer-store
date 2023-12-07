import React from "react";
import BannerCard from "../home/BannerCard.jsx";

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-white flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-8 py-40">
        {/* {left side} */}

        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-7xl font-bold leading-snug text-black">
            Computer Store{" "}
            <span className="text-blue-700">Find What You Need</span>
          </h2>
          <p className="md:w-4/5 font-semibold">
            Discover a vast array of high-quality products meticulously curated
            to cater to all your computing needs. Whether you're a tech
            enthusiast, a professional seeking powerful computing solutions, or
            a casual user in search of reliable devices, our e-commerce platform
            has something for everyone.
          </p>
          {/* <div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search A Product"
              className="py-2 px-2 rounded-s-sm outline-none mr-3 rounded"
            />
            <button className="bg-blue-700 px-5 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded">Search</button>
          </div> */}
        </div>
        {/* {right side} */}

        <div className="w-4/12">
          <BannerCard></BannerCard>
        </div>
      </div>
    </div>
  );
};

export default Banner;
