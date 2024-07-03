import { ImageWrapper } from "@/components/ui/ImageWrapper/ImageWrapper";
import { imgPrefix } from "@/shared/const";
import cn from "classnames";

import cls from "./Info.module.scss";

export const Info = () => {
  const topImg = `${imgPrefix}/images/about/1.webp`;
  const bottomImg = `${imgPrefix}/images/about/2.webp`;

  return (
    <div className={cls.container}>
      <h2 className={cn(cls.title, "static")}>О нашей мастерской</h2>

      <div className={cls.body}>
        <div className={cls.text}>
          <div className={cls.description}>
            Struga — творческая столярная мастерская, ручное производство
            деревянной посуды и кухонной утвари, предметов декора, элементов
            интерьера и мебели, подарков, сувениров. Для дома и бизнеса. Наши
            изделия изготовлены из отборной, хорошо высушенной древесины твердых
            пород, тщательно отшлифованы и пропитаны натуральными маслами. Мы
            любим дерево, для нас важны детали, ценим профессиональный подход,
            не экономим на материалах и инструментах, поэтому гарантируем
            долговечность произведений мастерской.
          </div>

          <div className={cls.description}>
            История мастерской Struga началась в 2010 году с хобби —
            изготовление оригинальных фоторамок из состаренных сосновых дощечек
            на подарки для друзей. Начиная с 2015 столярная мастерская уже
            становится основным занятием, приносящим заработок. В процессе
            работы и творчества осваивались новые технологии, приемы и
            инструменты.   Пробовали изготавливать разделочные доски, тарелки,
            шкатулки, светильники. Со временем мастерская Struga обзавелась
            своим помещением и серьезным арсеналом станков и инструментов,
            преобразовалась во вполне удачный коммерческий проект с интересными
            работами. 
          </div>
        </div>

        <div className={cls.imgs}>
          <ImageWrapper className={cn(cls.topImg, "static")} src={topImg} />
          <ImageWrapper
            className={cn(cls.bottomImg, "static")}
            src={bottomImg}
          />
        </div>
      </div>
    </div>
  );
};
