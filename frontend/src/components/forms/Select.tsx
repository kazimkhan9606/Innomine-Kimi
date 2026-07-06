import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import { InputWrapper } from "./InputWrapper"

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  helperText?: string
  error?: string
  containerClassName?: string
  options: { label: string; value: string | number }[]
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      label,
      helperText,
      error,
      id,
      containerClassName,
      options,
      ...props
    },
    ref
  ) => {
    const selectId = id || React.useId()

    return (
      <InputWrapper
        id={selectId}
        label={label}
        helperText={helperText}
        error={error}
        className={containerClassName}
      >
        <div className="relative">
          <select
            id={selectId}
            ref={ref}
            className={cn(
              "flex h-11 w-full appearance-none rounded-xl border border-slate-200 bg-white pl-3 pr-10 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
              error && "border-red-500 focus-visible:ring-red-500",
              className
            )}
            {...props}
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ChevronDown className="h-5 w-5 text-slate-400" />
          </div>
        </div>
      </InputWrapper>
    )
  }
)
Select.displayName = "Select"
