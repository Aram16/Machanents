import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import image from '../../assets/logo/Image.png'
import activity from '../../assets/logo/Activity.png'
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./index.css";


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';
import Cardsmin from "./cardsmin";

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);


export default function EventCard() {
  
  return (
    <>
        <div className="cards-min">
            <Cardsmin />
        </div>
        <div className="cards-none">
        <Swiper
            slidesPerView={3} 
            spaceBetween={30} 
            slidesPerGroup={3} 
            loop={true} 
            loopFillGroupWithBlank={true} 
            pagination={{
                "clickable": true
            }} 
            navigation={true} 
            className="mySwiper"
        >
            <div className="root">
                <SwiperSlide>
                        <div className="root-news">
                            <div className="text-h2">
                                <img src={image} className="img" alt="news-image"/>
                                <h2 className="text-h2">News Event</h2>
                                <h5><img src={activity} />   16.16.16</h5>
                                <span>Praesent quis viverra ligula, vel convallis 
                                        massa. Mauris eget mi sed nulla laoreet 
                                        sollicitudin vitae et lacus. Duis tempus 
                                        eleifend interdum. Aliquam aliquam 
                                        luctus commodo. Donec tempor vel nunc 
                                        at malesuada. Suspendisse potenti.</span>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className="root-news">
                            <div className="text-h2">
                                <img src={image} className="img" alt="news-image"/>
                                <h2 className="text-h2">News Event</h2>
                                <h5><img src={activity} />   17.17.17</h5>
                                <span>Praesent quis viverra ligula, vel convallis 
                                        massa. Mauris eget mi sed nulla laoreet 
                                        sollicitudin vitae et lacus. Duis tempus 
                                        eleifend interdum. Aliquam aliquam 
                                        luctus commodo. Donec tempor vel nunc 
                                        at malesuada. Suspendisse potenti.</span>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className="root-news">
                            <div className="text-h2">
                                <img src={image} className="img" alt="news-image"/>
                                <h2 className="text-h2">News Event</h2>
                                <h5><img src={activity} />   15.15.15</h5>
                                <span>Praesent quis viverra ligula, vel convallis 
                                        massa. Mauris eget mi sed nulla laoreet 
                                        sollicitudin vitae et lacus. Duis tempus 
                                        eleifend interdum. Aliquam aliquam 
                                        luctus commodo. Donec tempor vel nunc 
                                        at malesuada. Suspendisse potenti.</span>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className="root-news">
                            <div className="text-h2">
                                <img src={image} className="img" alt="news-image"/>
                                <h2 className="text-h2">News Event</h2>
                                <h5><img src={activity} />   15.15.15</h5>
                                <span>Praesent quis viverra ligula, vel convallis 
                                        massa. Mauris eget mi sed nulla laoreet 
                                        sollicitudin vitae et lacus. Duis tempus 
                                        eleifend interdum. Aliquam aliquam 
                                        luctus commodo. Donec tempor vel nunc 
                                        at malesuada. Suspendisse potenti.</span>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className="root-news">
                            <div className="text-h2">
                                <img src={image} className="img" alt="news-image"/>
                                <h2 className="text-h2">News Event</h2>
                                <h5><img src={activity} />   15.15.15</h5>
                                <span>Praesent quis viverra ligula, vel convallis 
                                        massa. Mauris eget mi sed nulla laoreet 
                                        sollicitudin vitae et lacus. Duis tempus 
                                        eleifend interdum. Aliquam aliquam 
                                        luctus commodo. Donec tempor vel nunc 
                                        at malesuada. Suspendisse potenti.</span>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className="root-news">
                            <div className="text-h2">
                                <img src={image} className="img" alt="news-image"/>
                                <h2 className="text-h2">News Event</h2>
                                <h5><img src={activity} />   15.15.15</h5>
                                <span>Praesent quis viverra ligula, vel convallis 
                                        massa. Mauris eget mi sed nulla laoreet 
                                        sollicitudin vitae et lacus. Duis tempus 
                                        eleifend interdum. Aliquam aliquam 
                                        luctus commodo. Donec tempor vel nunc 
                                        at malesuada. Suspendisse potenti.</span>
                            </div>
                        </div>
                </SwiperSlide>
            </div>
            
            
        </Swiper>
        </div>
    </>
  )
}