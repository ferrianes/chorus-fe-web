"use client"

import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-neutral-50 group-[.toaster]:text-neutral-950 group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:!text-red-600",
          error: "group-[.toaster]:!bg-red-50 group-[.toaster]:!text-red-600",
          actionButton:
            "group-[.toast]:bg-violet-600 group-[.toast]:text-neutral-50 font-medium",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground font-medium",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }