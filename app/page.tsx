"use client";

import Image from "next/image";
import { SpeakerCard } from "@/components/SpeakerCard";
import { KeyLogo } from "@/components/KeyLogo";
import { Calendar, Clock, Mail, Phone } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-screen relative overflow-hidden font-sans selection:bg-brand-cyan/30">
      {/* Real Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background v3.png"
          alt="Webinar Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-20 flex flex-col min-h-screen">
        {/* Header Logo */}
        <div className=""></div>
        <header className="mb-12">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center">
             <Image src='ogle-logo.svg' alt="ogle-logo" width={50} height={50} />
            </div>
            <span className="text-3xl font-bold text-white tracking-tight">Ogle</span>
          </div>
        </header>

        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="md:w-3/4">
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-4 tracking-tighter">
              Ogle Agent<br />Summit
            </h1>
            <p className="text-xl md:text-2xl font-bold text-white mb-6 leading-tight">
              Inspection to Payment: Why Deals<br className="hidden md:block" /> Fall Through (and How to Fix It)
            </p>
            <div className="w-full h-1 bg-white/30 mb-6"></div>
            <p className="text-lg md:text-xl font-medium text-white/90 max-w-md leading-snug">
              This Webinar is for Real Estate Agents and Realtors serious about making it BIG
            </p>
          </div>

          {/* Large Key Graphic */}
          <div className="absolute -top-10 right-0 w-48 md:w-80 z-50 h-auto opacity-80 pointer-events-none hidden md:block">
            <Image
              src="/Asset 2.png"
              alt="Key Graphic"
              width={320}
              height={600}
              className="w-full h-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            />
          </div>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
          <SpeakerCard
            name="Jolaoluwa Abokede"
            title="Head of Marketing, Ogle"
            image="/BeautyPlus_20230214214230963_save.png"
          />
          <SpeakerCard
            name="Martin Afolue"
            title="Real Estate Entrepreneur"
            image="/IMG_7504.png"
          />
          <SpeakerCard
            name="Noah Inegbedion"
            title="Real Estate Expert"
            image="/IMG_7503.png"
          />
        </div>

        {/* Registration & QR Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mt-auto">
          <div className="flex-1 w-full space-y-8">
            <button className="w-full py-6 cursor-pointer md:py-8 bg-gradient-to-b from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 border-2 border-white/50 text-white font-black text-3xl md:text-5xl rounded-3xl transition-all active:scale-[0.98] shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-sm">
              REGISTER NOW!
            </button>

            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex items-center gap-4 text-white">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                  <Calendar className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-lg font-black leading-none uppercase">Tuesday 26th</p>
                  <p className="text-lg font-black leading-none uppercase">May 2026</p>
                </div>
              </div>
              
              <div className="w-px h-12 bg-white/20 hidden md:block"></div>

              <div className="flex items-center gap-4 text-white">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-lg font-black leading-none uppercase">5pm</p>
                  <p className="text-lg font-black leading-none uppercase">WAT</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 bg-white p-6 rounded-4xl shadow-2xl">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <Image
                src="/qr-code.png"
                alt="QR Code"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-black font-black leading-tight">
              <p className="text-sm">SCAN</p>
              <p className="text-sm">QR CODE</p>
              <p className="text-sm">TO REGISTER</p>
            </div>
          </div>
        </div>

        {/* Footer */}
      </div>
        <footer className="mt-20 relative p-4 border-tr-20 bg-white border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-black font-medium">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="text-sm">@oglepropertyng</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <span className="text-sm">support@ogle.com.ng</span>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <span className="text-sm">+234 701 756 4750</span>
          </div>
        </footer>
    </main>
  );
}
