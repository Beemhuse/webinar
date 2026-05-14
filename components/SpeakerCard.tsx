import Image from "next/image";
import { Check } from "lucide-react";

interface SpeakerCardProps {
  name: string;
  title: string;
  image: string;
}

export function SpeakerCard({ name, title, image }: SpeakerCardProps) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden mb-4 bg-[#c46dc4] border-2 border-white/10 group-hover:border-white/30 transition-all duration-300">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#00D2FF] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
          <Check className="w-5 h-5 text-white" strokeWidth={4} />
        </div>
      </div>
      <h3 className="text-white font-bold text-xl leading-tight mb-1">{name}</h3>
      <p className="text-white/80 text-sm font-medium">{title}</p>
    </div>
  );
}
