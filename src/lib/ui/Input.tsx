import { cva, type VariantProps } from "class-variance-authority";
import type { InputHTMLAttributes, FunctionComponent } from "react";

const input = cva("border-2 text-content-100", {
  variants: {
    variant: {
      primary: `border-primary-100 focus-visible:border-primary-200 focus-visible:outline-none`,
      secondary: `border-secondary-100 focus-visible:border-secondary-200 focus-visible:outline-none`,
      ghost: `border-base-300 focus-visible:border-base-400 focus-visible:outline-none`,
    },
    size: {
      sm: "rounded-md px-2 py-1 text-sm",
      md: "rounded-lg px-4 py-2",
      lg: "rounded-lg px-6 py-3 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type InputVariantProps = VariantProps<typeof input>;

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    InputVariantProps {
  top?: string;
  bottom?: string;
}

const Input: FunctionComponent<InputProps> = ({
  variant,
  size,
  top,
  bottom,
  ...props
}) => {
  return (
    <div className="flex w-fit flex-col gap-2">
      {top && (
        <label className="cursor-default select-none font-medium">{top}</label>
      )}
      <input {...props} className={input({ variant, size })} />
      {bottom && (
        <label className="cursor-default select-none font-medium text-red-800">
          {bottom}
        </label>
      )}
    </div>
  );
};

export default Input;
