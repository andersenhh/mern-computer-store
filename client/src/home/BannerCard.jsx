import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules

import { EffectCoverflow, Pagination } from 'swiper/modules';

const BannerCard = () => {
  return (
    <div className='banner'> 
         <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://c1.neweggimages.com/ProductImage/83-151-298-08.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://c1.neweggimages.com/ProductImageCompressAll1280/24-475-306-30.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://c1.neweggimages.com/ProductImageCompressAll1280/14-930-105-10.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://c1.neweggimages.com/ProductImageCompressAll1280/19-113-791-03.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://c1.neweggimages.com/ProductImageCompressAll1280/13-119-597-V01.jpg" />
        </SwiperSlide>
      </Swiper>
      </div>
  )
}

export default BannerCard