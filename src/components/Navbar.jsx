import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";

const navLinks = ["Home", "Services", "Portfolio", "Team", "Contact"];

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-black via-gray-900 to-black border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
          <span className="text-white text-xl font-bold">DialUs</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={`#${link.toLowerCase()}`}
              whileHover={{ scale: 1.1 }}
              className="relative text-white font-medium group"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </nav>

        {/* Hamburger */}
        <div className="md:hidden text-white z-50">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden bg-black/95 text-white px-6 pt-4 pb-8"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                href={`#${link.toLowerCase()}`}
                className="block text-lg py-2 border-b border-white/10 hover:text-indigo-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
