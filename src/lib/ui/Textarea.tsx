import { cva, type VariantProps } from "class-variance-authority";
import type { TextareaHTMLAttributes, FunctionComponent } from "react";

const textarea = cva(
  "rounded-lg border-2 px-4 py-2 text-content-100 focus-visible:outline-none",
  {
    variants: {
      variant: {
        primary: `border-primary-100 focus-visible:border-primary-200`,
        secondary: `border-secondary-100 focus-visible:border-secondary-200`,
        ghost: `border-base-300 focus-visible:border-base-400`,
      },
      width: {
        fit: "w-fit",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      width: "full",
    },
  },
);

type TextareaVariantProps = VariantProps<typeof textarea>;

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    TextareaVariantProps {
  top?: string;
  bottom?: string;
}

const Textarea: FunctionComponent<TextareaProps> = ({
  variant,
  width,
  top,
  bottom,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2">
      {top && (
        <label className="cursor-default select-none font-medium">{top}</label>
      )}
      <textarea {...props} className={textarea({ variant, width })} />
      {bottom && (
        <label className="cursor-default select-none font-medium text-red-700">
          {bottom}
        </label>
      )}
    </div>
  );
};

export default Textarea;
