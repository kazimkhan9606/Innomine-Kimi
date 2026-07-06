import React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, AlertTriangle, XCircle, Info } from "lucide-react";

export type AlertVariant = "success" | "warning" | "error" | "info";

export interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  message: string;
  className?: string;
}

const variantStyles: Record<AlertVariant, string> = {
  success: "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800",
  warning: "bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800",
  error: "bg-red-50 text-red-800 border-red-200 dark:bg-red-950/50 dark:text-red-300 dark:border-red-800",
  info: "bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800",
};

const variantIcons: Record<AlertVariant, React.ElementType> = {
  success: CheckCircle2,
  warning: AlertTriangle,
  error: XCircle,
  info: Info,
};

export const Alert: React.FC<AlertProps> = ({
  variant = "info",
  title,
  message,
  className,
}) => {
  const Icon = variantIcons[variant];
  return (
    <div
      className={cn(
        "p-4 border rounded-lg flex items-start gap-3 w-full",
        variantStyles[variant],
        className
      )}
      role="alert"
    >
      <Icon className="w-5 h-5 mt-0.5 shrink-0" />
      <div className="flex flex-col gap-1 text-sm">
        {title && <span className="font-semibold">{title}</span>}
        <span>{message}</span>
      </div>
    </div>
  );
};
