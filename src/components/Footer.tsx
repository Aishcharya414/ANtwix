import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              ANtwix
            </Link>
            <p className="text-gray-500 text-sm mt-2">
              Transforming ideas into digital reality.
            </p>
          </div>

          <div className="flex gap-8">
            <Link href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Terms of Service</Link>
          </div>

          <div className="text-gray-500 text-sm">
            © {currentYear} ANtwix. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
