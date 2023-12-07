import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

import { FaCartShopping } from 'react-icons/fa6'

const ProductCards = ({headline, products}) => {

  return (
    <div className='my-16 px-4 lg:px-24'>
        <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>

        {/* {cards} */} 
        <div className='mt-12'>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
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
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >

        {
            products.map(product => <SwiperSlide key={product._id}>
                <Link to={`/product/${product._id}`}>
                    <div className='relative'>
                        <img src={product.imageURL} alt="" />
                        <div className=' absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>
                            <FaCartShopping className='w-4 h-4 text-white'/>
                        </div>
                    </div>
                    <div>
                        <div>
                        <h3>{product.name}</h3>
                       
                        </div>
                        <p>{product.price}</p>
                    </div>
                </Link>
            </SwiperSlide> )
        }
    
      </Swiper>
        </div>
    </div>
  )
}

export default ProductCards