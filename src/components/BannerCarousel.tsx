import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";

const BannerCarousel = () => {

  const images: string[] = [
    "/banner1.jpg",
    "/banner2.jpg",
    "/banner3.jpg",
  ];

  return (

    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      loop={true}
      slidesPerView={1}
    >

      {images.map((img, index) => (

        <SwiperSlide key={index}>

          <img
            src={img}
            alt={`banner-${index}`}
            className="w-full h-[300px] object-cover rounded-xl"
          />

        </SwiperSlide>

      ))}

    </Swiper>

  );
};

export default BannerCarousel;