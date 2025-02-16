import * as React from "react"

import { cn } from "@/shared/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "border-neutral-300 file:text-neutral-950 placeholder:text-neutral-500 selection:bg-neutral-950 selection:text-neutral-50 aria-invalid:outline-red-600/60 aria-invalid:ring-red-600/20 ring-neutral-950/10 outline-neutral-950/50 aria-invalid:border-red-600/60 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-body-regular-lg shadow-xs transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-body-regular-lg file:font-medium focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:focus-visible:ring-[3px] aria-invalid:focus-visible:outline-none md:text-body-regular-md",
        className
      )}
      {...props}
    />
  )
}

export { Input }