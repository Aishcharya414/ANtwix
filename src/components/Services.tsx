"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, ShoppingCart, GraduationCap, StretchHorizontal, IdCardLanyard } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Websites",
    description: "Tailored business websites built to match your brand, goals, and content structure.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Stores",
    description: "Online stores designed to showcase products clearly and support smooth buying journeys.",
  },
  {
    icon: GraduationCap,
    title: "Educational Portals",
    description: "Learning platforms for schools, tutors, and institutions with organised content delivery.",
  },
  {
    icon: StretchHorizontal,
    title: "Landing Pages",
    description: "Focused one-page experiences built to convert visitors into enquiries or customers.",
  },
  {
    icon: IdCardLanyard,
    title: "Visiting Card Design & Printing",
    description: "Clean, professional card designs with print-ready layouts and brand-consistent styling.",
  },
];

const visitingCardImages = [
  "/visiting-cards/1.png",
  "/visiting-cards/2.png",
  "/visiting-cards/3.png",
  "/visiting-cards/4.png",
  "/visiting-cards/5.png",
  "/visiting-cards/6.png",
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-28 relative overflow-hidden bg-black border-t border-white/5">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <p className="text-xl uppercase tracking-[0.3em] text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text mb-4">
            Services
          </p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            What we can build for
            <span className="block text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text">
              your business.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We design practical digital solutions and print materials that help businesses look sharp, work smoothly, and grow with confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-[28px] border border-white/10 bg-white/5 p-7 md:p-8 backdrop-blur-xl hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-blue-400 group-hover:text-pink-400 transition-colors">
                  <Icon size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">{service.title}</h2>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 rounded-[32px] border border-white/10 bg-white/5 p-7 md:p-8 backdrop-blur-xl"
        >
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="text-xl uppercase tracking-[0.3em] text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text mb-4">
              Visiting Card Designs
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
              Print-ready designs made to
              <span className="block text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text">
                leave a strong impression.
              </span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              These are the visiting card designs we will showcase here once you add the image files to the public folder.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {visitingCardImages.map((src, index) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                <Image
                  src={src}
                  alt={`Visiting card design ${index + 1}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}