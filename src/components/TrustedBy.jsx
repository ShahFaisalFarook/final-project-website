// src/components/TrustedBy.jsx

import { motion } from "framer-motion";
import amazon from "../assets/logos/amazon.svg";
import fiverr from "../assets/logos/fiverr.svg";
import upwork from "../assets/logos/upwork.svg";
import netflix from "../assets/logos/netflix.svg";
import meta from "../assets/logos/meta.svg";

const TrustedBy = () => {
  const logos1 = [amazon, fiverr, upwork, meta, netflix];
  const logos2 = [netflix, meta, amazon, fiverr, upwork];

  return (
    <section className="relative bg-black pt-6 pb-12 px-4 overflow-hidden">
      {/* Glowing Gradient Border */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 opacity-10 blur-2xl animate-pulse"></div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative text-center text-2xl sm:text-3xl font-bold mb-6 text-white z-10 tracking-wide"
      >
        Trusted by Teams & Global Brands
      </motion.h2>

      {/* Marquee Row 1 */}
      <div className="relative overflow-hidden whitespace-nowrap mb-3 z-10">
        <div className="inline-block animate-slideLeft space-x-10">
          {[...Array(2)].flatMap(() =>
            logos1.map((logo, index) => (
              <div
                key={`left-${index}`}
                className="inline-block px-6 py-3 rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 shadow-md hover:scale-105 transition-all duration-300"
              >
                <img src={logo} alt="brand" className="h-8 sm:h-10 grayscale hover:grayscale-0 transition duration-300" />
              </div>
            ))
          )}
        </div>
      </div>

      {/* Marquee Row 2 */}
      <div className="relative overflow-hidden whitespace-nowrap z-10">
        <div className="inline-block animate-slideRight space-x-10">
          {[...Array(2)].flatMap(() =>
            logos2.map((logo, index) => (
              <div
                key={`right-${index}`}
                className="inline-block px-6 py-3 rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 shadow-md hover:scale-105 transition-all duration-300"
              >
                <img src={logo} alt="brand" className="h-8 sm:h-10 grayscale hover:grayscale-0 transition duration-300" />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
