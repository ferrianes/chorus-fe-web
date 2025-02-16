import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/shared/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md  transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 ring-neutral-950/10 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0 cursor-pointer",
  {
    variants: {
      color: {
        primary: undefined,
        secondary: undefined,
        success: undefined,
        warning: undefined,
        danger: undefined,
      },
      variant: {
        solid: undefined,
        outline: undefined,
        ghost: undefined,
      },
      size: {
        sm: "h-8 text-body-regular-sm px-3 has-[>svg]:px-2.5",
        md: "h-9 text-body-regular-md px-4 has-[>svg]:px-3",
        lg: "h-10 text-body-regular-lg px-6 has-[>svg]:px-4",
      },
      square: {
        true: "p-0",
      }
    },
    compoundVariants: [
      {
        size: 'sm',
        square: true,
        className: 'size-8',
      },
      {
        size: 'md',
        square: true,
        className: 'size-9',
      },
      {
        size: 'lg',
        square: true,
        className: 'size-10',
      },
      {
        color: 'primary',
        variant: 'solid',
        className: 'bg-violet-600 text-neutral-50 shadow-xs hover:bg-violet-600/90',
      },
      {
        color: 'secondary',
        variant: 'solid',
        className: 'bg-blue-600 text-neutral-50 shadow-xs hover:bg-blue-600/90',
      },
      {
        color: 'success',
        variant: 'solid',
        className: 'bg-green-600 text-neutral-50 shadow-xs hover:bg-green-600/90',
      },
      {
        color: 'warning',
        variant: 'solid',
        className: 'bg-yellow-600 text-neutral-50 shadow-xs hover:bg-yellow-600/90',
      },
      {
        color: 'danger',
        variant: 'solid',
        className: 'bg-red-600 text-neutral-50 shadow-xs hover:bg-red-600/90',
      },
      {
        color: 'primary',
        variant: 'outline',
        className: 'border-violet-600 text-violet-600 shadow-xs hover:bg-violet-600/10',
      },
      {
        color: 'secondary',
        variant: 'outline',
        className: 'border-blue-600 text-blue-600 shadow-xs hover:bg-blue-600/10',
      },
      {
        color: 'success',
        variant: 'outline',
        className: 'border-green-600 text-green-600 shadow-xs hover:bg-green-600/10',
      },
      {
        color: 'warning',
        variant: 'outline',
        className: 'border-yellow-600 text-yellow-600 shadow-xs hover:bg-yellow-600/10',
      },
      {
        color: 'danger',
        variant: 'outline',
        className: 'border-red-600 text-red-600 shadow-xs hover:bg-red-600/10',
      },
      {
        color: 'primary',
        variant: 'ghost',
        className: 'text-violet-600 shadow-xs hover:bg-violet-600/10',
      },
      {
        color: 'secondary',
        variant: 'ghost',
        className: 'text-blue-600 shadow-xs hover:bg-blue-600/10',
      },
      {
        color: 'success',
        variant: 'ghost',
        className: 'text-green-600 shadow-xs hover:bg-green-600/10',
      },
      {
        color: 'warning',
        variant: 'ghost',
        className: 'text-yellow-600 shadow-xs hover:bg-yellow-600/10',
      },
      {
        color: 'danger',
        variant: 'ghost',
        className: 'text-red-600 shadow-xs hover:bg-red-600/10',
      }
    ],
    defaultVariants: {
      variant: 'solid',
    }
  }
)

function Button({
  className,
  color,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ color, variant, size, className }))}
      {...props}
    />
  )
}

export { Button }