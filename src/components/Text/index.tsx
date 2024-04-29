import React from "react";

const sizeClasses = {
  txtGilroySemiBold24: "font-gilroy font-semibold",
  txtGilroyBold36: "font-bold font-gilroy",
  txtGilroySemiBold16WhiteA700: "font-gilroy font-semibold",
  txtGilroyBold32: "font-bold font-gilroy",
  txtGilroyMedium24: "font-gilroy font-medium",
  txtGilroySemiBold18Red700: "font-gilroy font-semibold",
  txtGilroyRegular18: "font-gilroy font-normal",
  txtGilroySemiBold16Bluegray70001: "font-gilroy font-semibold",
  txtGilroyMedium16Bluegray400: "font-gilroy font-medium",
  txtGilroySemiBold18Bluegray900: "font-gilroy font-semibold",
  txtGilroyMedium16Gray90001: "font-gilroy font-medium",
  txtGilroySemiBold32: "font-gilroy font-semibold",
  txtOpenSansRomanSemiBold16: "font-opensans font-semibold",
  txtGilroySemiBold18Green600: "font-gilroy font-semibold",
  txtGilroyRegular16Bluegray400: "font-gilroy font-normal",
  txtGilroyMedium18BlueA700: "font-gilroy font-medium",
  txtGilroyMedium12: "font-gilroy font-medium",
  txtGilroySemiBold18: "font-gilroy font-semibold",
  txtGilroyMedium18: "font-gilroy font-medium",
  txtInterMedium16: "font-inter font-medium",
  txtGilroySemiBold16: "font-gilroy font-semibold",
  txtGilroyRegular16: "font-gilroy font-normal",
  txtGilroyMedium16: "font-gilroy font-medium",
  txtGilroySemiBold14: "font-gilroy font-semibold",
  txtGilroyRegular14: "font-gilroy font-normal",
  txtGilroyMedium18Bluegray900: "font-gilroy font-medium",
  txtChivoBold50: "font-chivo font-normal",
  txtGilroySemiBold16Bluegray900: "font-gilroy font-semibold",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
