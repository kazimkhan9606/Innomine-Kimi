import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string
  label?: string
  helperText?: string
  error?: string
  children: React.ReactNode
}

export const InputWrapper = React.forwardRef<HTMLDivElement, InputWrapperProps>(
  ({ id, label, helperText, error, children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-1.5 w-full", className)} {...props}>
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-text-primary"
          >
            {label}
          </label>
        )}
        {children}
        {error && (
          <p className="text-sm font-medium text-danger mt-1">{error}</p>
        )}
        {!error && helperText && (
          <p className="text-sm text-text-muted mt-1">{helperText}</p>
        )}
      </div>
    )
  }
)

InputWrapper.displayName = "InputWrapper"
