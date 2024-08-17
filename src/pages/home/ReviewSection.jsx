import { useEffect, useRef, useState } from "react";
import SectionHeader from "../../components/SectionHeader";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import ReviewCard from "../../components/card/ReviewCard";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get("/data/reviewData.json")
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // swiper next and previous button by useRef

  const swiperRef = useRef();

  return (
    <section>
      <SectionHeader title={"People Thought"} />
      <div className=" w-10/12 mx-auto mt-10 relative ">
        <div className="flex justify-between absolute top-36 translate-y-1/2 z-10 w-full">
          <button
            onClick={() => swiperRef.current.slidePrev()}
            className="p-3 rounded-full hover:bg-orange-400 hover:text-black border-1 -translate-x-20"
          >
            <GrLinkPrevious className="text-2xl font-bold" />
          </button>
          <button
            onClick={() => swiperRef.current.slideNext()}
            className="p-3 rounded-full hover:bg-orange-400 hover:text-black border-1 translate-x-20"
          >
            <GrLinkNext className="text-2xl font-bold" />
          </button>
        </div>
        <>
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation, Autoplay, A11y]}
            className="mySwiper px-10"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </section>
  );
};

export default ReviewSection;
