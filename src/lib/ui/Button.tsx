import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, FunctionComponent } from "react";
import styles from "@asad/styles/shared/button.module.css";

const button = cva("rounded-lg  font-medium before:rounded-lg", {
  variants: {
    variant: {
      primary: `bg-primary-100 text-primary-400 before:bg-primary-300 before:text-base-100`,
      secondary: `bg-secondary-100 text-base-100 before:bg-secondary-200`,
      ghost: `bg-base-300 text-content-100 before:bg-base-400`,
    },
    size: {
      sm: "px-4 py-1 text-sm lg:text-base",
      md: "px-8 py-2 text-base lg:text-lg",
      lg: "px-12 py-4 text-lg lg:text-xl",
    },
    disabled: {
      true: "bg-base-300 cursor-not-allowed text-primary-400",
      false: `${styles.filled}`,
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    disabled: false,
  },
});

type ButtonVariantProps = VariantProps<typeof button>;

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    ButtonVariantProps {}

const Button: FunctionComponent<ButtonProps> = ({
  variant,
  size,
  disabled,
  ...props
}) => {
  return <button {...props} className={button({ variant, size, disabled })} />;
};

export default Button;
