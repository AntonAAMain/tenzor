import cn from "classnames";

import cls from "./Rating.module.scss";
import { ImageWrapper } from "@/components/ui/ImageWrapper/ImageWrapper";
import { imgPrefix } from "@/shared/const";

interface Props {
  starsCount: number;
  className?: string;
}

export const Rating = ({ starsCount, className }: Props) => {
  return (
    <div className={cn(cls.container, "static", className)}>
      {Array(starsCount)
        .fill(1)
        .map((star, index) => (
          <ImageWrapper
            className={cls.star}
            key={index}
            src={`${imgPrefix}/images/common/star.svg`}
          />
        ))}
    </div>
  );
};
