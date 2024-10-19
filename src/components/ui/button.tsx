import { cva, VariantProps } from "class-variance-authority";
import React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-90",
  {
    variants: {
      variant: {
        default:
          "bg-zinc-900 text-white shadow-sm hover:bg-zinc-900/90 focus:ring-zinc-800",
        secondary:
          "bg-zinc-300 text-zinc-900 hover:bg-zinc-300/90 focus:ring-zinc-300",
        danger:
          "bg-red-600 text-white shadow-sm hover:bg-red-600/90 focus:ring-red-500",
        link: "cursor-pointer whitespace-nowrap text-zinc-700 underline-offset-8 hover:text-zinc-900 hover:underline focus:ring-zinc-800",
      },
      size: {
        default: "h-10 px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
