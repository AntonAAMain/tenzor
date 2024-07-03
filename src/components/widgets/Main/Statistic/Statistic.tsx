import cn from "classnames";

import cls from "./Statistic.module.scss";

const elements = [
  { value: 14, text: "Лет опыта" },
  { value: 12000, text: "Изделий изготовлено" },
  { value: "700+", text: "Довольных клиентов" },
  { value: "4.95", text: "Средний рейтинг заказов" },
];

export const Statistic = () => {
  return (
    <div className={cn(cls.container, "static")}>
      {elements.map((element) => (
        <div key={element.text} className={cls.element}>
          <div className={cls.elementValue}>{element.value}</div>
          <div className={cls.elementText}>{element.text}</div>
        </div>
      ))}
    </div>
  );
};
