"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Startseite", href: "#home" },
  { name: "Leistungen", href: "#leistungen" },
  { name: "Über mich", href: "#ueber-mich" },
  { name: "Kontakt", href: "#kontakt" },
];

const LOGO_URL =
  "https://www.pascal-elektrotechnik.de/wp-content/uploads/go-x/u/537c683a-94b2-4b6b-9834-a42a9c0ea338/image-320x101.png";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "transition-all duration-500 ease-out",
        isScrolled
          ? "glass-strong border-b border-border/50 shadow-premium py-2"
          : "bg-transparent py-4"
      )}
    >
      <nav className="container-premium">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="relative z-10 flex items-center transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image
              src={LOGO_URL}
              alt="Pascal Lienert Elektrotechnik"
              width={160}
              height={51}
              className={cn(
                "w-auto object-contain transition-all duration-300",
                isScrolled ? "h-8 sm:h-10" : "h-10 sm:h-12"
              )}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1 lg:gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative px-3 lg:px-4 py-2 text-sm font-medium",
                  "text-foreground/70 transition-all duration-300",
                  "hover:text-foreground",
                  "after:absolute after:bottom-0 after:left-3 after:right-3 lg:after:left-4 lg:after:right-4",
                  "after:h-0.5 after:bg-primary after:origin-left",
                  "after:scale-x-0 after:transition-transform after:duration-300",
                  "hover:after:scale-x-100"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              asChild
              size="lg"
              className={cn(
                "group relative overflow-hidden",
                "bg-primary hover:bg-primary/90",
                "shadow-lg shadow-primary/20",
                "transition-all duration-300",
                "hover:shadow-xl hover:shadow-primary/30",
                "hover:scale-[1.02] active:scale-[0.98]"
              )}
            >
              <a href="tel:+491739538984" className="gap-2">
                <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                <span className="font-semibold">Jetzt anrufen</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={cn(
              "relative z-10 md:hidden",
              "flex h-10 w-10 items-center justify-center",
              "rounded-xl transition-all duration-300",
              "hover:bg-primary/10 active:scale-95",
              isMobileMenuOpen && "bg-primary/10"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            <div className="relative h-5 w-5">
              <span
                className={cn(
                  "absolute left-0 top-0 h-0.5 w-5 bg-foreground",
                  "transition-all duration-300 origin-center",
                  isMobileMenuOpen && "top-2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-2 h-0.5 w-5 bg-foreground",
                  "transition-all duration-300",
                  isMobileMenuOpen && "opacity-0 scale-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-4 h-0.5 w-5 bg-foreground",
                  "transition-all duration-300 origin-center",
                  isMobileMenuOpen && "top-2 -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden",
          "bg-background/80 backdrop-blur-xl",
          "transition-all duration-500",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 z-40 h-full w-[280px] sm:w-[320px] md:hidden",
          "bg-background border-l border-border",
          "shadow-premium-lg",
          "transition-transform duration-500 ease-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full pt-20 pb-8 px-6">
          {/* Navigation Links */}
          <nav className="flex-1 space-y-1">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center px-4 py-4 rounded-xl",
                  "text-lg font-medium text-foreground/70",
                  "transition-all duration-300",
                  "hover:bg-primary/10 hover:text-foreground hover:translate-x-1",
                  "active:scale-[0.98]"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="pt-6 border-t border-border">
            <Button
              asChild
              size="lg"
              className="w-full shadow-lg shadow-primary/20"
            >
              <a
                href="tel:+491739538984"
                className="gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone className="h-4 w-4" />
                <span className="font-semibold">Jetzt anrufen</span>
              </a>
            </Button>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              +49 173 9538984
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
