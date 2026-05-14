"use client";

import { Globe, Share2, MessageCircle, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-purple rounded-lg flex items-center justify-center text-white font-bold">O</div>
              <span className="text-2xl font-bold tracking-tight">Ogle</span>
            </div>
            <p className="text-muted-foreground">
              Empowering real estate agents with the technology and knowledge to scale their business to new heights.
            </p>
            <div className="flex gap-4">
              {[Globe, Share2, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass border-white/5 flex items-center justify-center text-muted-foreground hover:text-brand-purple hover:border-brand-purple/30 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={18} className="text-brand-purple" />
                <a href="mailto:support@ogle.com.ng">support@ogle.com.ng</a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Phone size={18} className="text-brand-purple" />
                <a href="tel:+2347017564750">+234 701 756 4750</a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={18} className="text-brand-purple mt-1" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["About Ogle", "Webinars", "Agent Resources", "Privacy Policy", "Terms of Service"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-brand-purple transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">Get the latest real estate tips and event updates.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm flex-1 focus:outline-none focus:border-brand-purple/50"
              />
              <button className="bg-brand-purple text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-brand-purple/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ogle Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
