import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f17] disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        default:
          "bg-fuchsia-500 text-[#0f0f17] hover:bg-fuchsia-400 shadow-[0_0_30px_rgba(217,70,239,0.45)]",
        secondary:
          "bg-sky-400 text-[#0f0f17] hover:bg-sky-300 shadow-[0_0_24px_rgba(56,189,248,0.35)]",
        ghost: "hover:bg-white/10 text-foreground"
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-8 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, variant, size, ...rest } = props;
  return (
    <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...rest} />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
