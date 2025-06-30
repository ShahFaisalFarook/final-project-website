import { motion } from "framer-motion";
import website1 from "../assets/logos/website1.jpg";
import seo from "..//assets/logos/seo.jpg"

const projects = [
  {
    title: "Modern E-Commerce",
    image: website1, 
    category: "Web",
  },
  {
    title: "Advanced SEO Audit",
    image: seo,
    category: "SEO",
  },
  {
    title: "Responsive Landing Page",
    image: website1,
    category: "Web",
  },
  {
    title: "Drone Ad Shoot",
    image: seo,
    category: "Ads",
  },
  {
    title: "Branding Campaign",
    image: website1,
    category: "Ads",
  },
  {
    title: "SEO Optimization",
    image: seo,
    category: "SEO",
  },
];

export default function Portfolio() {
  return (
    <section className="py-20 px-6 bg-[#0e0e0e] text-white relative z-10">
      {/* Animated Title */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center text-4xl sm:text-5xl font-extrabold mb-16 tracking-tight bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
      >
        Our Work
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ rotate: 1, scale: 1.03 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-1 border border-white/10 hover:border-indigo-500 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30"
          >
            <div className="rounded-xl overflow-hidden bg-black">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
