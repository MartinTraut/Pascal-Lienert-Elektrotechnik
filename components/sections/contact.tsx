"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { cn } from "@/lib/utils";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+49 173 9538984",
    href: "tel:+491739538984",
    action: "Anrufen",
    color: "from-primary to-green-600",
    shadowColor: "shadow-primary/30",
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: "pascal.elektrotechnik@gmail.com",
    href: "mailto:pascal.elektrotechnik@gmail.com",
    action: "E-Mail senden",
    color: "from-emerald-500 to-teal-600",
    shadowColor: "shadow-emerald-500/30",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Schafgasse 28, 74196 Neuenstadt am Kocher",
    href: "https://maps.google.com/?q=Schafgasse+28,+74196+Neuenstadt+am+Kocher",
    action: "Route planen",
    color: "from-sky-500 to-blue-600",
    shadowColor: "shadow-sky-500/30",
  },
];

const openingHours = [
  { day: "Montag – Freitag", time: "16:00 – 20:00 Uhr", available: true },
  { day: "Samstag", time: "08:00 – 20:00 Uhr", available: true },
  { day: "Sonntag", time: "Geschlossen", available: false },
];

const benefits = [
  "Kostenlose Erstberatung",
  "Faire Festpreise",
  "Schnelle Reaktionszeit",
];

export function ContactSection() {
  const { ref: headerRef, isVisible: headerVisible } =
    useAnimateOnScroll<HTMLDivElement>();
  const { ref: cardsRef, isVisible: cardsVisible } =
    useAnimateOnScroll<HTMLDivElement>();
  const { ref: mapRef, isVisible: mapVisible } =
    useAnimateOnScroll<HTMLDivElement>();

  return (
    <section id="kontakt" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      {/* Animated Orbs */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] bg-gradient-to-tl from-primary/10 to-green-400/5 rounded-full blur-[150px] animate-pulse-soft" style={{ animationDuration: '8s' }} />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-gradient-to-br from-green-600/10 to-emerald-400/5 rounded-full blur-[120px] animate-pulse-soft" style={{ animationDuration: '10s', animationDelay: '2s' }} />

      {/* Decorative elements */}
      <div className="absolute top-32 right-32 w-3 h-3 rounded-full bg-primary/40 animate-float" style={{ animationDuration: '5s' }} />
      <div className="absolute bottom-48 left-24 w-4 h-4 rounded-full bg-green-500/30 animate-float-slow" />

      <div className="relative container-premium">
        {/* Section Header with Image */}
        <div
          ref={headerRef}
          className={cn(
            "mx-auto max-w-4xl text-center",
            "animate-on-scroll",
            headerVisible && "is-visible"
          )}
        >
          {/* Contact Image */}
          <div className="mx-auto mb-8 sm:mb-10 w-36 h-28 sm:w-52 sm:h-40 lg:w-64 lg:h-48 relative group">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/30 to-green-600/30 blur-2xl animate-pulse-soft" style={{ animationDuration: '5s' }} />
            <div
              className={cn(
                "relative overflow-hidden rounded-2xl",
                "border-4 border-primary/20",
                "shadow-2xl",
                "transition-all duration-700 group-hover:scale-105 group-hover:shadow-[0_30px_60px_-20px_rgba(22,163,74,0.4)]"
              )}
            >
              <Image
                src="https://www.pascal-elektrotechnik.de/wp-content/uploads/go-x/u/eae27877-be34-4ad0-8c8a-3e0e81d6de67/l49,t0,w1799,h1500/image-480x400.jpg"
                alt="Kontakt aufnehmen - Pascal Lienert Elektrotechnik"
                width={480}
                height={400}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Shine effect */}
              <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-100",
                "bg-gradient-to-r from-transparent via-white/30 to-transparent",
                "-translate-x-full group-hover:translate-x-full",
                "transition-all duration-1000 ease-out"
              )} />
            </div>
          </div>

          <Badge
            variant="outline"
            className={cn(
              "mb-4 sm:mb-6 px-4 py-2 text-xs sm:text-sm font-semibold",
              "border-2 border-primary/30 bg-primary/10",
              "shadow-lg shadow-primary/10"
            )}
          >
            <Send className="mr-2 h-3.5 w-3.5 text-primary" />
            Kontakt
            <Sparkles className="ml-2 h-3 w-3 text-primary animate-pulse" />
          </Badge>

          <h2 className="text-headline">
            Lassen Sie uns über
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="text-gradient-animated">Ihr Projekt sprechen</span>
          </h2>

          <p className="mt-4 sm:mt-6 text-body-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Haben Sie Fragen oder möchten Sie ein Projekt besprechen? Ich freue
            mich auf Ihre Nachricht und berate Sie gerne unverbindlich.
          </p>

          {/* Benefits */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className={cn(
                  "flex items-center gap-2 text-xs sm:text-sm text-muted-foreground",
                  "transition-all duration-300 hover:text-foreground hover:scale-105"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-primary to-green-600 shadow-lg shadow-primary/20">
                  <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Cards */}
        <div
          ref={cardsRef}
          className={cn(
            "mt-12 sm:mt-16 lg:mt-20 grid gap-6 lg:gap-8 lg:grid-cols-2",
            "animate-on-scroll animate-up",
            cardsVisible && "is-visible"
          )}
        >
          {/* Contact Information Card */}
          <Card
            className={cn(
              "overflow-hidden border-2 border-border/30",
              "bg-card/80 backdrop-blur-sm",
              "shadow-2xl hover:shadow-[0_30px_60px_-20px_rgba(22,163,74,0.2)]",
              "transition-all duration-700 hover:-translate-y-2"
            )}
          >
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-br from-primary via-green-600 to-primary p-6 sm:p-8 text-primary-foreground overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '24px 24px'
                  }}
                />

                <div className="relative flex items-center gap-3 sm:gap-4">
                  <div
                    className={cn(
                      "flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center",
                      "rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-sm",
                      "shadow-lg border border-white/30"
                    )}
                  >
                    <Send className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold">
                      Kontaktieren Sie mich
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-primary-foreground/80">
                      So erreichen Sie mich am besten
                    </p>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-border/30 p-4 sm:p-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.icon === MapPin ? "_blank" : undefined}
                      rel={
                        item.icon === MapPin ? "noopener noreferrer" : undefined
                      }
                      className={cn(
                        "group flex items-center gap-4 sm:gap-5 py-5 sm:py-6",
                        "first:pt-0 last:pb-0",
                        "transition-all duration-500 hover:translate-x-3"
                      )}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div
                        className={cn(
                          "flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center",
                          "rounded-xl sm:rounded-2xl bg-gradient-to-br",
                          "shadow-xl border border-white/20",
                          "transition-all duration-500",
                          "group-hover:scale-110 group-hover:rotate-6",
                          `group-hover:${item.shadowColor}`,
                          item.color
                        )}
                      >
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm sm:text-base font-bold text-foreground break-all">
                          {item.value}
                        </p>
                      </div>
                      <div
                        className={cn(
                          "shrink-0 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center",
                          "rounded-full bg-primary/10",
                          "opacity-0 translate-x-4 scale-75",
                          "transition-all duration-500",
                          "group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100"
                        )}
                      >
                        <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Opening Hours Card */}
          <Card
            className={cn(
              "overflow-hidden border-2 border-border/30",
              "bg-card/80 backdrop-blur-sm",
              "shadow-2xl hover:shadow-[0_30px_60px_-20px_rgba(22,163,74,0.2)]",
              "transition-all duration-700 hover:-translate-y-2"
            )}
          >
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-br from-secondary via-secondary to-accent/50 p-6 sm:p-8 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                  }}
                />

                <div className="relative flex items-center gap-3 sm:gap-4">
                  <div
                    className={cn(
                      "flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center",
                      "rounded-xl sm:rounded-2xl bg-primary/20",
                      "shadow-lg"
                    )}
                  >
                    <Clock className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      Öffnungszeiten
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-muted-foreground">
                      Wann Sie mich erreichen können
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="space-y-3 sm:space-y-4">
                  {openingHours.map((item, index) => (
                    <div
                      key={item.day}
                      className={cn(
                        "group flex items-center justify-between",
                        "rounded-xl sm:rounded-2xl",
                        "bg-gradient-to-r from-muted/50 to-transparent",
                        "px-4 sm:px-5 py-4 sm:py-5",
                        "border border-transparent",
                        "transition-all duration-500",
                        "hover:from-primary/10 hover:border-primary/20 hover:shadow-lg"
                      )}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-sm sm:text-base font-semibold text-foreground">
                        {item.day}
                      </span>
                      <span
                        className={cn(
                          "text-sm sm:text-base font-bold px-3 py-1 rounded-lg",
                          item.available
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground bg-muted"
                        )}
                      >
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tip Box */}
                <div
                  className={cn(
                    "mt-6 sm:mt-8 rounded-xl sm:rounded-2xl",
                    "bg-gradient-to-br from-primary/10 via-green-600/5 to-primary/10",
                    "border-2 border-primary/20",
                    "p-4 sm:p-5",
                    "shadow-lg"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-green-600 shadow-lg shadow-primary/30">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      <span className="font-bold text-foreground">
                        Tipp:
                      </span>{" "}
                      Außerhalb der Öffnungszeiten erreichen Sie mich per E-Mail.
                      Ich melde mich schnellstmöglich bei Ihnen zurück.
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-6 sm:mt-8">
                  <Button
                    asChild
                    size="xl"
                    className={cn(
                      "group w-full",
                      "bg-gradient-to-r from-primary via-green-600 to-primary bg-[length:200%_100%]",
                      "hover:bg-[position:100%_0]",
                      "shadow-2xl shadow-primary/30",
                      "transition-all duration-500",
                      "hover:shadow-[0_20px_60px_-15px_rgba(22,163,74,0.5)]",
                      "hover:scale-[1.02] active:scale-[0.98]"
                    )}
                  >
                    <a href="tel:+491739538984" className="gap-2.5">
                      <Phone className="h-5 w-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                      <span className="font-bold">Jetzt anrufen</span>
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map */}
        <div
          ref={mapRef}
          className={cn(
            "mt-8 sm:mt-12",
            "animate-on-scroll animate-up",
            mapVisible && "is-visible"
          )}
        >
          <Card
            className={cn(
              "overflow-hidden border-2 border-border/30",
              "shadow-2xl hover:shadow-[0_30px_60px_-20px_rgba(22,163,74,0.2)]",
              "transition-all duration-700"
            )}
          >
            <div className="aspect-[16/9] sm:aspect-[21/9] bg-muted relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.0!2d9.3!3d49.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDEyJzAwLjAiTiA5wrAxOCcwMC4wIkU!5e0!3m2!1sde!2sde!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort Pascal Lienert Elektrotechnik"
                className="h-full w-full grayscale transition-all duration-1000 group-hover:grayscale-0"
              />

              {/* Overlay with address */}
              <div
                className={cn(
                  "absolute bottom-4 left-4 sm:bottom-6 sm:left-6",
                  "bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-2xl",
                  "p-4 sm:p-5 border-2 border-primary/20",
                  "transition-all duration-500",
                  "group-hover:shadow-[0_20px_40px_-15px_rgba(22,163,74,0.3)]",
                  "group-hover:scale-105"
                )}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div
                    className={cn(
                      "flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center",
                      "rounded-xl bg-gradient-to-br from-primary to-green-600",
                      "shadow-lg shadow-primary/30"
                    )}
                  >
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-bold text-foreground">
                      Pascal Lienert Elektrotechnik
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                      Schafgasse 28, 74196 Neuenstadt
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
