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
  success: "bg-success/10 text-success border-success/20",
  warning: "bg-warning/10 text-warning border-warning/20",
  error: "bg-danger/10 text-danger border-danger/20",
  info: "bg-info/10 text-info border-info/20",
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
