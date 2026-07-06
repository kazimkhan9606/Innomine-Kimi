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
      icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
      bg: "bg-red-50 dark:bg-red-900/20",
      button: "bg-red-600 hover:bg-red-700 text-white",
    },
    warning: {
      icon: <AlertTriangle className="w-6 h-6 text-amber-600" />,
      bg: "bg-amber-50 dark:bg-amber-900/20",
      button: "bg-amber-600 hover:bg-amber-700 text-white",
    },
    info: {
      icon: <Info className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-50 dark:bg-blue-900/20",
      button: "bg-blue-600 hover:bg-blue-700 text-white",
    },
    success: {
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
      button: "bg-emerald-600 hover:bg-emerald-700 text-white",
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
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {title}
          </h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            {message}
          </p>
        </div>
      </div>
      
      <div className="mt-8 flex gap-3 w-full">
        <button
          type="button"
          onClick={onClose}
          disabled={isLoading}
          className="flex-1 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 dark:hover:bg-slate-700"
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
