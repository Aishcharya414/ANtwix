"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function Inquiry() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", business: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="inquiry" className="py-32 relative overflow-hidden bg-black">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-16 rounded-[40px] shadow-2xl relative">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">Let's Talk <br /> <span className="text-blue-500">Business.</span></h2>
            <p className="text-gray-400 text-lg">Have a vision? We have the tools. Send us your project details below.</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm font-semibold text-gray-300 ml-1">Full Name</label>
                <input
                  id="fullName"
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all text-white placeholder-gray-600"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="workEmail" className="text-sm font-semibold text-gray-300 ml-1">Work Email</label>
                <input
                  id="workEmail"
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all text-white placeholder-gray-600"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-semibold text-gray-300 ml-1">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all text-white placeholder-gray-600"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="business" className="text-sm font-semibold text-gray-300 ml-1">Business Name</label>
                <input
                  id="business"
                  type="text"
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all text-white placeholder-gray-600"
                  placeholder="ANtwix Ltd."
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-gray-300 ml-1">Project Details</label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all text-white placeholder-gray-600 resize-none"
                placeholder="Tell us about your goals and timeline..."
              />
            </div>

            <motion.button
              disabled={status === "loading"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-black text-lg rounded-2xl flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all"
            >
              {status === "loading" ? (
                <>Sending... <Loader2 className="animate-spin" size={24} /></>
              ) : status === "success" ? (
                <>Sent Successfully <CheckCircle2 size={24} /></>
              ) : status === "error" ? (
                <>Try Again <AlertCircle size={24} /></>
              ) : (
                <>Send Inquiry <Send size={24} /></>
              )}
            </motion.button>

            <AnimatePresence>
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-400 font-medium"
                >
                  Thank you! We'll reach out to you within 24 hours.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-red-400 font-medium"
                >
                  Something went wrong. Please try again or email us directly.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
}
