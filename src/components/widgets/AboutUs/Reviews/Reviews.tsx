import cn from "classnames";

import cls from "./Reviews.module.scss";
import { Review } from "./Review/Review";
import { SwiperButton } from "@/components/ui/SwiperButton/SwiperButton";
import { useState } from "react";
import { Button } from "@/components/ui/Button/Button";

const slidesPoints = [0, -430, -870];

const users = [
  {
    body: "Будем лаконичны — мы довольны совместными результатами с компанией Struga.pro и собираемся дальше продолжить нашу продуктивную работу.",
    userPosition: "Директор Music Hall",
    userName: "Иванов Иван",
  },

  {
    body: "Будем лаконичны — мы довольны совместными результатами с компанией Struga.pro.",
    userPosition: 'Владелец "Сыровар Ловков"',
    userName: "Алексей Ловков",
  },

  {
    body: "Будем лаконичны — мы довольны совместными результатами с компанией Struga.pro и собираемся дальше продолжить нашу продуктивную работу.",
    userPosition: 'Владелец "Elio Pizza"',
    userName: "Сергей Сергеев",
  },

  {
    body: "Будем лаконичны — мы довольны совместными результатами с компанией Struga.pro и собираемся дальше продолжить нашу продуктивную работу.",
    userPosition: 'Владелец "Elio Pizza"',
    userName: "Сергей Сергеев 2",
  },
];

export const Reviews = () => {
  const [slide, setSlide] = useState<number>(0);

  const nextSlide = () => setSlide((prev) => prev + 1);
  const pastSlide = () => setSlide((prev) => prev - 1);

  return (
    <div className={cls.container}>
      <h2 className={cn(cls.title, "static")}>Отзывы</h2>

      <SwiperButton
        className={cls.leftSwiper}
        isActive={slide !== 0}
        onClick={pastSlide}
        position="left"
      />

      <div className={cls.listWrapper}>
        <div
          style={{
            transform: `translateX(${slidesPoints[slide]}px)`,
          }}
          className={cls.list}
        >
          {users.map((user) => (
            <Review
              key={user.userPosition}
              body={user.body}
              userPosition={user.userPosition}
              userName={user.userName}
            />
          ))}
        </div>
      </div>

      <SwiperButton
        className={cls.rightSwiper}
        isActive={slide !== 1}
        onClick={nextSlide}
        position="right"
      />

      <Button variant="outlined-orange-light" className={cls.reviewButton}>
        Оставить отзыв
      </Button>
    </div>
  );
};
