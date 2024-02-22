import { cva, type VariantProps } from "class-variance-authority";
import {
  type InputHTMLAttributes,
  type FunctionComponent,
  forwardRef,
} from "react";

const input = cva("border-2 text-content-100", {
  variants: {
    variant: {
      primary: `border-primary-100 focus-visible:border-primary-200 focus-visible:outline-none`,
      secondary: `border-secondary-100 focus-visible:border-secondary-200 focus-visible:outline-none`,
      ghost: `border-base-300 focus-visible:border-base-400 focus-visible:outline-none`,
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

type DateInputVariantProps = VariantProps<typeof input>;

interface DateInputProps
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "size" | "width" | "value"
    >,
    DateInputVariantProps {
  top?: string;
  bottom?: string;
  value: Date | null;
}

const DateInput: FunctionComponent<DateInputProps> = forwardRef<
  HTMLInputElement,
  DateInputProps
>(({ variant, width, size, top, bottom, value, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-2">
      {top && (
        <label className="cursor-default select-none font-medium">{top}</label>
      )}
      <input
        ref={ref}
        value={value ? value.toString() : ""}
        {...props}
        className={input({ variant, width, size })}
      />
      {bottom && (
        <label className="cursor-default select-none font-medium text-red-800">
          {bottom}
        </label>
      )}
    </div>
  );
});

export default DateInput;
