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
    const inputId = id || React.useId()

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
            "flex min-h-[80px] w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
            error && "border-red-500 focus-visible:ring-red-500",
            className
          )}
          {...props}
        />
      </InputWrapper>
    )
  }
)
Textarea.displayName = "Textarea"
