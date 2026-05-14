import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const aptos = localFont({
  src: [
    {
      path: "../public/font/Aptos.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/Aptos-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/font/Aptos-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ogle Agent Summit | Inspection to Payment",
  description:
    "Join the Ogle Agent Summit to learn why deals fall through and how to fix it. A webinar for real estate agents and realtors serious about making it BIG.",
  openGraph: {
    title: "Ogle Agent Summit",
    description:
      "Inspection to Payment: Why Deals Fall Through (and How to Fix It)",
    images: ["/webinar.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ogle Agent Summit",
    description:
      "Inspection to Payment: Why Deals Fall Through (and How to Fix It)",
    images: ["/webinar.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        "dark",
        aptos.variable
      )}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
