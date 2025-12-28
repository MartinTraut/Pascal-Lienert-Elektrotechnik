"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, Zap } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { cn } from "@/lib/utils";

const LOGO_URL =
  "https://www.pascal-elektrotechnik.de/wp-content/uploads/go-x/u/537c683a-94b2-4b6b-9834-a42a9c0ea338/image-320x101.png";

const navigation = [
  { name: "Startseite", href: "#home" },
  { name: "Leistungen", href: "#leistungen" },
  { name: "Über mich", href: "#ueber-mich" },
  { name: "Kontakt", href: "#kontakt" },
];

const services = [
  "Elektroinstallation",
  "Smart Home",
  "Photovoltaik",
  "Beleuchtung",
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { ref, isVisible } = useAnimateOnScroll<HTMLElement>();

  return (
    <footer
      ref={ref}
      className={cn(
        "relative bg-gradient-to-b from-foreground to-[#0a0f07] text-background overflow-hidden",
        "animate-on-scroll",
        isVisible && "is-visible"
      )}
    >
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] sm:w-[600px] sm:h-[300px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-green-600/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative container-premium">
        {/* Main Footer Content */}
        <div className="grid gap-10 sm:gap-12 py-12 sm:py-16 lg:py-20 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="#home"
              className="group inline-block transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <div
                className={cn(
                  "overflow-hidden rounded-xl bg-white p-2.5 sm:p-3",
                  "shadow-lg transition-all duration-300",
                  "group-hover:shadow-primary/30 group-hover:shadow-xl"
                )}
              >
                <Image
                  src={LOGO_URL}
                  alt="Pascal Lienert Elektrotechnik Logo"
                  width={160}
                  height={51}
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="mt-5 sm:mt-6 text-sm leading-relaxed text-background/60 max-w-xs">
              Ihr zuverlässiger Partner für professionelle Elektrotechnik in
              Neuenstadt am Kocher und Umgebung.
            </p>

            {/* Quality Promise */}
            <div
              className={cn(
                "mt-5 sm:mt-6 inline-flex items-center gap-2",
                "px-3 py-2 rounded-lg",
                "bg-primary/10 border border-primary/20"
              )}
            >
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium text-primary">
                Qualität garantiert
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary">
              Navigation
            </h3>
            <ul className="mt-5 sm:mt-6 space-y-3 sm:space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "group inline-flex items-center gap-1",
                      "text-sm text-background/60",
                      "transition-all duration-300",
                      "hover:text-background hover:translate-x-1"
                    )}
                  >
                    {item.name}
                    <ArrowUpRight
                      className={cn(
                        "h-3 w-3 opacity-0",
                        "-translate-y-1 translate-x-1",
                        "transition-all duration-300",
                        "group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0"
                      )}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary">
              Kontakt
            </h3>
            <ul className="mt-5 sm:mt-6 space-y-3 sm:space-y-4">
              <li>
                <a
                  href="tel:+491739538984"
                  className={cn(
                    "group flex items-start gap-3",
                    "text-sm text-background/60",
                    "transition-all duration-300 hover:text-background"
                  )}
                >
                  <div
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center",
                      "rounded-lg bg-primary/20",
                      "transition-colors duration-300 group-hover:bg-primary/30"
                    )}
                  >
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div className="pt-1">
                    <span className="block font-medium text-background/80">
                      +49 173 9538984
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:pascal.elektrotechnik@gmail.com"
                  className={cn(
                    "group flex items-start gap-3",
                    "text-sm text-background/60",
                    "transition-all duration-300 hover:text-background"
                  )}
                >
                  <div
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center",
                      "rounded-lg bg-primary/20",
                      "transition-colors duration-300 group-hover:bg-primary/30"
                    )}
                  >
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div className="pt-1">
                    <span className="block font-medium text-background/80 break-all text-xs sm:text-sm">
                      pascal.elektrotechnik@gmail.com
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-background/60">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div className="pt-1">
                    <span className="block font-medium text-background/80">
                      Schafgasse 28
                      <br />
                      74196 Neuenstadt am Kocher
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary">
              Öffnungszeiten
            </h3>
            <div className="mt-5 sm:mt-6">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-2 pt-1">
                  <div className="flex justify-between gap-6 sm:gap-8 text-xs sm:text-sm">
                    <span className="text-background/60">Mo – Fr</span>
                    <span className="font-medium text-background/80">
                      16:00 – 20:00
                    </span>
                  </div>
                  <div className="flex justify-between gap-6 sm:gap-8 text-xs sm:text-sm">
                    <span className="text-background/60">Samstag</span>
                    <span className="font-medium text-background/80">
                      08:00 – 20:00
                    </span>
                  </div>
                  <div className="flex justify-between gap-6 sm:gap-8 text-xs sm:text-sm">
                    <span className="text-background/60">Sonntag</span>
                    <span className="font-medium text-background/50">
                      Geschlossen
                    </span>
                  </div>
                </div>
              </div>

              {/* Services List */}
              <div className="mt-6 sm:mt-8">
                <p className="text-xs font-medium uppercase tracking-widest text-background/40 mb-3">
                  Leistungen
                </p>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <span
                      key={service}
                      className={cn(
                        "px-2.5 py-1 rounded-md",
                        "text-xs font-medium",
                        "bg-primary/10 text-primary/90",
                        "border border-primary/20"
                      )}
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-background/10" />

        {/* Bottom Footer */}
        <div
          className={cn(
            "flex flex-col items-center justify-between gap-4",
            "py-6 sm:py-8 text-center",
            "md:flex-row md:text-left"
          )}
        >
          <p className="text-xs sm:text-sm text-background/40">
            © {currentYear} Pascal Lienert Elektrotechnik. Alle Rechte
            vorbehalten.
          </p>
          <div className="flex gap-6 sm:gap-8">
            <Link
              href="/impressum"
              className={cn(
                "text-xs sm:text-sm text-background/40",
                "transition-all duration-300",
                "hover:text-background"
              )}
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className={cn(
                "text-xs sm:text-sm text-background/40",
                "transition-all duration-300",
                "hover:text-background"
              )}
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
