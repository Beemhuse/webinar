import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

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
        "dark"
      )}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
