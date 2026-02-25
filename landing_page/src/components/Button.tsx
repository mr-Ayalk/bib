import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva("border  h-12 rounded-full px-6 font-medium", {
  variants: {
    variant: {
      primary:
        " bg-gradient-to-r from-teal-500 to-blue-400 text-black border-white border-2",
      secondary: "border-black text-black bg-white border-2",
    },
    size: {
      sm: "h-10",
    },
  },
});
export default function Button(
  props: {
    variant: "primary" | "secondary";
    size?: "sm";
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { variant, className, size, ...otherProps } = props;
  return (
    <button
      className={classes({
        variant,
        size,
        className,
      })}
      {...otherProps}
    />
  );
}
