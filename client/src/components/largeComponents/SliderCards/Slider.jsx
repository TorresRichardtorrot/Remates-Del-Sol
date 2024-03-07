import {} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './style.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide> <img src="/forcard.jpg" alt="render" loading='lazy' /></SwiperSlide>
        <SwiperSlide> <img src="/forcard.jpg" alt="render" loading='lazy' /></SwiperSlide>
        <SwiperSlide> <img src="/forcard.jpg" alt="render" loading='lazy' /></SwiperSlide>
        <SwiperSlide> <img src="/forcard.jpg" alt="render" loading='lazy' /></SwiperSlide>
        <SwiperSlide> <img src="/forcard.jpg" alt="render" loading='lazy' /></SwiperSlide>
        <SwiperSlide> <img src="/forcard.jpg" alt="render" loading='lazy' /></SwiperSlide>
        <SwiperSlide> <img src="/forcard.jpg" alt="render" loading='lazy' /></SwiperSlide>
        <SwiperSlide> <img src="/forcard.jpg" alt="render" loading='lazy' /></SwiperSlide>
        <SwiperSlide> <img src="/forcard.jpg" alt="render" loading='lazy' /></SwiperSlide>
        <SwiperSlide> <img src="/forcard.jpg" alt="render" loading='lazy' /></SwiperSlide>
        <SwiperSlide> <img src="/forcard.jpg" alt="render" loading='lazy' /></SwiperSlide>
      </Swiper>
    </>
  );
}
