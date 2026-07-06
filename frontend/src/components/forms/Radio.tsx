import * as React from "react"
import { cn } from "@/lib/utils"

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string | React.ReactNode
  description?: string
  error?: string
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, description, error, id, ...props }, ref) => {
    const inputId = id || React.useId()

    return (
      <div className="relative flex items-start">
        <div className="flex h-5 items-center">
          <input
            id={inputId}
            ref={ref}
            type="radio"
            className={cn(
              "h-4 w-4 border-slate-300 text-[#2563EB] focus:ring-[#2563EB] transition-colors",
              error && "border-red-500 focus:ring-red-500",
              className
            )}
            {...props}
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor={inputId} className="font-medium text-slate-900">
            {label}
          </label>
          {description && (
            <p className="text-slate-500">{description}</p>
          )}
          {error && (
            <p className="text-red-500 mt-1">{error}</p>
          )}
        </div>
      </div>
    )
  }
)
Radio.displayName = "Radio"
