"use client";

import { Info } from "./Info/Info";

import cls from "./AboutUs.module.scss";
import { Clients } from "./Clients/Clients";
import { Reviews } from "./Reviews/Reviews";

export const AboutUs = () => {
  return (
    <div className={cls.container}>
      <Info />
      <Clients />
      <Reviews />
    </div>
  );
};
