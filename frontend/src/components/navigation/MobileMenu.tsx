"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, ShoppingCart, Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MOCK_NAV } from "@/constants/mock-data";
import { motion, AnimatePresence } from "framer-motion";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll and handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <Button variant="ghost" size="icon" className="rounded-full lg:hidden" onClick={() => setOpen(true)}>
        <Menu className="w-6 h-6" />
        <span className="sr-only">Toggle Menu</span>
      </Button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[300px] sm:w-[350px] bg-background border-l shadow-2xl flex flex-col"
            >
              <div className="px-6 py-4 border-b flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">I</span>
                  </div>
                  <span className="font-bold tracking-tight">Innomine</span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="rounded-full">
                  <X className="w-5 h-5" />
                  <span className="sr-only">Close Menu</span>
                </Button>
              </div>
              
              <div className="flex-1 px-6 py-6 overflow-y-auto">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <h4 className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">Menu</h4>
                    {MOCK_NAV.map((item) => (
                      <div key={item.label}>
                        {item.children ? (
                          <div className="mb-2">
                            <div className="py-2 text-sm font-semibold">{item.label}</div>
                            <div className="pl-4 flex flex-col gap-1 border-l-2 border-border ml-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  onClick={() => setOpen(false)}
                                  className="py-2 text-sm text-text-secondary hover:text-primary transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className={`block py-3 text-sm font-medium transition-colors hover:text-primary ${
                              pathname === item.href ? "text-primary" : "text-text-primary"
                            }`}
                          >
                            {item.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="w-full h-px bg-border my-2" />

                  <div className="flex flex-col gap-3">
                    <Button variant="outline" className="w-full justify-start gap-3" onClick={() => setOpen(false)}>
                      <Search className="w-4 h-4" /> Search Innovations
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-3" onClick={() => setOpen(false)}>
                      <Heart className="w-4 h-4" /> Wishlist
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-3" onClick={() => setOpen(false)}>
                      <ShoppingCart className="w-4 h-4" /> Cart (2)
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-6 border-t">
                <Button className="w-full" onClick={() => setOpen(false)}>
                  Sign In / Register
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
