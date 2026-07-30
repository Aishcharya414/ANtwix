"use client";

import { motion } from "framer-motion";

export default function OurVision() {
  return (
    <section id="vision" className="py-15 relative overflow-hidden bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl rounded-[32px] border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 p-8 md:p-12 text-center shadow-[0_0_60px_rgba(37,99,235,0.12)]"
        >
          <p className="text-xl uppercase tracking-[0.3em] text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text mb-4">Our Vision</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95] mb-6">
            A trusted partner for
            <span className="block text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text">
              digital growth.
            </span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
            To become a trusted web development company, empowering individuals and organizations with innovative digital solutions that inspire growth and success.
          </p>
        </motion.div>
      </div>
    </section>
  );
}