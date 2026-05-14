"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const speakers = [
  {
    name: "Jolaoluwa Abokede",
    role: "Head of Marketing, Ogle",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    verified: true,
  },
  {
    name: "Martin Afolue",
    role: "Real Estate Entrepreneur",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    verified: true,
  },
  {
    name: "Noah Inegbedion",
    role: "Real Estate Expert",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
    verified: true,
  },
];

export function SpeakersSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="bg-brand-purple/10 text-brand-purple border-brand-purple/20 mb-4 px-4 py-1">
              Expert Speakers
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Learn from the <span className="text-brand-purple">Best</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our speakers are industry leaders with years of experience in real estate marketing, sales, and deal closing.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden glass-dark border-white/5 hover:border-brand-purple/30 transition-colors group">
                <div className="relative h-96 w-full">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {speaker.verified && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-brand-purple text-white border-none gap-1 px-3">
                        <CheckCircle2 size={14} />
                        Verified
                      </Badge>
                    </div>
                  )}

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{speaker.name}</h3>
                    <p className="text-brand-lavender font-medium">{speaker.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-purple/5 blur-[120px] rounded-full -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-indigo/5 blur-[150px] rounded-full" />
    </section>
  );
}
