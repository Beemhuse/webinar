"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Registered Agents", value: "1,200+" },
  { label: "Successful Deals", value: "5,000+" },
  { label: "Partner Companies", value: "50+" },
];

const testimonials = [
  {
    text: "The Ogle summits are always packed with value. I learned strategies that helped me close two deals within a week of the last event.",
    author: "Tunde Williams",
    role: "Senior Realtor",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    text: "As a new agent, the 'Inspection to Payment' framework gave me the confidence to handle tough negotiations and succeed.",
    author: "Sarah Okeke",
    role: "Real Estate Consultant",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
];

export function SocialProof() {
  return (
    <section className="py-24 bg-brand-indigo/5">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-brand-purple/10 text-brand-purple border-brand-purple/20 mb-4 px-4 py-1">
              Social Proof
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Trusted by Thousands of <span className="text-brand-purple">Top Agents</span></h2>
            <p className="text-muted-foreground text-lg mb-10">
              Join a community of successful real estate professionals who are committed to excellence and constant growth.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-2xl glass-dark">
                  <div className="text-2xl md:text-3xl font-bold text-brand-purple mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
              <span className="ml-2 text-foreground font-semibold">4.9/5 Rating from past attendees</span>
            </div>
          </motion.div>

          <div className="space-y-6">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-8 rounded-3xl glass border-white/10 relative"
              >
                <Quote className="absolute top-6 right-8 text-brand-purple/20 w-12 h-12" />
                <p className="text-lg italic text-foreground/80 mb-6 relative z-10">
                  &quot;{t.text}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image src={t.avatar} alt={t.author} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-bold">{t.author}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
