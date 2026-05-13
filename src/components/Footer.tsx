"use client";

import Link from "next/link";
import Image from "next/image";

// Custom SVG components for social icons
const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M19.05 4.93A9.94 9.94 0 0 0 12.02 2C6.49 2 2 6.49 2 12.02c0 1.76.46 3.48 1.33 4.99L2 22l5.14-1.3a10 10 0 0 0 4.88 1.24h.01c5.53 0 10.02-4.49 10.02-10.02 0-2.68-1.04-5.2-2.95-7.01Zm-7.03 15.41h-.01a8.3 8.3 0 0 1-4.24-1.16l-.3-.17-3.05.77.81-2.97-.19-.31a8.28 8.28 0 0 1-1.27-4.45c0-4.58 3.73-8.31 8.32-8.31 2.22 0 4.31.86 5.88 2.44a8.25 8.25 0 0 1 2.45 5.88c0 4.59-3.73 8.28-8.4 8.28Zm4.57-6.2c-.25-.13-1.45-.72-1.68-.8-.22-.08-.39-.13-.55.13-.16.25-.63.8-.77.97-.14.17-.28.19-.53.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.39.11-.52.11-.11.25-.28.38-.42.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.55-1.33-.75-1.82-.2-.48-.41-.42-.55-.42h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.09 0 1.23.9 2.42 1.03 2.59.13.17 1.77 2.71 4.29 3.8.6.26 1.07.42 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.45-.59 1.65-1.15.2-.56.2-1.04.14-1.15-.06-.11-.22-.17-.47-.3Z" />
  </svg>
);

const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <circle cx="17.5" cy="6.5" r="1.5" />
  </svg>
);

const MailIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <WhatsAppIcon size={18} />, href: "https://wa.me/94762874257", label: "WhatsApp" },
    { icon: <InstagramIcon size={18} />, href: "https://www.instagram.com/antwix.an?igsh=OTY5ZnQwdnF2OXRk", label: "Instagram" },
    { icon: <TikTokIcon size={18} />, href: "https://www.tiktok.com/@antwix.an?_r=1&_t=ZS-96K1ikKcOrE", label: "TikTok" },
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Inquiry", href: "#inquiry" },
  ];

  return (
    <footer className="bg-black py-20 border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Identity */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-20 h-20">
                <Image
                  src="/logo-removebg.png"
                  alt="ANtwix Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">
                ANtwix
              </span>
            </Link>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              Crafting cutting-edge digital experiences for forward-thinking brands. 
              We blend state-of-the-art technology with bespoke design to fuel your growth.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Peek */}
          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <div className="space-y-4">
              <a
                href="mailto:antwix.an@gmail.com"
                className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-blue-500/50">
                  <MailIcon size={16} />
                </div>
                antwix.an@gmail.com
              </a>
              <p className="text-gray-600 text-sm">
                Based in Sri Lanka. <br />
                Available worldwide.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {currentYear} ANtwix Agency. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-600">
            <Link href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
