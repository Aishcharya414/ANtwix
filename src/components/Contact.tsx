"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight, MessageSquare } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: <Phone className="text-blue-500" size={24} />,
      label: "Call Us",
      value1: "+94 72 499 8153",
      value2: "+94 76 287 4257",
      href1: "tel:+94724998153",
      href2: "tel:+94762874257",
    },
    {
      icon: <Mail className="text-purple-500" size={24} />,
      label: "Email Us",
      value1: "antwix.an@gmail.com",
      href1: "mailto:antwix.an@gmail.com",
    },
    {
      icon: <MessageSquare className="text-pink-500" size={24} />,
      label: "Support",
      value1: "Available 24/7",
      href1: "#inquiry",
    },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Touch.</span>
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start your next digital project? Reach out to us through any of these 
            channels and we'll get back to you immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/5 border border-white/10 p-10 rounded-[32px] hover:border-blue-500/50 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                {method.icon}
              </div>
              <h3 className="text-gray-500 font-medium uppercase tracking-widest text-xs mb-4">
                {method.label}
              </h3>
              <div className="space-y-2">
                <a
                  href={method.href1}
                  className="block text-xl md:text-2xl font-bold text-white hover:text-blue-400 transition-colors"
                >
                  {method.value1}
                </a>
                {method.value2 && (
                  <a
                    href={method.href2}
                    className="block text-xl md:text-2xl font-bold text-white hover:text-blue-400 transition-colors"
                  >
                    {method.value2}
                  </a>
                )}
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-blue-500 group-hover:gap-4 transition-all">
                {method.label === "Support" ? "Start Inquiry" : "Connect Now"} <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
