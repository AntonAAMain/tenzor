import cn from "classnames";

import cls from "./Button.module.scss";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?:
    | "outlined-dark-1"
    | "outlined-dark-2"
    | "outlined-orange"
    | "outlined-orange-light";
}

export const Button = ({ variant, ...props }: Props) => {
  return (
    <button
      className={cn(
        cls.container,
        {
          [cls["outlined-dark-1"]]: variant === "outlined-dark-1",
          [cls["outlined-dark-2"]]: variant === "outlined-dark-2",
          [cls["outlined-orange"]]: variant === "outlined-orange",
          [cls["outlined-orange-light"]]: variant === "outlined-orange-light",
        },
        props.className
      )}
    >
      {props.children}
    </button>
  );
};
