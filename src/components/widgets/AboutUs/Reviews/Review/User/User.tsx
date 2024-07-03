import { ImageWrapper } from "@/components/ui/ImageWrapper/ImageWrapper";
import cls from "./User.module.scss";

interface Props {
  name: string;
  position: string;
  photo: string;
}

export const User = ({ name, photo, position }: Props) => {
  return (
    <div className={cls.container}>
      <ImageWrapper className={cls.photo} src={photo} />

      <div className={cls.info}>
        <div className={cls.name}>{name}</div>
        <div className={cls.position}>{position}</div>
      </div>
    </div>
  );
};
