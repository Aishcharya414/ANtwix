"use client";

import { motion } from "framer-motion";

export default function OurMission() {
  return (
    <section id="mission" className="py-15 relative overflow-hidden bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-white/5 p-8 md:p-12 text-center backdrop-blur-xl"
        >
          <p className="text-xl uppercase tracking-[0.3em] text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text mb-4">Our Mission</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95] mb-6">
            Quality, creativity and
            <span className="block text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text">
              reliability in every build.
            </span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
            To deliver high-quality, custom-built websites that combine creativity, performance, and reliability while providing exceptional service and helping our clients establish a powerful online presence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}