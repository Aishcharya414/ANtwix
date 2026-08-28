"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[140px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2], x: [0, -70, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[160px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
            <Image
              src="/logo-removebg.png"
              alt="ANtwix"
              fill
              sizes="(max-width: 768px) 96px, 128px"
              loading="eager"
              className="object-contain relative z-10"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
        >
          <Sparkles size={14} className="text-blue-400" />
          <span className="text-xs font-medium tracking-wider text-gray-300 uppercase">Next Gen Web Agency</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
            Modern Websites <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Built Fast.
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
          >
            We create responsive and modern websites for businesses and individuals, blending advanced technology with exceptional design.
          </motion.p>

          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex items-center gap-8 px-8 py-4 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl">
              <div>
                <p className="text-2xl font-black text-white">13</p>
                <p className="text-xs uppercase tracking-wider text-gray-400">Projects</p>
              </div>
              <div className="h-10 w-px bg-white/15" />
              <div>
                <p className="text-2xl font-black text-white">8</p>
                <p className="text-xs uppercase tracking-wider text-gray-400">Clients</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/projects"
                className="group flex items-center gap-2 px-10 py-4 bg-white text-black font-bold rounded-2xl hover:bg-gray-100 transition-all text-lg"
              >
                View Projects
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                href="/#contact"
                className="px-10 py-4 border border-white/20 text-white font-bold rounded-2xl backdrop-blur-xl transition-all text-lg"
              >
                Contact Us
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
