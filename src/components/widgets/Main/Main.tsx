import { imgPrefix } from "@/shared/const";
import cls from "./Main.module.scss";
import Image from "next/image";
import { Header } from "../layout/Header/Header";
import { Body } from "./Body/Body";
import { Statistic } from "./Statistic/Statistic";
import { ImageWrapper } from "@/components/ui/ImageWrapper/ImageWrapper";

export const Main = () => {
  return (
    <div className={cls.container}>
      <Header />
      <Body />
      <Statistic />

      <img
        className={cls.centerImg}
        src={`${imgPrefix}/images/main/center.webp`}
        alt=""
      />

      <ImageWrapper
        className={cls.play}
        src={`${imgPrefix}/images/main/play.svg`}
      />
    </div>
  );
};
