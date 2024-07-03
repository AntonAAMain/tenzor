import { imgPrefix } from "@/shared/const";

import cls from "./Header.module.scss";

const items = ["О нас", "Каталог", "Отзывы", "Оплата и доставка", "Контакты"];

export const Header = () => {
  return (
    <header className={cls.container}>
      <div className={cls.item}>{items[0]}</div>
      <div className={cls.divider}></div>
      <div className={cls.item}>{items[1]}</div>
      <div className={cls.divider}></div>
      <div className={cls.item}>{items[2]}</div>

      <img
        className={cls.struga}
        src={`${imgPrefix}/images/layout/header/struga.svg`}
        alt=""
      />

      <div className={cls.item}>{items[3]}</div>
      <div className={cls.divider}></div>
      <div className={cls.item}>{items[4]}</div>
    </header>
  );
};
