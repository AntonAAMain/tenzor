import { ImageWrapper } from "@/components/ui/ImageWrapper/ImageWrapper";
import cn from "classnames";

import cls from "./CatalogItem.module.scss";

interface Props {
  className: string;
  photo: string;
}

export const CatalogItem = ({ photo, className }: Props) => {
  return (
    <div className={cn(cls.container, className)}>
      <ImageWrapper className={cn(className)} src={photo} />
    </div>
  );
};
