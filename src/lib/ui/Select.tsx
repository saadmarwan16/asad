"use client";

import { cva, type VariantProps } from "class-variance-authority";
import {
  type SelectHTMLAttributes,
  type FunctionComponent,
  type PropsWithChildren,
  forwardRef,
} from "react";

const select = cva("border-2 text-content-100", {
  variants: {
    variant: {
      primary: `border-2 border-primary-100 bg-base-100 focus:border-primary-200 focus:outline-none`,
      secondary: `border-2 border-secondary-100 bg-base-100 focus:border-secondary-200 focus:outline-none`,
      ghost: `border-2 border-base-300 focus:border-base-400 focus:outline-none`,
    },
    width: {
      fit: "w-fit",
      full: "w-full",
    },
    size: {
      sm: "rounded-md px-2 py-1 text-sm",
      md: "rounded-lg px-4 py-2",
      lg: "rounded-lg px-6 py-3 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    width: "full",
    size: "md",
  },
});

type SelectVariantProps = VariantProps<typeof select>;

interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size" | "width">,
    SelectVariantProps,
    PropsWithChildren {
  top?: string;
  bottom?: string;
}

const Select: FunctionComponent<SelectProps> = forwardRef<
  HTMLSelectElement,
  SelectProps
>(({ variant, width, size, top, bottom, children, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-2">
      {top && (
        <label
          htmlFor={props.id}
          className="cursor-default select-none font-medium"
        >
          {top}
        </label>
      )}
      <select ref={ref} {...props} className={select({ variant, width, size })}>
        {children}
      </select>
      {bottom && (
        <label className="cursor-default select-none font-medium text-red-800">
          {bottom}
        </label>
      )}
    </div>
  );
});

export default Select;
