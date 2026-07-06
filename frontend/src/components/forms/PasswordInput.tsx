import * as React from "react"
import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react"
import { InputWrapper } from "./InputWrapper"

export interface PasswordInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  helperText?: string
  error?: string
  containerClassName?: string
}

export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    { className, label, helperText, error, id, containerClassName, ...props },
    ref
  ) => {
    const inputId = id || React.useId()
    const [showPassword, setShowPassword] = React.useState(false)

    return (
      <InputWrapper
        id={inputId}
        label={label}
        helperText={helperText}
        error={error}
        className={containerClassName}
      >
        <div className="relative">
          <input
            id={inputId}
            ref={ref}
            type={showPassword ? "text" : "password"}
            className={cn(
              "flex h-11 w-full rounded-xl border border-slate-200 bg-white pl-3 pr-10 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
              error && "border-red-500 focus-visible:ring-red-500",
              className
            )}
            {...props}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 focus:outline-none"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>
      </InputWrapper>
    )
  }
)
PasswordInput.displayName = "PasswordInput"
