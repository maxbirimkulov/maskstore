import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import "./Messages.css";
import img from "../../../assets/images/messages/image 2.png"




const Messages = () => {

    return (
        <div className='message container'>
            <h2 className='message__title'>Благодарственные письма</h2>
            <p className='message__subtitle'>О нас говорят только хорошее</p>
            <Swiper
                slidesPerView={3}
                spaceBetween={40}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img className="message__img" src={img} alt="img"/></SwiperSlide>
                <SwiperSlide><img className="message__img" src={img} alt="img"/></SwiperSlide>
                <SwiperSlide><img className="message__img" src={img} alt="img"/></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Messages;