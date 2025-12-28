import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pascal Lienert Elektrotechnik | Ihr Elektriker in Neuenstadt am Kocher",
  description:
    "Professionelle Elektroinstallationen, Smart Home, Photovoltaik und mehr. Pascal Lienert Elektrotechnik – Ihr zuverlässiger Partner für individuelle Elektrotechnik-Projekte in Neuenstadt am Kocher und Umgebung.",
  keywords: [
    "Elektriker",
    "Elektrotechnik",
    "Neuenstadt am Kocher",
    "Smart Home",
    "Photovoltaik",
    "Elektroinstallation",
    "KNX",
    "Beleuchtung",
    "Reparatur",
  ],
  authors: [{ name: "Pascal Lienert" }],
  creator: "Pascal Lienert Elektrotechnik",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://pascal-elektrotechnik.de",
    siteName: "Pascal Lienert Elektrotechnik",
    title: "Pascal Lienert Elektrotechnik | Ihr Elektriker in Neuenstadt am Kocher",
    description:
      "Professionelle Elektroinstallationen, Smart Home, Photovoltaik und mehr. Ihr zuverlässiger Partner für individuelle Elektrotechnik-Projekte.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
