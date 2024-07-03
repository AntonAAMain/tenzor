import { imgPrefix } from "@/shared/const";
import { Rating } from "./Rating/Rating";
import { User } from "./User/User";

import cls from "./Review.module.scss";

interface Props {
  body: string;
  userPosition: string;
  userName: string;
}

export const Review = ({ body, userName, userPosition }: Props) => {
  return (
    <div className={cls.container}>
      <Rating starsCount={4} />
      <div className={cls.body}>{body} </div>

      <User
        position={userPosition}
        name={userName}
        photo={`${imgPrefix}/images/common/fake-user.png`}
      />
    </div>
  );
};
