"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

export interface CardHoverProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export const CardHover: React.FC<CardHoverProps> = ({ 
  children, 
  className,
  ...props 
}) => {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
      className={cn("transition-shadow hover:shadow-lg rounded-2xl", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};
