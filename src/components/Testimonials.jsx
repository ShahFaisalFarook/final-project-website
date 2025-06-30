import { motion } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Shah Faisal",
    role: "CEO, GlowTech",
    feedback:
      "DialUs helped transform our online presence. The team is highly creative, professional, and responsive!",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Shah Faisal",
    role: "Marketing Head, SwiftAds",
    feedback:
      "From branding to deployment, they did a fantastic job. Loved the animations and design choices!",
    image: "https://randomuser.me/api/portraits/women/36.jpg",
  },
  {
    name: "Shah Faisal",
    role: "Founder, FreshAura",
    feedback:
      "Truly next-level creativity. The SEO boost we got was incredible. Highly recommend DialUs Creations.",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-[#0a0a0a] text-white relative z-10 overflow-hidden">
      {/* Gradient + Flicker Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center text-4xl sm:text-5xl font-extrabold mb-16 tracking-tight bg-gradient-to-r from-indigo-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent animate-flicker"
      >
        What Our Clients Say
      </motion.h2>

      {/* Testimonials */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ rotate: 1, scale: 1.03 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-105 hover:border-indigo-500"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500 shadow-md"
              />
              <div>
                <p className="font-bold">{t.name}</p>
                <p className="text-sm text-gray-400">{t.role}</p>
              </div>
            </div>
            <p className="text-gray-300 italic">“{t.feedback}”</p>
            <div className="mt-4 text-yellow-400">★★★★★</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
