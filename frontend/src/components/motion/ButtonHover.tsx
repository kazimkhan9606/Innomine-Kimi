"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

export interface ButtonHoverProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export const ButtonHover: React.FC<ButtonHoverProps> = ({ 
  children, 
  className,
  ...props 
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={cn("inline-block", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};
