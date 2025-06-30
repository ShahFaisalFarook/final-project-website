import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  BiCodeAlt,
  BiSearch,
  BiCloud,
  BiCameraMovie,
  BiBullseye,
  BiPalette,
} from "react-icons/bi";

const services = [
  {
    icon: <BiCodeAlt size={40} />,
    title: "Web Development",
    description: "Custom, fast & responsive websites tailored to your business.",
  },
  {
    icon: <BiSearch size={40} />,
    title: "SEO Optimization",
    description: "Boost your visibility and rank higher on search engines.",
  },
  {
    icon: <BiCloud size={40} />,
    title: "Hosting & Domains",
    description: "Reliable, secure, and lightning-fast hosting solutions.",
  },
  {
    icon: <BiCameraMovie size={40} />,
    title: "Drone Shoots",
    description: "Cinematic aerial shots to make your brand unforgettable.",
  },
  {
    icon: <BiBullseye size={40} />,
    title: "Digital Marketing",
    description: "Targeted ad campaigns that drive real results.",
  },
  {
    icon: <BiPalette size={40} />,
    title: "Branding & Design",
    description: "Memorable logos, colors, and visual identity.",
  },
];

const Services = () => {
  return (
    <section className="bg-black py-24 px-6 text-white relative overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl sm:text-5xl font-bold mb-20"
      >
        ✨ Our <span className="text-indigo-500">Services</span>
      </motion.h2>

      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto z-10 relative">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
           <Tilt
  glareEnable={true}
  glareMaxOpacity={0.25}
  glareColor="#ffffff"
  glarePosition="all"
  scale={1.05}
  tiltMaxAngleX={15}
  tiltMaxAngleY={15}
  className="relative group"
>
  <div className="relative p-[2px] rounded-3xl bg-gradient-to-r from-pink-500 via-indigo-500 to-purple-500 animate-borderGlow">
    <div className="bg-black/80 backdrop-blur-2xl rounded-3xl p-6 text-center h-full border border-white/10">
      {/* Icon */}
      <motion.div
        animate={{
          rotate: [0, 10, -10, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
        className="text-indigo-400 mb-4"
      >
        {service.icon}
      </motion.div>

      <h3 className="text-xl font-semibold mb-2 neon-text">{service.title}</h3>
      <p className="text-gray-300 text-sm">{service.description}</p>
    </div>
  </div>
</Tilt>

          </motion.div>
        ))}
      </div>

      {/* ✨ Gradient Glow Background */}
      <div className="absolute top-[30%] left-[20%] w-80 h-80 bg-indigo-500 blur-3xl opacity-10 rounded-full z-0" />
      <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-pink-500 blur-3xl opacity-10 rounded-full z-0" />
    </section>
  );
};

export default Services;
