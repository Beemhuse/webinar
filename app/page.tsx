"use client";

import Image from "next/image";
import { SpeakerCard } from "@/components/SpeakerCard";
import { KeyLogo } from "@/components/KeyLogo";
import { Calendar, Clock, Mail, Phone } from "lucide-react";
import Link from "next/link";

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
              <Image
                src="ogle-logo.svg"
                alt="ogle-logo"
                width={50}
                height={50}
              />
            </div>
            <span className="text-3xl font-bold text-white tracking-tight">
              Ogle
            </span>
          </div>
        </header>

        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="md:w-3/4">
            <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.9] mb-4 tracking-tighter">
              Ogle Agent
              <br />
              Summit
            </h1>
            <p className="text-xl md:text-3xl font-bold text-white mb-6 leading-tight">
              Inspection to Payment: Why Deals
              <br className="hidden md:block" /> Fall Through (and How to Fix
              It)
            </p>
            <div className="w-full h-1 bg-white/30 mb-6"></div>
            <p className="text-lg md:text-xl font-medium text-white/90 max-w-md leading-snug">
              This Webinar is for Real Estate Agents and Realtors serious about
              making it BIG
            </p>
          </div>

          {/* Large Key Graphic */}
          <div className="absolute -top-8 right-70 w-48 md:w-50 z-50 h-auto opacity-80 pointer-events-none hidden md:block">
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
                  <p className="text-lg font-black leading-none uppercase">
                    Tuesday 26th
                  </p>
                  <p className="text-lg font-black leading-none uppercase">
                    May 2026
                  </p>
                </div>
              </div>

              <div className="w-px h-12 bg-white/20 hidden md:block"></div>

              <div className="flex items-center gap-4 text-white">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-lg font-black leading-none uppercase">
                    5pm
                  </p>
                  <p className="text-lg font-black leading-none uppercase">
                    WAT
                  </p>
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
      <footer className="mt-20  relative p-4 px-10 border-tr-20 bg-white border-white/10 flex flex-col md:flex-row md:text-2xl  justify-between items-center gap-8 text-black font-medium">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            <Link href="https://www.instagram.com/oglepropertyng" target="_blank" className="bg-black p-1 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <g fill="none">
                  <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                  <path
                    fill="#fff"
                    d="M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm-4 5a4 4 0 1 0 0 8a4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4a2 2 0 0 1 0-4m4.5-3.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
                  />
                </g>
              </svg>
            </Link>
            <Link href={""}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="#000"
                  fillRule="evenodd"
                  d="M16 21.75A5.75 5.75 0 0 0 21.75 16V8A5.75 5.75 0 0 0 16 2.25H8A5.75 5.75 0 0 0 2.25 8v8A5.75 5.75 0 0 0 8 21.75zM13.711 5.763A.75.75 0 0 0 12.25 6v9A2.25 2.25 0 1 1 10 12.75a.75.75 0 0 0 0-1.5A3.75 3.75 0 1 0 13.75 15V8.458c.767.712 1.847 1.292 3.25 1.292a.75.75 0 0 0 0-1.5c-.972 0-1.711-.4-2.259-.919c-.56-.532-.898-1.173-1.03-1.568"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
            <Link href={"https://web.facebook.com/oglepropertyng?_rdc=1&_rdr#"} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="#000"
                  fillRule="evenodd"
                  d="M15.725 22v-7.745h2.6l.389-3.018h-2.99V9.31c0-.874.243-1.47 1.497-1.47h1.598v-2.7a21 21 0 0 0-2.33-.12c-2.304 0-3.881 1.407-3.881 3.99v2.227H10v3.018h2.607V22H3.104C2.494 22 2 21.506 2 20.896V3.104C2 2.494 2.494 2 3.104 2h17.792C21.506 2 22 2.494 22 3.104v17.792c0 .61-.494 1.104-1.104 1.104z"
                />
              </svg>
            </Link>
            <span className="font-bold">@oglepropertyng</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 36 36"
          >
            <path d="M0 0h36v36H0z" fill="none" />
            <path
              fill="#000"
              d="M32.33 6a2 2 0 0 0-.41 0h-28a2 2 0 0 0-.53.08l14.45 14.39Z"
              className="clr-i-solid clr-i-solid-path-1"
            />
            <path
              fill="#000"
              d="m33.81 7.39l-14.56 14.5a2 2 0 0 1-2.82 0L2 7.5a2 2 0 0 0-.07.5v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-.12-.61M5.3 28H3.91v-1.43l7.27-7.21l1.41 1.41Zm26.61 0h-1.4l-7.29-7.23l1.41-1.41l7.27 7.21Z"
              className="clr-i-solid clr-i-solid-path-2"
            />
            <path fill="none" d="M0 0h36v36H0z" />
          </svg>

          <span className="font-bold">support@ogle.com.ng</span>
        </div>

        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              fill="#000"
              d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
            />
          </svg>
          <span className="font-bold">+234 701 756 4750</span>
        </div>
      </footer>
    </main>
  );
}
