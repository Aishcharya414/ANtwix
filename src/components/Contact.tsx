"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    { icon: <Mail size={24} />, label: "Email", value: "hello@antwix.com", href: "mailto:hello@antwix.com" },
    { icon: <Phone size={24} />, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: <MapPin size={24} />, label: "Location", value: "New York, NY", href: "#" },
  ];

  return (
    <section id="contact" className="py-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Let's build something <br />great together.</h2>
            <p className="text-gray-400 mb-10 text-lg">
              Ready to take your digital products to the next level? 
              Reach out and let's discuss how we can help your business grow.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* This could be a simplified map or illustration */}
          <div className="relative aspect-square md:aspect-auto md:h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center border border-white/10">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-32 h-32 rounded-full bg-blue-500 blur-3xl"
            />
            <span className="text-8xl">🚀</span>
          </div>
        </div>
      </div>
    </section>
  );
}
