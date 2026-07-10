"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingCart, User, Bell, Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/custom/ThemeToggle";
import { MOCK_NAV } from "@/constants/mock-data";
import { MobileMenu } from "./MobileMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Desktop Nav */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center transform transition-transform group-hover:rotate-12">
                <span className="text-primary-foreground font-bold text-lg">I</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-text-primary">
                Innomine
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {MOCK_NAV.map((item) => (
                item.children ? (
                  <DropdownMenu key={item.label}>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="text-sm font-medium">
                        {item.label}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.label} asChild>
                          <Link href={child.href} className="w-full cursor-pointer">
                            {child.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary rounded-md ${
                      pathname === item.href ? "text-primary bg-primary/10" : "text-text-secondary"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-1">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Search className="w-5 h-5 text-text-secondary" />
                <span className="sr-only">Search</span>
              </Button>
              <ThemeToggle />
              <Button variant="ghost" size="icon" className="rounded-full">
                <Heart className="w-5 h-5 text-text-secondary" />
                <span className="sr-only">Wishlist</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full relative">
                <ShoppingCart className="w-5 h-5 text-text-secondary" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full"></span>
                <span className="sr-only">Cart</span>
              </Button>
              <div className="h-6 w-px bg-border mx-2" />
              <Button variant="default" className="rounded-full px-6 bg-primary text-primary-foreground">
                Sign In
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle />
              <MobileMenu />
            </div>
          </div>
          
        </div>
      </div>
    </header>
  );
}
