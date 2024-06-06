import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("./reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  //   console.log(reviews);

  return (
    <div className="mt-24">
      <div className="mx-auto text-center">
        <p className="xl italic text-orange-400">
          - - -What our Clients say - -
        </p>
        <hr className="w-[300px] text-center mx-auto my-2" />
        <h3 className="text-4xl uppercase mt-2">TESTIMONIALS</h3>
        <hr className="w-[300px] text-center mx-auto my-2 border-5" />
      </div>
      <div className="mt-10">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="w-[80%]">
                  <Rating style={{ maxWidth: 180 , margin: "auto"}} value={review.rating} readOnly />

                <RiDoubleQuotesL className="mx-auto text-6xl mt-2" />
                <span className="text-sm mt-2">{review.details}</span>
                <h3 className="text-4xl mt-2 text-orange-300">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
