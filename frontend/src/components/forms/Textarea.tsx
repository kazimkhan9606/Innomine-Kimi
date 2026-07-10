import * as React from "react"
import { cn } from "@/lib/utils"
import { InputWrapper } from "./InputWrapper"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  helperText?: string
  error?: string
  containerClassName?: string
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { className, label, helperText, error, id, containerClassName, ...props },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId

    return (
      <InputWrapper
        id={inputId}
        label={label}
        helperText={helperText}
        error={error}
        className={containerClassName}
      >
        <textarea
          id={inputId}
          ref={ref}
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-text-primary placeholder:text-text-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
            error && "border-danger focus-visible:ring-danger",
            className
          )}
          {...props}
        />
      </InputWrapper>
    )
  }
)
Textarea.displayName = "Textarea"
