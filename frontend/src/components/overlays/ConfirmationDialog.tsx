import React from "react";
import { Modal } from "./Modal";
import { AlertTriangle, Info, CheckCircle2 } from "lucide-react";

export interface ConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  type?: "danger" | "warning" | "info" | "success";
  isLoading?: boolean;
}

export function ConfirmationDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  type = "warning",
  isLoading = false,
}: ConfirmationDialogProps) {
  
  const typeStyles = {
    danger: {
      icon: <AlertTriangle className="w-6 h-6 text-danger" />,
      bg: "bg-danger/10",
      button: "bg-danger hover:bg-danger/90 text-white",
    },
    warning: {
      icon: <AlertTriangle className="w-6 h-6 text-warning" />,
      bg: "bg-warning/10",
      button: "bg-warning hover:bg-warning/90 text-white",
    },
    info: {
      icon: <Info className="w-6 h-6 text-info" />,
      bg: "bg-info/10",
      button: "bg-info hover:bg-info/90 text-white",
    },
    success: {
      icon: <CheckCircle2 className="w-6 h-6 text-success" />,
      bg: "bg-success/10",
      button: "bg-success hover:bg-success/90 text-white",
    },
  };

  const style = typeStyles[type];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="sm"
      hideCloseButton
      className="p-2"
    >
      <div className="flex flex-col items-center text-center space-y-4 pt-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${style.bg}`}>
          {style.icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-text-primary">
            {title}
          </h3>
          <p className="mt-2 text-sm text-text-secondary">
            {message}
          </p>
        </div>
      </div>
      
      <div className="mt-8 flex gap-3 w-full">
        <button
          type="button"
          onClick={onClose}
          disabled={isLoading}
          className="flex-1 px-4 py-2 text-sm font-medium text-text-primary bg-surface border border-border rounded-lg hover:bg-hover focus:outline-none focus:ring-2 focus:ring-ring"
        >
          {cancelLabel}
        </button>
        <button
          type="button"
          onClick={onConfirm}
          disabled={isLoading}
          className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${style.button} ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isLoading ? "Processing..." : confirmLabel}
        </button>
      </div>
    </Modal>
  );
}
