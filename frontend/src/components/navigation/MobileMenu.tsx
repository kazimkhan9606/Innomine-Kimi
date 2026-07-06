"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, ShoppingCart, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import { MOCK_NAV } from "@/constants/mock-data";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full lg:hidden">
          <Menu className="w-6 h-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[350px] pr-0">
        <SheetHeader className="px-6 text-left border-b pb-4">
          <SheetTitle className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">I</span>
            </div>
            <span className="font-bold tracking-tight">Innomine</span>
          </SheetTitle>
        </SheetHeader>
        
        <div className="px-6 py-6 overflow-y-auto h-[calc(100vh-80px)]">
          <div className="flex flex-col gap-6">
            
            <div className="flex flex-col gap-1">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Menu</h4>
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
                            className="py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
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
                        pathname === item.href ? "text-primary" : "text-foreground"
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

            <div className="mt-auto pt-6 pb-8">
              <Button className="w-full" onClick={() => setOpen(false)}>
                Sign In / Register
              </Button>
            </div>

          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
