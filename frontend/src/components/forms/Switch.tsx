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
    const generatedId = React.useId();
    const inputId = id || generatedId

    return (
      <div className="flex items-center justify-between">
        <span className="flex flex-grow flex-col">
          {label && (
            <label
              htmlFor={inputId}
              className="text-sm font-medium leading-6 text-text-primary"
            >
              {label}
            </label>
          )}
          {description && (
            <span className="text-sm text-text-muted">{description}</span>
          )}
          {error && <span className="text-sm text-danger mt-1">{error}</span>}
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
              "h-6 w-11 rounded-full bg-surface after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-border after:bg-background after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-background peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ring peer-focus:ring-offset-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
              className
            )}
          ></div>
        </label>
      </div>
    )
  }
)
Switch.displayName = "Switch"
