import "./styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Img } from "@chakra-ui/react";

type CarouselProps = {
  images: string[];
  src: string;
};

export function Carousel({ images, src }: CarouselProps) {
  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <Img
            src={`${src}img${index + 1}.jpg`}
            alt={img}
            objectFit="cover"
            w="100%"
            h="100%"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
