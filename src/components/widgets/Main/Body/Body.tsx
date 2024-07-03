import { ImageWrapper } from "@/components/ui/ImageWrapper/ImageWrapper";
import { Button } from "@/components/ui/Button/Button";
import { imgPrefix } from "@/shared/const";
import cn from "classnames";

import cls from "./Body.module.scss";

export const Body = () => {
  const title = "Изделия из дерева на заказ с доставкой по России";

  const description =
    "Cтиль и уют деревянных аксессуаров в ваш дом, ресторан или кафе";

  return (
    <div className={cls.container}>
      <h1 className={cn(cls.title, "static")}>{title}</h1>

      <div className={cn(cls.description, "static")}>{description}</div>

      <Button className={cls.catalogButton} variant="outlined-orange-light">
        Перейти в каталог
      </Button>
    </div>
  );
};
