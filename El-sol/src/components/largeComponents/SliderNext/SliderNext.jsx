/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import { Pagination, Navigation } from 'swiper/modules';

export default function SliderNext() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/src/assets/car.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/src/assets/car.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/src/assets/car.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/src/assets/car.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/src/assets/car.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/src/assets/car.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/src/assets/car.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/src/assets/car.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/src/assets/car.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/src/assets/car.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/src/assets/car.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/src/assets/car.webp" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
