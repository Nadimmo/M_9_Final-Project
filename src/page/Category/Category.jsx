import {  Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import "./style.css";
import image1 from "../../assets/home/slide1.jpg";
import image2 from "../../assets/home/slide2.jpg";
import image3 from "../../assets/home/slide3.jpg";
import image4 from "../../assets/home/slide4.jpg";
import image5 from "../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <div className="lg:mt-[150px]">
      <div className="mx-auto text-center">
        <p className="xl italic text-orange-400">- - -Form 11:00am to 10:00am- - -</p>
        <hr className="w-[300px] text-center mx-auto my-2" />
        <h3 className="text-4xl uppercase mt-2">order online</h3>
        <hr className="w-[300px] text-center mx-auto my-2 border-5"/>

      </div>
      <br /><br />

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={image1} alt="" className="relative"/>
            <p className="text-2xl font-mono  text-white absolute mt-[300px]">Salads</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt="" className="relative"/>
            <p className="text-2xl font-mono text-white  absolute mt-[300px]">Pizza</p>

          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} alt="" className=" relative"/>
            <p className="text-2xl font-mono  text-white absolute mt-[300px]">Soups</p>

          </SwiperSlide>
          <SwiperSlide>
            <img src={image4} alt="" className=" relative"/>
            <p className="text-2xl font-mono text-white absolute mt-[300px]">Cake</p>

          </SwiperSlide>
          <SwiperSlide>
            <img src={image5} alt="" className=" relative"/>
            <p className="text-2xl font-mono text-white  absolute mt-[300px]">Salads</p>

          </SwiperSlide>
        </Swiper>
        <br /><br />
    </div>
  );
};

export default Category;
