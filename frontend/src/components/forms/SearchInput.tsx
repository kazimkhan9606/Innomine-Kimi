import * as React from "react"
import { cn } from "@/lib/utils"
import { Search } from "lucide-react"
import { InputWrapper } from "./InputWrapper"

export interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  helperText?: string
  error?: string
  containerClassName?: string
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
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
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            id={inputId}
            ref={ref}
            type="search"
            className={cn(
              "flex h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
              error && "border-red-500 focus-visible:ring-red-500",
              className
            )}
            {...props}
          />
        </div>
      </InputWrapper>
    )
  }
)
SearchInput.displayName = "SearchInput"
