"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section id="about" className="py-15 relative overflow-hidden bg-black border-t border-white/5">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-white/5 p-8 md:p-12 text-center backdrop-blur-xl"
        >
          <p className="text-xl uppercase tracking-[0.3em] text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text mb-4">About Us</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95] mb-6">
            Building strong digital presence with
            <span className="block text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text">
              tailored web solutions.
            </span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
            At ANTwix, we transform your ideas into high-quality digital solutions. From understanding every single requirement to designing, developing, testing, and deploying a fully responsive website, we handle the entire process with precision and care. We specialize in custom websites, e-commerce stores, educational portals, landing pages and other web solutions, helping individuals, businesses and organizations build a strong and lasting online presence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}