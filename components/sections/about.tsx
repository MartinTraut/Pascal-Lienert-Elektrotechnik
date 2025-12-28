"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Phone, Award, Sparkles, Star, Users } from "lucide-react";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { cn } from "@/lib/utils";

const qualities = [
  "Qualität und Kundenzufriedenheit an erster Stelle",
  "Individuelle Lösungen für jeden Kunden",
  "Persönliche Betreuung von Anfang bis Ende",
  "Faire und transparente Preisgestaltung",
  "Zuverlässige Terminplanung",
  "Saubere und ordentliche Arbeitsweise",
];

const stats = [
  { icon: Award, value: "100%", label: "Einsatz" },
  { icon: Users, value: "Top", label: "Service" },
  { icon: Star, value: "5.0", label: "Bewertung" },
];

export function AboutSection() {
  const { ref: contentRef, isVisible: contentVisible } =
    useAnimateOnScroll<HTMLDivElement>();
  const { ref: imageRef, isVisible: imageVisible } =
    useAnimateOnScroll<HTMLDivElement>();

  return (
    <section id="ueber-mich" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-accent/20" />

      {/* Animated Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-green-400/5 rounded-full blur-[180px] animate-pulse-soft" style={{ animationDuration: '10s' }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-l from-green-600/10 to-primary/5 rounded-full blur-[120px] animate-pulse-soft" style={{ animationDuration: '8s', animationDelay: '2s' }} />

      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-4 h-4 rounded-full bg-primary/30 animate-float" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-40 left-40 w-3 h-3 rounded-full bg-green-500/30 animate-float" style={{ animationDuration: '8s', animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-primary/40 animate-float-slow" />

      <div className="relative container-premium">
        <div className="grid gap-10 lg:gap-16 xl:gap-20 lg:grid-cols-2 items-center">
          {/* Image */}
          <div
            ref={imageRef}
            className={cn(
              "relative order-1 lg:order-1",
              "animate-on-scroll animate-left",
              imageVisible && "is-visible"
            )}
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Glow behind image */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/30 via-green-500/20 to-green-600/30 blur-3xl animate-pulse-soft" style={{ animationDuration: '6s' }} />

              {/* Main Profile Image */}
              <div className="relative group">
                <div
                  className={cn(
                    "relative overflow-hidden rounded-2xl sm:rounded-3xl",
                    "shadow-2xl",
                    "border-4 border-background",
                    "transition-transform duration-700 group-hover:scale-[1.02]"
                  )}
                >
                  <Image
                    src="https://www.pascal-elektrotechnik.de/wp-content/uploads/go-x/u/13b65ebc-601b-4aad-bb01-e89b266ad337/l158,t0,w1500,h1500/image-480x480.jpg"
                    alt="Pascal Lienert - Elektrotechnik-Meister"
                    width={480}
                    height={480}
                    className="aspect-square w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Shine effect */}
                  <div className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100",
                    "bg-gradient-to-r from-transparent via-white/20 to-transparent",
                    "-translate-x-full group-hover:translate-x-full",
                    "transition-all duration-1000 ease-out"
                  )} />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 -z-10 h-full w-full rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/30 to-green-600/30" />
              <div className="absolute -top-4 -left-4 -z-10 h-24 w-24 sm:h-32 sm:w-32 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-green-600/20 animate-pulse-soft" />

              {/* Stats Cards */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 sm:-bottom-8 flex gap-3 sm:gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className={cn(
                        "bg-card rounded-xl sm:rounded-2xl shadow-2xl",
                        "p-3 sm:p-4 border-2 border-primary/20",
                        "transition-all duration-500 hover:scale-105 hover:-translate-y-1",
                        "hover:shadow-[0_20px_40px_-15px_rgba(22,163,74,0.3)]"
                      )}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex flex-col items-center gap-1">
                        <div
                          className={cn(
                            "flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center",
                            "rounded-lg sm:rounded-xl bg-gradient-to-br from-primary to-green-600",
                            "shadow-lg shadow-primary/30"
                          )}
                        >
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                        </div>
                        <p className="text-lg sm:text-xl font-bold text-foreground">
                          {stat.value}
                        </p>
                        <p className="text-[10px] sm:text-xs text-muted-foreground font-medium">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            ref={contentRef}
            className={cn(
              "order-2 lg:order-2 pt-12 sm:pt-16 lg:pt-0",
              "animate-on-scroll animate-right",
              contentVisible && "is-visible"
            )}
          >
            <Badge
              variant="outline"
              className={cn(
                "mb-4 sm:mb-6 px-4 py-2 text-xs sm:text-sm font-semibold",
                "border-2 border-primary/30 bg-primary/10",
                "shadow-lg shadow-primary/10"
              )}
            >
              Über mich
              <Sparkles className="ml-2 h-3 w-3 text-primary animate-pulse" />
            </Badge>

            <h2 className="text-headline">
              Ihr zuverlässiger Partner für{" "}
              <span className="text-gradient-animated">Elektrotechnik</span>
            </h2>

            <div className="mt-4 sm:mt-6 space-y-4 text-body-lg text-muted-foreground">
              <p>
                Ich bin{" "}
                <span className="font-bold text-foreground">
                  Pascal Lienert
                </span>
                , Ihr Ansprechpartner für individuelle Elektrotechnik-Projekte
                in Neuenstadt am Kocher und Umgebung.
              </p>
              <p>
                Ich biete meinen privaten und gewerblichen Kunden innovative
                Lösungen an. Dabei lege ich großen Wert auf{" "}
                <span className="font-bold text-primary">
                  Qualität und Kundenzufriedenheit
                </span>{" "}
                – von der ersten Beratung bis zur finalen Umsetzung.
              </p>
            </div>

            {/* Qualities List */}
            <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              {qualities.map((quality, index) => (
                <li
                  key={quality}
                  className={cn(
                    "flex items-start gap-3 group",
                    "p-2 -mx-2 rounded-lg",
                    "transition-all duration-300 hover:bg-primary/5"
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div
                    className={cn(
                      "flex h-6 w-6 shrink-0 items-center justify-center",
                      "rounded-full bg-gradient-to-br from-primary to-green-600",
                      "shadow-lg shadow-primary/30",
                      "transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                    )}
                  >
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span
                    className={cn(
                      "text-sm sm:text-base text-muted-foreground font-medium",
                      "transition-colors duration-300 group-hover:text-foreground"
                    )}
                  >
                    {quality}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8 sm:mt-10">
              <Button
                asChild
                size="xl"
                className={cn(
                  "group w-full sm:w-auto",
                  "bg-gradient-to-r from-primary via-green-600 to-primary bg-[length:200%_100%]",
                  "hover:bg-[position:100%_0]",
                  "shadow-2xl shadow-primary/30",
                  "transition-all duration-500",
                  "hover:shadow-[0_20px_60px_-15px_rgba(22,163,74,0.5)]",
                  "hover:scale-[1.03] active:scale-[0.98]"
                )}
              >
                <a href="tel:+491739538984" className="gap-2.5">
                  <Phone className="h-5 w-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                  <span className="font-bold">Jetzt Kontakt aufnehmen</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
