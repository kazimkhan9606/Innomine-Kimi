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
    const generatedId = React.useId();
    const inputId = id || generatedId

    return (
      <div className="relative flex items-start">
        <div className="flex h-5 items-center">
          <input
            id={inputId}
            ref={ref}
            className={cn(
              "h-4 w-4 border-input text-primary focus:ring-ring transition-colors",
              error && "border-danger focus:ring-danger",
              className
            )}
            {...props}
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor={inputId} className="font-medium text-text-primary">
            {label}
          </label>
          {description && (
            <p className="text-text-muted">{description}</p>
          )}
          {error && (
            <p className="text-danger mt-1">{error}</p>
          )}
        </div>
      </div>
    )
  }
)
Radio.displayName = "Radio"
