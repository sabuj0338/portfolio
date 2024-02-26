import React, { ReactNode, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { type Swiper as SwiperRef } from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ArrowNextIconButton from "../icons/ArrowNextIconButton";
import ArrowPrevIconButton from "../icons/ArrowPrevIconButton";

type Props = {
  children: ReactNode;
  arrow?: boolean;
  // images: string[];
};

export default function PhotoGallerySlider({ children, arrow }: Props) {
  const swiperRef = useRef<SwiperRef>();

  return (
    <div className="relative aspect-[16/9]">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay={{
          // delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{ clickable: true }}
        // loop={true}
        // navigation={{
        //   prevEl: ".mui-arrow-icon-button-prev",
        //   nextEl: ".mui-arrow-icon-button-next",
        // }}
        modules={[Pagination, Navigation, Autoplay]}
        // onSwiper={it => (sliderRef.current = it)}
      >
        {React.Children.map(children, (child) => (
          <SwiperSlide>{child}</SwiperSlide>
        ))}
      </Swiper>
      {arrow && (
        <>
          <div className="h-full absolute top-0 left-0 flex flex-col justify-center items-center z-20">
            <ArrowPrevIconButton
              onClick={() => swiperRef.current?.slidePrev()}
            />
          </div>

          <div className="h-full absolute top-0 right-0 flex flex-col justify-center items-center z-20">
            <ArrowNextIconButton
              onClick={() => swiperRef.current?.slideNext()}
            />
          </div>
        </>
      )}
    </div>
  );
}
