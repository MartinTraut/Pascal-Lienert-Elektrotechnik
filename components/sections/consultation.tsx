"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Phone,
  CheckCircle2,
  Zap,
  Sun,
  Lightbulb,
  ArrowRight,
  Sparkles,
  Star,
} from "lucide-react";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { cn } from "@/lib/utils";

const consultationTopics = [
  {
    icon: Zap,
    title: "Elektroinstallation",
    description: "Beratung zu Neuinstallationen, Erweiterungen und Modernisierungen",
    gradient: "from-primary to-green-600",
  },
  {
    icon: Sun,
    title: "PV-Anlagen bis 30 kWp",
    description: "Planung und Dimensionierung von Photovoltaik-Systemen",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Lightbulb,
    title: "Individuelle Lösungen",
    description: "Maßgeschneiderte Konzepte für Ihre Anforderungen",
    gradient: "from-blue-500 to-cyan-600",
  },
];

const benefits = [
  "Kostenlose Erstberatung",
  "Unverbindliche Angebote",
  "Persönliche Betreuung",
  "Schnelle Terminvergabe",
];

export function ConsultationSection() {
  const { ref: contentRef, isVisible: contentVisible } =
    useAnimateOnScroll<HTMLDivElement>();
  const { ref: imageRef, isVisible: imageVisible } =
    useAnimateOnScroll<HTMLDivElement>();

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-green-600/5" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/15 to-green-400/10 rounded-full blur-[150px] animate-pulse-soft" style={{ animationDuration: '7s' }} />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-green-600/15 to-emerald-400/10 rounded-full blur-[120px] animate-pulse-soft" style={{ animationDuration: '8s', animationDelay: '2s' }} />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative container-premium">
        <div className="grid gap-10 lg:gap-16 xl:gap-20 lg:grid-cols-2 items-center">
          {/* Content */}
          <div
            ref={contentRef}
            className={cn(
              "order-2 lg:order-1",
              "animate-on-scroll animate-left",
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
              <MessageCircle className="mr-2 h-3.5 w-3.5" />
              Beratung
              <Sparkles className="ml-2 h-3 w-3 text-primary animate-pulse" />
            </Badge>

            <h2 className="text-headline">
              Kompetente{" "}
              <span className="text-gradient-animated">Fachberatung</span>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>für Ihr Projekt
            </h2>

            <p className="mt-4 sm:mt-6 text-body-lg text-muted-foreground">
              Sie haben Fragen zu Elektroinstallation oder Photovoltaik? Ich berate
              Sie umfassend und finde gemeinsam mit Ihnen die optimale Lösung für
              Ihre Anforderungen.
            </p>

            {/* Topics */}
            <div className="mt-8 sm:mt-10 space-y-4">
              {consultationTopics.map((topic, index) => {
                const Icon = topic.icon;
                return (
                  <div
                    key={topic.title}
                    className={cn(
                      "group relative flex items-start gap-4 p-4 sm:p-5",
                      "rounded-2xl",
                      "bg-card/80 backdrop-blur-sm border border-border/50",
                      "shadow-lg hover:shadow-xl",
                      "transition-all duration-500",
                      "hover:-translate-y-1 hover:border-primary/30",
                      "overflow-hidden"
                    )}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Hover gradient background */}
                    <div className={cn(
                      "absolute inset-0 opacity-0 group-hover:opacity-100",
                      "bg-gradient-to-r from-primary/5 via-transparent to-green-600/5",
                      "transition-opacity duration-500"
                    )} />

                    <div
                      className={cn(
                        "relative flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center",
                        "rounded-xl sm:rounded-2xl bg-gradient-to-br",
                        "shadow-lg",
                        "transition-all duration-500 group-hover:scale-110 group-hover:rotate-3",
                        "group-hover:shadow-xl",
                        topic.gradient
                      )}
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="relative">
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {topic.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {topic.description}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <div className={cn(
                      "absolute right-4 top-1/2 -translate-y-1/2",
                      "opacity-0 translate-x-2",
                      "transition-all duration-300",
                      "group-hover:opacity-100 group-hover:translate-x-0"
                    )}>
                      <ArrowRight className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Benefits */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className={cn(
                    "flex items-center gap-2 text-sm text-muted-foreground",
                    "transition-all duration-300 hover:text-foreground"
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-primary to-green-600">
                    <CheckCircle2 className="h-3 w-3 text-white" />
                  </div>
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
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
                  <span className="font-bold">Beratung anfragen</span>
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="xl"
                className={cn(
                  "w-full sm:w-auto",
                  "border-2 border-primary/40 bg-background/50 backdrop-blur-sm",
                  "hover:border-primary hover:bg-primary/10",
                  "transition-all duration-300",
                  "hover:scale-[1.02]"
                )}
              >
                <a href="#kontakt" className="gap-2.5">
                  <span className="font-semibold">Mehr erfahren</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div
            ref={imageRef}
            className={cn(
              "relative order-1 lg:order-2",
              "animate-on-scroll animate-right",
              imageVisible && "is-visible"
            )}
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-green-500/10 to-green-600/20 rounded-3xl blur-2xl animate-pulse-soft" style={{ animationDuration: '6s' }} />

              {/* Main Image */}
              <div
                className={cn(
                  "relative overflow-hidden rounded-2xl sm:rounded-3xl",
                  "shadow-2xl",
                  "border-2 border-primary/10",
                  "group"
                )}
              >
                <Image
                  src="https://www.pascal-elektrotechnik.de/wp-content/uploads/go-x/u/eae27877-be34-4ad0-8c8a-3e0e81d6de67/l49,t0,w1799,h1500/image-480x400.jpg"
                  alt="Professionelle Elektrotechnik-Beratung"
                  width={480}
                  height={400}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />

                {/* Shine effect */}
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100",
                  "bg-gradient-to-r from-transparent via-white/20 to-transparent",
                  "-translate-x-full group-hover:translate-x-full",
                  "transition-all duration-1000 ease-out"
                )} />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 -z-10 h-full w-full rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/30 to-green-600/30" />
              <div className="absolute -top-4 -right-4 -z-10 h-20 w-20 sm:h-28 sm:w-28 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-green-600/20 animate-pulse-soft" />

              {/* Floating Badge */}
              <div
                className={cn(
                  "absolute -top-4 -right-4 sm:-top-6 sm:-right-6",
                  "bg-card rounded-xl sm:rounded-2xl shadow-2xl",
                  "p-3 sm:p-4 border-2 border-primary/20",
                  "animate-float-slow"
                )}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div
                    className={cn(
                      "flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center",
                      "rounded-lg sm:rounded-xl bg-gradient-to-br from-primary to-green-600",
                      "shadow-lg shadow-primary/30"
                    )}
                  >
                    <Star className="h-5 w-5 sm:h-6 sm:w-6 text-white fill-white" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-bold text-foreground">
                      Kostenlos
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Erstberatung
                    </p>
                  </div>
                </div>
              </div>

              {/* Second floating element */}
              <div
                className={cn(
                  "absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4",
                  "bg-gradient-to-br from-primary to-green-600",
                  "rounded-xl sm:rounded-2xl shadow-2xl shadow-primary/40",
                  "p-3 sm:p-4",
                  "animate-float",
                  "hidden sm:block"
                )}
                style={{ animationDelay: '1s', animationDuration: '5s' }}
              >
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="text-sm font-bold">Faire Preise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
