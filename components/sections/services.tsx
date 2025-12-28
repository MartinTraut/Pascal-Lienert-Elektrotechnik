"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Home,
  Sun,
  Wrench,
  Lightbulb,
  AlertTriangle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Zap,
    title: "Elektroinstallation",
    description:
      "Neuinstallationen, Erweiterungen und Modernisierungen von elektrischen Anlagen für Privat- und Gewerbekunden.",
    image:
      "https://www.pascal-elektrotechnik.de/wp-content/uploads/go-x/u/0763649b-b055-421d-993c-d898be9048a7/l0,t84,w2000,h1333/image-1366x910.jpg",
    features: ["Neuinstallationen", "Erweiterungen", "Modernisierungen"],
    color: "from-primary to-green-600",
    shadowColor: "shadow-primary/20",
  },
  {
    icon: Home,
    title: "Smart Home",
    description:
      "Intelligente Gebäudesteuerung mit KNX, Busch-freeHome, DALI, Shelly und professioneller Netzwerktechnik.",
    image:
      "https://www.pascal-elektrotechnik.de/wp-content/uploads/go-x/u/d7fda986-c7f3-4bf7-92ab-83e8a6d9c8b0/l0,t0,w1620,h1079/image-1366x910.jpg",
    features: ["KNX", "Busch-freeHome", "DALI", "Shelly"],
    color: "from-blue-500 to-cyan-600",
    shadowColor: "shadow-blue-500/20",
  },
  {
    icon: Sun,
    title: "Photovoltaik",
    description:
      "PV-Anlagen, Batteriespeicher und Messkonzeptänderungen für Ü20-Anlagen. Nachhaltige Energie für Ihr Zuhause.",
    image:
      "https://www.pascal-elektrotechnik.de/wp-content/uploads/go-x/u/3b61d7da-8a0f-45f6-956d-d79de0763444/l0,t84,w2000,h1333/image-1366x910.jpg",
    features: ["PV-Anlagen", "Batteriespeicher", "Ü20-Anlagen"],
    color: "from-amber-500 to-orange-600",
    shadowColor: "shadow-amber-500/20",
  },
  {
    icon: Wrench,
    title: "Bad & Küche",
    description:
      "Professionelle elektrische Anschlussanpassungen bei Modernisierungen von Bad und Küche.",
    image:
      "https://www.pascal-elektrotechnik.de/wp-content/uploads/go-x/u/f684a5a7-9d05-4c7b-824f-732875cb02d4/l0,t84,w2000,h1332/image-1366x910.jpg",
    features: ["Anschlussanpassungen", "Modernisierung"],
    color: "from-indigo-500 to-purple-600",
    shadowColor: "shadow-indigo-500/20",
  },
  {
    icon: Lightbulb,
    title: "Beleuchtung",
    description:
      "Dimmer-Installationen und professionelle KNX/DALI-Beleuchtungssteuerung für optimales Ambiente.",
    image:
      "https://www.pascal-elektrotechnik.de/wp-content/uploads/go-x/u/ab3610b5-9485-481d-84ff-53797ab62ded/l0,t84,w2000,h1332/image-1366x910.jpg",
    features: ["Dimmer", "KNX-Beleuchtung", "DALI"],
    color: "from-yellow-500 to-amber-600",
    shadowColor: "shadow-yellow-500/20",
  },
  {
    icon: AlertTriangle,
    title: "Fehlersuche & Reparaturen",
    description:
      "Schnelle und kompetente Unterstützung bei elektrischen Problemen und Störungen.",
    image:
      "https://www.pascal-elektrotechnik.de/wp-content/uploads/go-x/u/5d3fd286-c81a-4625-8068-fdac7d3f7734/l0,t84,w2000,h1333/image-1366x910.jpg",
    features: ["Schnelle Hilfe", "Störungsbehebung", "Reparaturen"],
    color: "from-rose-500 to-red-600",
    shadowColor: "shadow-rose-500/20",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const { ref, isVisible } = useAnimateOnScroll<HTMLDivElement>();
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={cn("animate-on-scroll", isVisible && "is-visible")}
      style={{ animationDelay: `${(index % 3) * 100}ms` }}
    >
      <Card
        className={cn(
          "group h-full overflow-hidden",
          "bg-card/80 backdrop-blur-sm border-2 border-border/30",
          "shadow-xl hover:shadow-2xl",
          "transition-all duration-700 ease-out",
          "hover:-translate-y-3 hover:border-primary/30",
          service.shadowColor
        )}
      >
        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-all duration-1000 ease-out group-hover:scale-110 group-hover:rotate-1"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 transition-all duration-500 group-hover:from-black/70" />

          {/* Color Overlay on Hover */}
          <div className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500",
            `bg-gradient-to-br ${service.color}`
          )} />

          {/* Icon Badge */}
          <div className="absolute bottom-4 left-4">
            <div
              className={cn(
                "flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center",
                "rounded-xl sm:rounded-2xl bg-gradient-to-br",
                "shadow-2xl border border-white/20",
                "transition-all duration-500",
                "group-hover:scale-110 group-hover:rotate-6",
                "group-hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.5)]",
                service.color
              )}
            >
              <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white transition-transform duration-300 group-hover:scale-110" />
            </div>
          </div>

          {/* Arrow on Hover */}
          <div
            className={cn(
              "absolute bottom-4 right-4",
              "flex h-12 w-12 items-center justify-center",
              "rounded-full bg-white/20 backdrop-blur-md border border-white/30",
              "opacity-0 translate-x-6 scale-75",
              "transition-all duration-500",
              "group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100"
            )}
          >
            <ArrowRight className="h-5 w-5 text-white" />
          </div>

          {/* Shine Effect */}
          <div
            className={cn(
              "absolute inset-0 opacity-0 group-hover:opacity-100",
              "bg-gradient-to-r from-transparent via-white/30 to-transparent",
              "-translate-x-full group-hover:translate-x-full",
              "transition-all duration-1000 ease-out"
            )}
          />

          {/* Top glow */}
          <div className={cn(
            "absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-500",
            `bg-gradient-to-r ${service.color}`,
            "blur-sm"
          )} />
        </div>

        <CardHeader className="pb-3 relative">
          {/* Background glow on hover */}
          <div className={cn(
            "absolute -top-2 left-0 right-0 h-12 opacity-0 group-hover:opacity-30 transition-opacity duration-500",
            `bg-gradient-to-b ${service.color}`,
            "blur-2xl"
          )} />

          <CardTitle
            className={cn(
              "relative text-lg sm:text-xl font-bold",
              "transition-all duration-300 group-hover:text-primary"
            )}
          >
            {service.title}
          </CardTitle>
          <CardDescription className="relative text-sm sm:text-base leading-relaxed text-muted-foreground/90">
            {service.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="relative">
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {service.features.map((feature, featureIndex) => (
              <Badge
                key={feature}
                variant="secondary"
                className={cn(
                  "text-xs font-semibold",
                  "bg-primary/10 text-primary border border-primary/20",
                  "transition-all duration-300",
                  "hover:bg-primary hover:text-white hover:border-primary",
                  "hover:shadow-lg hover:shadow-primary/20"
                )}
                style={{ transitionDelay: `${featureIndex * 50}ms` }}
              >
                {feature}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function ServicesSection() {
  const { ref: headerRef, isVisible: headerVisible } =
    useAnimateOnScroll<HTMLDivElement>();

  return (
    <section id="leistungen" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      {/* Animated Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/10 to-green-400/5 rounded-full blur-[150px] animate-pulse-soft" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-green-600/10 to-emerald-400/5 rounded-full blur-[120px] animate-pulse-soft" style={{ animationDuration: '10s', animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px] animate-pulse-soft" style={{ animationDuration: '12s' }} />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative container-premium">
        {/* Header */}
        <div
          ref={headerRef}
          className={cn(
            "mx-auto max-w-3xl text-center mb-12 sm:mb-16 lg:mb-20",
            "animate-on-scroll",
            headerVisible && "is-visible"
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
            <Zap className="mr-2 h-3.5 w-3.5 text-primary" />
            Leistungen
            <Sparkles className="ml-2 h-3 w-3 text-primary animate-pulse" />
          </Badge>
          <h2 className="text-headline">
            Professionelle{" "}
            <span className="text-gradient-animated">Elektrotechnik</span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>für jeden Bedarf
          </h2>
          <p className="mt-4 sm:mt-6 text-body-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Von der klassischen Elektroinstallation bis zur modernen Smart
            Home-Lösung – das komplette Leistungsspektrum aus einer Hand.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
