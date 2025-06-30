import { motion } from "framer-motion";
import { FaRocket, FaPaintBrush, FaChartLine, FaBullseye, FaLock, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaRocket className="text-indigo-500 text-3xl" />,
    title: "Fast Delivery",
    desc: "Quick turnarounds to keep your projects moving fast.",
  },
  {
    icon: <FaPaintBrush className="text-pink-500 text-3xl" />,
    title: "Creative Designs",
    desc: "We build custom visuals to fit your brand perfectly.",
  },
  {
    icon: <FaChartLine className="text-green-500 text-3xl" />,
    title: "SEO Optimization",
    desc: "Improved search visibility and performance.",
  },
  {
    icon: <FaBullseye className="text-yellow-400 text-3xl" />,
    title: "Targeted Ads",
    desc: "Laser-focused ad campaigns for higher conversion.",
  },
  {
    icon: <FaLock className="text-blue-400 text-3xl" />,
    title: "Secure Hosting",
    desc: "Fast, secure and reliable hosting included.",
  },
  {
    icon: <FaHeadset className="text-purple-400 text-3xl" />,
    title: "Ongoing Support",
    desc: "We’re here even after the launch to support you.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-black via-[#111827] to-black text-white relative z-10">
      {/* Title with animation and color effect */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-4xl sm:text-5xl font-extrabold mb-16 tracking-tight"
      >
        Why Choose{" "}
        <span className="bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse drop-shadow-md">
          DialUs
        </span>
        ?
      </motion.h2>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg hover:shadow-indigo-600/30 transition-shadow duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
