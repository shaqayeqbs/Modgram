import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css";

export default () => {
  const data = [
    {
      id: 1,
      image: "/images/sarmo.jpg",
      username: "sarmo_scarf",
      follower: "30k",
    },
    {
      id: 2,
      image: "/images/sarmo.jpg",
      username: "sarmo_scarf",
      follower: "30k",
    },
    {
      id: 3,
      image: "/images/sarmo.jpg",
      username: "sarmo_scarf",
      follower: "30k",
    },
    {
      id: 4,
      image: "/images/sarmo.jpg",
      username: "sarmo_scarf",
      follower: "30k",
    },
    {
      id: 5,
      image: "/images/sarmo.jpg",
      username: "sarmo_scarf",
      follower: "30k",
    },
  ];
  return (
    <div className="container">
      {" "}
      <Swiper
        breakpoints={{
          700: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          800: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
        spaceBetween={0}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="!py-10"
      >
        <div className="">
          {data.map((item) => (
            <SwiperSlide key={item.id} className="bg-red-600 text-center">
              Slide 1
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};
