// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomeSlider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay, Navigation, Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
    >
      <SwiperSlide>
        <img src="img/slide (1).jpeg" alt="" className="h-80 w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/slide (2).jpeg" alt="" className="h-80 w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/slide (3).jpeg" alt="" className="h-80 w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="img/slide (1).png" alt="" className="h-80 w-full" />
      </SwiperSlide>
    </Swiper>
  );
};
export default HomeSlider;
