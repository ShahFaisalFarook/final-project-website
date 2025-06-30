import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$99",
    features: ["1 Landing Page", "Basic SEO", "1 Email Integration"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$299",
    features: ["Multi-Page Website", "SEO Optimization", "Ads Setup", "Custom Branding"],
    highlight: true,
  },
  {
    name: "Ultimate",
    price: "$599",
    features: ["Full Brand Suite", "Drone Shoots", "Advanced SEO", "Hosting & Maintenance"],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-20 px-6 bg-[#0d0d0d] text-white relative z-10">
      {/* 💸 Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl sm:text-5xl font-extrabold mb-16 tracking-tight bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
      >
        Affordable Plans for Every Service
      </motion.h2>

      {/* 💰 Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`rounded-2xl p-1 group transition-transform duration-300 hover:scale-[1.04] shadow-xl border border-white/10 ${
              plan.highlight
                ? "relative bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500 animate-borderGlow scale-[1.05]"
                : "bg-white/5"
            }`}
          >
            {/* 🔥 Badge */}
            {plan.highlight && (
              <div className="absolute -top-3 right-3 bg-pink-600 text-white px-3 py-1 rounded-full text-xs shadow-md animate-pulse z-10">
                Most Popular
              </div>
            )}

            <div className="rounded-xl bg-black p-6 h-full flex flex-col justify-between">
              <h3 className="text-2xl font-bold mb-2 text-white text-center">{plan.name}</h3>
              <p className="text-center text-3xl font-bold mb-6 text-indigo-400">{plan.price}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-300 flex items-center gap-2">
                    ✅ {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-auto bg-indigo-600 hover:bg-indigo-700 text-white w-full py-2 rounded-md font-semibold transition-all duration-300 shadow-md hover:shadow-pink-500/30">
                Get Started
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
