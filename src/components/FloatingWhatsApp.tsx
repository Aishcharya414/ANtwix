"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const whatsappUrl = "https://wa.me/94762874257?text=Hi%20ANtwix%2C%20I%20want%20to%20chat%20about%20a%20project.";

function WhatsAppMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="currentColor">
      <path d="M19.05 4.93A9.94 9.94 0 0 0 12.02 2C6.49 2 2 6.49 2 12.02c0 1.76.46 3.48 1.33 4.99L2 22l5.14-1.3a10 10 0 0 0 4.88 1.24h.01c5.53 0 10.02-4.49 10.02-10.02 0-2.68-1.04-5.2-2.95-7.01Zm-7.03 15.41h-.01a8.3 8.3 0 0 1-4.24-1.16l-.3-.17-3.05.77.81-2.97-.19-.31a8.28 8.28 0 0 1-1.27-4.45c0-4.58 3.73-8.31 8.32-8.31 2.22 0 4.31.86 5.88 2.44a8.25 8.25 0 0 1 2.45 5.88c0 4.59-3.73 8.28-8.4 8.28Zm4.57-6.2c-.25-.13-1.45-.72-1.68-.8-.22-.08-.39-.13-.55.13-.16.25-.63.8-.77.97-.14.17-.28.19-.53.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.39.11-.52.11-.11.25-.28.38-.42.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.55-1.33-.75-1.82-.2-.48-.41-.42-.55-.42h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.09 0 1.23.9 2.42 1.03 2.59.13.17 1.77 2.71 4.29 3.8.6.26 1.07.42 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.45-.59 1.65-1.15.2-.56.2-1.04.14-1.15-.06-.11-.22-.17-.47-.3Z" />
    </svg>
  );
}

export default function FloatingWhatsApp() {
  const boundsRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={boundsRef} className="fixed inset-0 z-[60] pointer-events-none overflow-hidden">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        drag
        dragMomentum={false}
        dragConstraints={boundsRef}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="pointer-events-auto absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_35px_rgba(37,211,102,0.45)] ring-4 ring-white/90 cursor-grab active:cursor-grabbing"
        aria-label="Message us on WhatsApp"
      >
        <WhatsAppMark />
      </motion.a>
    </div>
  );
}