import cn from "classnames";

import cls from "./ImageWrapper.module.scss";

interface Props {
  className?: string;
  src: string;
  alt?: string;
  style?: object;
}

export const ImageWrapper = ({ src, alt, style, className }: Props) => {
  return (
    <div style={style} className={cn(cls.container, className)}>
      <img
        loading="lazy"
        className={cn(cls.img)}
        src={src}
        alt={alt ? alt : ""}
      />
    </div>
  );
};
