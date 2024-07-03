import { ImageWrapper } from "../ImageWrapper/ImageWrapper";
import cn from "classnames";

import cls from "./SwiperButton.module.scss";
import { imgPrefix } from "@/shared/const";

interface Props {
  className?: string;
  isActive: boolean;
  onClick: () => void;
  position: "left" | "right";
}

export const SwiperButton = ({
  className,
  isActive,
  onClick,
  position,
}: Props) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        cls.swiper,
        { [cls.swiper_disabled]: !isActive },
        className
      )}
    >
      <ImageWrapper
        className={cn(cls.swiperArrow, {
          [cls.swiperArrow_rotated]: position === "right",
        })}
        src={`${imgPrefix}/images/common/arrow.svg`}
      />
    </div>
  );
};
