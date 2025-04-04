import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils.js"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 active:!opacity-90 whitespace-nowrap rounded-lg text-base font-medium ring-offset-background duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-foreground/[0.08] text-foreground hover:bg-foreground/[0.06]",
        semiTransparent: "bg-black/50 text-white hover:bg-black/30",
        whiteActive: "bg-white text-black hover:bg-white/90",
        transparent: "text-foreground",
        deleting: "bg-[#EC2928]/32 text-[#EC2928] hover:bg-[#EC2928]/40",
        success: "bg-green-foreground/35 text-green-foreground hover:bg-green-foreground/30"
      },
      size: {
        default: "h-11 px-5 py-2 min-h-11",
        sm: "h-9 px-5 min-h-9 text-sm",
        full: "w-full h-14 min-h-14",
        icon: "w-[3.25rem] h-[3.25rem] min-w-[3.25rem] min-h-[3.25rem]",
        iconSm: "h-12 w-12 min-h-12 ",
        iconLg: "h-16 w-16 min-h-16 min-w-16",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
