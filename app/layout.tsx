import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const playfairDisplayHeading = Playfair_Display({subsets:['latin'],variable:'--font-heading'});

const notoSans = Noto_Sans({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ogle Agent Summit | Inspection to Payment",
  description: "Join the Ogle Agent Summit to learn why deals fall through and how to fix it. A webinar for real estate agents and realtors serious about making it BIG.",
  openGraph: {
    title: "Ogle Agent Summit",
    description: "Inspection to Payment: Why Deals Fall Through (and How to Fix It)",
    images: ["/webinar.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ogle Agent Summit",
    description: "Inspection to Payment: Why Deals Fall Through (and How to Fix It)",
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
      className={cn("h-full", "antialiased", "dark", geistSans.variable, geistMono.variable, notoSans.variable, playfairDisplayHeading.variable)}
      style={{ colorScheme: 'dark' }}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
