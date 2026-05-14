"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { QrCode, ScanLine } from "lucide-react";

export function QRCodeSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-dark border-brand-purple/20 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-purple to-transparent" />
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Register in Seconds</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Scan the QR code with your phone camera to open the registration form instantly on your mobile device.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Agent" />
                    </div>
                  ))}
                </div>
                <span className="text-sm font-medium text-muted-foreground">Join 1.2k+ agents already registered</span>
              </div>
            </div>

            <div className="relative group">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-3xl p-4 shadow-[0_0_50px_-10px_rgba(139,92,246,0.3)] relative overflow-hidden"
              >
                <QrCode className="w-full h-full text-brand-indigo" />
                
                {/* Animated Scan Line */}
                <motion.div
                  className="absolute left-0 right-0 h-1 bg-brand-purple z-10 shadow-[0_0_15px_rgba(139,92,246,0.8)]"
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
              
              <div className="absolute -bottom-4 -right-4 bg-brand-purple text-white p-3 rounded-2xl shadow-xl">
                <ScanLine size={24} className="animate-pulse" />
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-purple/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
