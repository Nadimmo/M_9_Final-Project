import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import Title from "../Title/Title";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://resturent-server-side-psi.vercel.app/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  //   console.log(reviews);

  return (
    <div className="mt-24">
      <Title title={"What our Clients say"} short={"TESTIMONIALS"}></Title>
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
