import * as React from "react"
import { cn } from "@/lib/utils"

export interface SwitchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | React.ReactNode
  description?: string
  error?: string
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, description, error, id, ...props }, ref) => {
    const inputId = id || React.useId()

    return (
      <div className="flex items-center justify-between">
        <span className="flex flex-grow flex-col">
          {label && (
            <label
              htmlFor={inputId}
              className="text-sm font-medium leading-6 text-slate-900"
            >
              {label}
            </label>
          )}
          {description && (
            <span className="text-sm text-slate-500">{description}</span>
          )}
          {error && <span className="text-sm text-red-500 mt-1">{error}</span>}
        </span>
        <label className="relative inline-flex cursor-pointer items-center ml-4">
          <input
            id={inputId}
            type="checkbox"
            className="peer sr-only"
            ref={ref}
            {...props}
          />
          <div
            className={cn(
              "h-6 w-11 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#2563EB] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#2563EB] peer-focus:ring-offset-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
              className
            )}
          ></div>
        </label>
      </div>
    )
  }
)
Switch.displayName = "Switch"
