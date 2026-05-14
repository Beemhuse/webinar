"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, Building2, Key, TrendingUp } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with Cityscape and Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2000"
          alt="Cityscape"
          fill
          className="object-cover opacity-40 mix-blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-indigo/90 via-brand-purple/40 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-brand-purple/20" />
      </div>

      {/* Floating Animated Icons */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[
          { Icon: Building2, top: "20%", left: "15%", delay: 0 },
          { Icon: Key, top: "60%", left: "80%", delay: 1 },
          { Icon: TrendingUp, top: "30%", left: "70%", delay: 0.5 },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="absolute p-3 rounded-2xl glass text-white/50"
            style={{ top: item.top, left: item.left }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
          >
            <item.Icon size={32} />
          </motion.div>
        ))}
      </div>

      <div className="container relative z-20 px-4 mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6 flex justify-center">
            <Badge variant="outline" className="px-4 py-1.5 glass text-white border-brand-purple/30 text-sm font-medium backdrop-blur-md">
              <Calendar className="w-4 h-4 mr-2 text-brand-lavender" />
              Tuesday 26th May 2026
              <span className="mx-2 text-white/30">|</span>
              <Clock className="w-4 h-4 mr-2 text-brand-lavender" />
              5pm WAT
            </Badge>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6"
          >
            Ogle <span className="text-gradient">Agent</span> Summit
          </motion.h1>

          <motion.h2 
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 mb-8 max-w-3xl mx-auto leading-tight"
          >
            Inspection to Payment: Why Deals Fall Through (and How to Fix It)
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto"
          >
            This webinar is for real estate agents and realtors serious about making it BIG. Join industry experts to master the closing process.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-brand-purple hover:bg-brand-purple/90 text-white px-8 py-6 text-lg rounded-full group transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.5)]"
              asChild
            >
              <a href="https://forms.gle/example" target="_blank" rel="noopener noreferrer">
                Register Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="glass text-white border-white/10 hover:bg-white/5 px-8 py-6 text-lg rounded-full transition-all"
            >
              View Schedule
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
