"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Sparkles, Shield, Clock, Award, Zap } from "lucide-react";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { cn } from "@/lib/utils";

// Pre-generated particle positions to avoid Math.random() during render
const particles = [
  { top: 12, left: 8, duration: 7.2, delay: 1.3 },
  { top: 45, left: 92, duration: 8.1, delay: 0.5 },
  { top: 78, left: 23, duration: 6.5, delay: 2.8 },
  { top: 34, left: 67, duration: 9.0, delay: 0.2 },
  { top: 89, left: 45, duration: 7.8, delay: 3.1 },
  { top: 56, left: 11, duration: 8.5, delay: 1.9 },
  { top: 23, left: 78, duration: 6.9, delay: 4.2 },
  { top: 67, left: 34, duration: 7.4, delay: 0.8 },
  { top: 91, left: 89, duration: 8.8, delay: 2.4 },
  { top: 15, left: 56, duration: 6.2, delay: 3.7 },
  { top: 48, left: 19, duration: 9.3, delay: 1.1 },
  { top: 72, left: 71, duration: 7.1, delay: 4.5 },
  { top: 29, left: 43, duration: 8.3, delay: 0.6 },
  { top: 84, left: 62, duration: 6.7, delay: 2.2 },
  { top: 41, left: 85, duration: 7.6, delay: 3.4 },
  { top: 63, left: 27, duration: 8.9, delay: 1.7 },
  { top: 18, left: 94, duration: 6.4, delay: 4.0 },
  { top: 76, left: 51, duration: 7.3, delay: 0.9 },
  { top: 52, left: 38, duration: 8.6, delay: 2.6 },
  { top: 95, left: 14, duration: 6.8, delay: 3.9 },
];

const trustBadges = [
  { icon: Shield, text: "Qualität garantiert" },
  { icon: Clock, text: "Schnelle Reaktion" },
  { icon: Award, text: "Faire Preise" },
];

const LOGO_URL =
  "https://www.pascal-elektrotechnik.de/wp-content/uploads/go-x/u/537c683a-94b2-4b6b-9834-a42a9c0ea338/image-320x101.png";

export function HeroSection() {
  const { ref, isVisible } = useAnimateOnScroll<HTMLDivElement>();

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
    >
      {/* Background Layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-background to-background" />

        {/* Logo Watermark - Large centered background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] lg:w-[1000px] lg:h-[1000px] opacity-[0.03]">
            <Image
              src={LOGO_URL}
              alt=""
              aria-hidden="true"
              fill
              className="object-contain animate-pulse-soft"
              style={{ animationDuration: '8s' }}
              priority
            />
          </div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />

        {/* Animated orbs - more dramatic */}
        <div
          className="absolute top-[5%] right-[5%] w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] rounded-full bg-gradient-to-br from-primary/20 to-green-400/10 blur-[120px] animate-pulse-soft"
          style={{ animationDelay: "0s", animationDuration: "6s" }}
        />
        <div
          className="absolute bottom-[10%] left-[0%] w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full bg-gradient-to-tr from-green-600/20 to-emerald-400/10 blur-[100px] animate-pulse-soft"
          style={{ animationDelay: "2s", animationDuration: "7s" }}
        />
        <div
          className="absolute top-[30%] left-[20%] w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] rounded-full bg-gradient-to-r from-primary/10 to-teal-500/10 blur-[80px] animate-float"
          style={{ animationDuration: "10s" }}
        />
        <div
          className="absolute bottom-[30%] right-[15%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full bg-gradient-to-l from-green-500/15 to-primary/5 blur-[70px] animate-float-slow"
          style={{ animationDuration: "12s" }}
        />

        {/* Particle dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary/30"
              style={{
                top: `${particle.top}%`,
                left: `${particle.left}%`,
                animation: `float ${particle.duration}s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative container-premium">
        <div
          ref={ref}
          className={cn(
            "flex flex-col items-center text-center py-20 sm:py-24 lg:py-32",
            "animate-on-scroll",
            isVisible && "is-visible"
          )}
        >
          {/* Badge */}
          <Badge
            variant="secondary"
            className={cn(
              "mb-6 sm:mb-8 px-5 py-2.5 text-xs sm:text-sm font-semibold",
              "border-2 border-primary/30 bg-primary/10",
              "shadow-lg shadow-primary/10",
              "animate-float-slow",
              "backdrop-blur-sm"
            )}
          >
            <Sparkles className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary animate-pulse" />
            Elektrotechnik aus Neuenstadt am Kocher
          </Badge>

          {/* Headline */}
          <h1 className="text-display max-w-5xl">
            <span className="block text-foreground">Willkommen bei</span>
            <span className="block mt-2 sm:mt-3 text-gradient-animated">
              Pascal Lienert
            </span>
            <span className="block mt-1 sm:mt-2 text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
              Elektrotechnik
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 sm:mt-8 text-body-lg text-muted-foreground max-w-2xl px-4">
            Ihr Ansprechpartner für individuelle Elektrotechnik-Projekte.{" "}
            <span className="text-foreground font-semibold">
              Innovative Lösungen
            </span>{" "}
            mit höchstem Qualitätsanspruch und persönlicher Betreuung.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
            <Button
              asChild
              size="xl"
              className={cn(
                "group w-full sm:w-auto sm:min-w-[220px]",
                "bg-gradient-to-r from-primary via-green-600 to-primary bg-[length:200%_100%]",
                "hover:bg-[position:100%_0]",
                "shadow-2xl shadow-primary/30",
                "transition-all duration-500",
                "hover:shadow-[0_20px_60px_-15px_rgba(22,163,74,0.5)]",
                "hover:scale-[1.03] active:scale-[0.98]",
                "border border-green-400/20"
              )}
            >
              <a href="tel:+491739538984" className="gap-2.5">
                <Phone className="h-5 w-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                <span className="font-bold">Jetzt kontaktieren</span>
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="xl"
              className={cn(
                "w-full sm:w-auto sm:min-w-[220px]",
                "border-2 border-primary/40 bg-background/50 backdrop-blur-sm",
                "hover:border-primary hover:bg-primary/10",
                "transition-all duration-300",
                "hover:scale-[1.03] active:scale-[0.98]",
                "shadow-lg"
              )}
            >
              <a href="#leistungen" className="gap-2.5">
                <Zap className="h-5 w-5 text-primary" />
                <span className="font-bold">Leistungen ansehen</span>
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-12">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.text}
                  className={cn(
                    "flex items-center gap-2 sm:gap-3",
                    "text-xs sm:text-sm font-medium text-muted-foreground",
                    "transition-all duration-500 hover:text-foreground hover:scale-105",
                    "group cursor-default"
                  )}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={cn(
                    "flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center",
                    "rounded-xl bg-gradient-to-br from-primary/20 to-green-600/10",
                    "border border-primary/20",
                    "transition-all duration-300",
                    "group-hover:from-primary/30 group-hover:to-green-600/20",
                    "group-hover:shadow-lg group-hover:shadow-primary/20"
                  )}>
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <span>{badge.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2">
        <a
          href="#leistungen"
          className={cn(
            "group flex flex-col items-center gap-2",
            "text-muted-foreground transition-all duration-300",
            "hover:text-primary"
          )}
          aria-label="Zu den Leistungen scrollen"
        >
          <span className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em]">
            Mehr erfahren
          </span>
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-current p-1.5 transition-all duration-300 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/20">
            <div className="h-2 w-1 rounded-full bg-current animate-bounce" />
          </div>
        </a>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
