"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, ShieldCheck, DollarSign, Award, Users } from "lucide-react";

const benefits = [
  {
    title: "Increase Closing Rate",
    description: "Our strategies are proven to reduce deal fallouts by over 40% in the first quarter.",
    icon: TrendingUp,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Build Trust",
    description: "Become the agent that clients and developers seek out for their most important deals.",
    icon: ShieldCheck,
    color: "bg-green-500/10 text-green-500",
  },
  {
    title: "Higher Commissions",
    description: "Close more deals faster and more reliably, leading to significant income growth.",
    icon: DollarSign,
    color: "bg-amber-500/10 text-amber-500",
  },
  {
    title: "Industry Recognition",
    description: "Earn a certificate of attendance and leverage the Ogle brand to boost your profile.",
    icon: Award,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "Agent Community",
    description: "Join an exclusive network of top-tier real estate professionals across the country.",
    icon: Users,
    color: "bg-pink-500/10 text-pink-500",
  },
];

export function Benefits() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-brand-purple/10 text-brand-purple border-brand-purple/20 mb-4 px-4 py-1">
              Benefits
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Level Up Your <span className="text-brand-purple">Career</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We provide the tools and knowledge you need to thrive in a competitive real estate market.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className={`w-14 h-14 rounded-2xl ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <benefit.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <Card className="h-full bg-brand-purple border-none relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-700">
                <TrendingUp size={120} />
              </div>
              <CardContent className="p-8 relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Start?</h3>
                <p className="text-white/80 mb-8 flex-grow">
                  Join 500+ agents who have already registered for this career-changing summit.
                </p>
                <a 
                  href="https://forms.gle/example" 
                  className="bg-white text-brand-purple font-bold py-4 px-6 rounded-xl text-center hover:bg-brand-lavender hover:text-white transition-all"
                >
                  Claim Your Free Seat
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
