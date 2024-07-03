import { CatalogItem } from "./CatalogItem/CatalogItem";
import { Button } from "@/components/ui/Button/Button";
import { imgPrefix } from "@/shared/const";
import cn from "classnames";

import cls from "./Catalog.module.scss";

export const Catalog = () => {
  const top = `${imgPrefix}/images/catalog/top/top.webp`;

  const dividedTopLeft = `${imgPrefix}/images/catalog/divided/top-left.webp`;
  const dividedTopRight = `${imgPrefix}/images/catalog/divided/top-right.webp`;
  const dividedBottomLeft = `${imgPrefix}/images/catalog/divided/bottom-left.webp`;
  const dividedBbottomRight = `${imgPrefix}/images/catalog/divided/bottom-right.webp`;

  const bottomLeft = `${imgPrefix}/images/catalog/bottom/left.webp`;
  const bottomRight = `${imgPrefix}/images/catalog/bottom/right.webp`;

  return (
    <section className={cls.container}>
      <h2 className={cn(cls.title, "static")}>Каталог</h2>
      <div className={cn(cls.description, "static")}>
        Мы любим дерево, для нас важны детали, ценим профессиональный подход.
        Наши изделия изготовлены из отборной древесины и обработаны натуральными
        материалами. Мы гарантируем долговечность произведений мастерской.
      </div>

      <div className={cls.body}>
        <div className={cls.bodyTop}>
          <CatalogItem photo={top} className={cls.topImg} />
          <div className={cls.bodyDivided}>
            <CatalogItem photo={dividedTopLeft} className={cls.dividedImg} />
            <CatalogItem photo={dividedTopRight} className={cls.dividedImg} />
            <CatalogItem photo={dividedBottomLeft} className={cls.dividedImg} />
            <CatalogItem
              photo={dividedBbottomRight}
              className={cls.dividedImg}
            />
          </div>
        </div>

        <div className={cls.bodyBottom}>
          <CatalogItem className={cls.bodyBottomLeftImg} photo={bottomLeft} />
          <CatalogItem className={cls.bodyBottomRightImg} photo={bottomRight} />
        </div>
      </div>

      <Button variant="outlined-dark-1" className={cls.catalogButton}>
        Смотреть весь каталог
      </Button>
    </section>
  );
};
