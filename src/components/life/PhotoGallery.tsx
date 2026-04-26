"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Construction } from "lucide-react";

// Placeholder images for the gallery
const row1Images = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
];

const row2Images = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
];

export default function PhotoGallery() {
  return (
    <div className="relative w-full">
      <div 
        className="w-full flex flex-col gap-4 overflow-hidden py-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 opacity-30 grayscale-50 blur-[2px] select-none" 
        style={{ 
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", 
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" 
        }}
      >
        {/* Row 1: Right to Left */}
        <motion.div
          className="flex gap-4 min-w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        >
          {[...row1Images, ...row1Images].map((src, i) => (
            <div key={`r1-${i}`} className="relative w-72 h-48 md:w-96 md:h-72 lg:w-[480px] lg:h-[320px] rounded-2xl overflow-hidden shrink-0 border border-white/5">
              <Image 
                src={src} 
                alt="Gallery image" 
                fill 
                sizes="(max-width: 768px) 288px, (max-width: 1024px) 384px, 480px" 
                priority={i < 4}
                className="object-cover" 
              />
            </div>
          ))}
        </motion.div>

        {/* Row 2: Left to Right */}
        <motion.div
          className="flex gap-4 min-w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
        >
          {[...row2Images, ...row2Images].map((src, i) => (
            <div key={`r2-${i}`} className="relative w-72 h-48 md:w-96 md:h-72 lg:w-[480px] lg:h-[320px] rounded-2xl overflow-hidden shrink-0 border border-white/5">
              <Image 
                src={src} 
                alt="Gallery image" 
                fill 
                sizes="(max-width: 768px) 288px, (max-width: 1024px) 384px, 480px" 
                priority={i < 4}
                className="object-cover" 
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* WIP Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-4">
        <div className="flex flex-col items-center gap-4 p-8 bg-background/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl max-w-md w-full text-center">
          <div className="p-3 bg-primary/20 rounded-full border border-primary/30">
            <Construction className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-2">Work in Progress</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Wiring up the external album integration. The full gallery experience will be available shortly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
