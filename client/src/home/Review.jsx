import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//react icons
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";
import profilePic from "../assets/profile.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {/* RATE */}
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <Avatar img="http://m.gettywallpapers.com/wp-content/uploads/2023/06/Beautiful-Anime-Girl-Profile-Pic.jpg" alt="" rounded className="w-10" />
            <h5 className="text-lg font-medium">John Doe</h5>
            <p className="text-base">CEO, X Company</p>
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2 mt-3">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* {text} */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur eos inventore, accusantium similique sit cum molestias
                  iusto quae amet officia aut expedita saepe ab, ad quibusdam
                  dolor voluptas repellat. Recusandae!
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* RATE */}
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <Avatar img="http://m.gettywallpapers.com/wp-content/uploads/2023/06/Beautiful-Anime-Girl-DP-For-Facebook.jpg" alt="" rounded className="w-10" />
            <h5 className="text-lg font-medium">Mark</h5>
            <p className="text-base">CEO, ABC Company</p>
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2 mt-3">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* {text} */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur eos inventore, accusantium similique sit cum molestias
                  iusto quae amet officia aut expedita saepe ab, ad quibusdam
                  dolor voluptas repellat. Recusandae!
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* RATE */}

          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <Avatar img="https://pic.onlinewebfonts.com/thumbnails/icons_76927.svg" alt="" rounded className="w-10" />
            <h5 className="text-lg font-medium">Mark</h5>
            <p className="text-base">CEO, ABC Company</p>
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2 mt-3">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* {text} */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur eos inventore, accusantium similique sit cum molestias
                  iusto quae amet officia aut expedita saepe ab, ad quibusdam
                  dolor voluptas repellat. Recusandae!
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* RATE */}
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <Avatar img="https://pic.onlinewebfonts.com/thumbnails/icons_76927.svg" alt="" rounded className="w-10" />
            <h5 className="text-lg font-medium">Mark</h5>
            <p className="text-base">CEO, ABC Company</p>
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2 mt-3">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* {text} */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur eos inventore, accusantium similique sit cum molestias
                  iusto quae amet officia aut expedita saepe ab, ad quibusdam
                  dolor voluptas repellat. Recusandae!
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* RATE */}

          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <Avatar img="https://pic.onlinewebfonts.com/thumbnails/icons_76927.svg" alt="" rounded className="w-10" />
            <h5 className="text-lg font-medium">Mark</h5>
            <p className="text-base">CEO, ABC Company</p>
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2 mt-3">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* {text} */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur eos inventore, accusantium similique sit cum molestias
                  iusto quae amet officia aut expedita saepe ab, ad quibusdam
                  dolor voluptas repellat. Recusandae!
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* RATE */}

          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <Avatar img="https://pic.onlinewebfonts.com/thumbnails/icons_76927.svg" alt="" rounded className="w-10" />
            <h5 className="text-lg font-medium">Mark</h5>
            <p className="text-base">CEO, ABC Company</p>
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2 mt-3">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* {text} */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur eos inventore, accusantium similique sit cum molestias
                  iusto quae amet officia aut expedita saepe ab, ad quibusdam
                  dolor voluptas repellat. Recusandae!
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* RATE */}

          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <Avatar img="https://pic.onlinewebfonts.com/thumbnails/icons_76927.svg" alt="" rounded className="w-10" />
            <h5 className="text-lg font-medium">Mark</h5>
            <p className="text-base">CEO, ABC Company</p>
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2 mt-3">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* {text} */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur eos inventore, accusantium similique sit cum molestias
                  iusto quae amet officia aut expedita saepe ab, ad quibusdam
                  dolor voluptas repellat. Recusandae!
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
