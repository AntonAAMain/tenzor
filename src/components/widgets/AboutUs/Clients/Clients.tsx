"use client";

import { ImageWrapper } from "@/components/ui/ImageWrapper/ImageWrapper";
import { imgPrefix } from "@/shared/const";
import { useState } from "react";
import cn from "classnames";

import cls from "./Clients.module.scss";

const slidesPoints = [0, -240, -490, -720, -760, -1100, -1360, -1700];

export const Clients = () => {
  const path1 = `${imgPrefix}/images/about/clients/1.svg`;
  const path2 = `${imgPrefix}/images/about/clients/2.svg`;
  const path3 = `${imgPrefix}/images/about/clients/3.svg`;
  const path4 = `${imgPrefix}/images/about/clients/4.svg`;
  const path5 = `${imgPrefix}/images/about/clients/5.svg`;

  const [slide, setSlide] = useState<number>(0);

  const nextSlide = () => setSlide((prev) => prev + 1);
  const pastSlide = () => setSlide((prev) => prev - 1);

  return (
    <div className={cls.container}>
      <h2 className={cn(cls.title, "static")}>Наши клиенты</h2>

      <div
        onClick={pastSlide}
        className={cn(
          cls.swiper,
          { [cls.swiper_disabled]: slide === 0 },
          cls.swiperLeft
        )}
      >
        <ImageWrapper
          className={cls.swiperArrow}
          src={`${imgPrefix}/images/common/arrow.svg`}
        />
      </div>

      <div
        onClick={nextSlide}
        className={cn(
          cls.swiper,
          { [cls.swiper_disabled]: slide === 3 },
          cls.swiperRight
        )}
      >
        <ImageWrapper
          className={cn(cls.swiperArrow, cls.swiperArrow_rotated)}
          src={`${imgPrefix}/images/common/arrow.svg`}
        />
      </div>
      <div className={cls.sliderWrapper}>
        <div
          style={{
            transform: `translateX(${slidesPoints[slide]}px)`,
          }}
          className={cls.slider}
        >
          <ImageWrapper className={cls.slide1} src={path1} />
          <ImageWrapper className={cls.slide2} src={path2} />
          <ImageWrapper className={cls.slide3} src={path3} />
          <ImageWrapper className={cls.slide4} src={path4} />
          <ImageWrapper className={cls.slide5} src={path5} />
          <ImageWrapper className={cls.slide1} src={path1} />
          <ImageWrapper className={cls.slide2} src={path2} />
          <ImageWrapper className={cls.slide3} src={path3} />
        </div>
      </div>
    </div>
  );
};
