import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0c] text-white pt-20 pb-10 px-6 relative z-10">
      {/* Glow Background Blob */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] bg-indigo-500 opacity-10 rounded-full blur-3xl animate-pulse z-0" />

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-indigo-400 mb-4">DialUs Creations</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Empowering brands with next-gen websites, powerful SEO, eye-catching ads, drone shoots, and full branding solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-indigo-300 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#services" className="hover:text-indigo-400 transition">Services</a></li>
            <li><a href="#portfolio" className="hover:text-indigo-400 transition">Portfolio</a></li>
            <li><a href="#pricing" className="hover:text-indigo-400 transition">Pricing</a></li>
            <li><a href="#contact" className="hover:text-indigo-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-lg font-semibold text-indigo-300 mb-4">Connect with Us</h4>
          <div className="flex gap-4 text-indigo-400 text-xl">
            <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-white transition"><FaInstagram /></a>
            <a href="#" className="hover:text-white transition"><FaTwitter /></a>
            <a href="#" className="hover:text-white transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Divider Line with Glow */}
      <div className="mt-16 relative z-10">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-sm mt-6 text-gray-400 tracking-wide font-light z-10"
      >
        <p>
          &copy; {new Date().getFullYear()} <span className="text-indigo-400 font-medium">DialUs Creations</span> — Crafted with 💡 and 🚀 for brands that dare to stand out.
        </p>
      </motion.div>
    </footer>
  );
}
