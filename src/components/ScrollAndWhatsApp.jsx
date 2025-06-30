import { useEffect, useState } from "react";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ScrollAndWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      setVisible(scrolled > 300);
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919596154535"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-24 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg"
      >
        <FaWhatsapp className="text-2xl" />
      </motion.a>

      {/* Scroll to Top Button */}
      {visible && (
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          className="fixed bottom-6 right-6 z-50 bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded-full shadow-lg"
        >
          <FaArrowUp className="text-xl" />
        </motion.button>
      )}
    </>
  );
}
