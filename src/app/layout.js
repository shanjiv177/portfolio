import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://shanjiv.me"),
  title: {
    default: "Shanjiv A: systems, infrastructure and networks",
    template: "%s | Shanjiv A",
  },
  description:
    "Shanjiv A is a CS undergrad at NIT Karnataka who runs infrastructure for IRIS and builds systems from scratch in C and C++.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${jetbrains.variable}`}>
      <body className="min-h-dvh flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] btn"
        >
          Skip to content
        </a>
        <Navbar />
        <div id="main" className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
