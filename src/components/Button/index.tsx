import React from "react";

const shapes = { circle: "rounded-[50%]", round: "rounded-md" } as const;
const variants = {
  fill: {
    white_A700: "bg-white-A700",
    light_blue_100: "bg-light_blue-100 text-black-900",
    red_200: "bg-red-200 text-black-900",
    green_A100: "bg-green-A100 text-black-900",
    blue_A700: "bg-blue-A700 text-white-A700",
  },
  outline: { blue_A700: "border border-blue-A700 border-solid text-blue-A700" },
} as const;
const sizes = { xs: "p-1", sm: "p-3.5", md: "p-[17px]" } as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
