import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            'heading-1',
            'heading-2',
            'heading-3',
            'heading-4',
            'heading-5',
            'heading-6',
            'body-bold-xl',
            'body-bold-lg',
            'body-bold-md',
            'body-bold-sm',
            'body-bold-xs',
            'body-semibold-xl',
            'body-semibold-lg',
            'body-semibold-md',
            'body-semibold-sm',
            'body-semibold-xs',
            'body-medium-xl',
            'body-medium-lg',
            'body-medium-md',
            'body-medium-sm',
            'body-medium-xs',
            'body-regular-xl',
            'body-regular-lg',
            'body-regular-md',
            'body-regular-sm',
            'body-regular-xs',
          ]
        }
      ]
    }
  },
})

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs))
}