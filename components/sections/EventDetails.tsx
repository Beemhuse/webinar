"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CountdownTimer } from "@/components/CountdownTimer";
import { CheckCircle2, Zap, Target, Users2, Trophy } from "lucide-react";

const takeaways = [
  {
    title: "Master the Inspection",
    description: "Learn how to prepare your clients and properties to sail through inspections without hiccups.",
    icon: Target,
  },
  {
    title: "Closing the Gap",
    description: "Discover the psychology behind deal fallouts and how to bridge the gap from inspection to payment.",
    icon: Zap,
  },
  {
    title: "Professional Credibility",
    description: "Build a reputation as a closer that other agents and clients trust implicitly.",
    icon: Trophy,
  },
  {
    title: "Networking",
    description: "Connect with high-performing realtors and share strategies that work in the current market.",
    icon: Users2,
  },
];

export function EventDetails() {
  return (
    <section className="py-24 bg-brand-indigo/5 relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-brand-purple/10 text-brand-purple border-brand-purple/20 mb-6 px-4 py-1">
              Event Details
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Why You Can&apos;t Afford to <span className="text-brand-purple">Miss This</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Too many deals fall through at the final hurdle. We&apos;re giving you the blueprint to ensure every inspection leads to a successful payment.
            </p>

            <div className="space-y-6">
              {takeaways.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-xl bg-white dark:bg-white/5 border border-brand-purple/20 flex items-center justify-center text-brand-purple shadow-sm">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-brand-purple/20 blur-3xl rounded-full opacity-50" />
            <Card className="relative glass border-white/10 p-8 md:p-12 shadow-2xl overflow-hidden">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold mb-2">Webinar Starts In</h3>
                <p className="text-muted-foreground">Secure your spot before time runs out!</p>
              </div>
              
              <CountdownTimer targetDate="2026-05-26T17:00:00+01:00" />

              <div className="mt-12 pt-12 border-t border-white/10 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center text-brand-purple">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-lg font-medium">Free Access for Registered Agents</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center text-brand-purple">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-lg font-medium">Live Q&A with Industry Leaders</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center text-brand-purple">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-lg font-medium">Exclusive Closing Strategy PDF</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
