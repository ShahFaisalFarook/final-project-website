import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 py-20 px-6 bg-gradient-to-br from-black via-[#0c0c0c] to-[#111111] text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-4xl sm:text-5xl font-extrabold mb-16 tracking-tight bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
      >
        Contact Us
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
        {/* 📩 Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg p-8 space-y-6"
        >
          <form className="space-y-6">
            {/* Name Field */}
            <div className="relative">
              <input
                type="text"
                id="name"
                required
                placeholder=" "
                className="peer w-full bg-transparent border border-gray-600 rounded-md px-4 pt-6 pb-2 text-white placeholder-transparent focus:outline-none focus:border-indigo-500"
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-400"
              >
                Your Name
              </label>
            </div>

            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                id="email"
                required
                placeholder=" "
                className="peer w-full bg-transparent border border-gray-600 rounded-md px-4 pt-6 pb-2 text-white placeholder-transparent focus:outline-none focus:border-indigo-500"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-400"
              >
                Your Email
              </label>
            </div>

            {/* Message Field */}
            <div className="relative">
              <textarea
                id="message"
                rows="4"
                required
                placeholder=" "
                className="peer w-full bg-transparent border border-gray-600 rounded-md px-4 pt-6 pb-2 text-white placeholder-transparent focus:outline-none focus:border-indigo-500"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-400"
              >
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* 🗺️ Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(99,102,241,0.2)] rounded-2xl p-8 w-full max-w-md mx-auto md:mx-0 flex flex-col justify-center"
        >
          {/* Glow effect */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500 opacity-20 rounded-full blur-3xl animate-pulse z-0" />

          <h3 className="text-2xl font-bold mb-6 text-indigo-400 relative z-10">
            DialUs Creations
          </h3>

          <ul className="space-y-4 text-gray-300 text-base relative z-10">
            <li className="flex items-center gap-3">
              📧 contact@dialus.com
            </li>
            <li className="flex items-center gap-3">
              📞 +91 9596154535 
            </li>
            <li className="flex items-center gap-3">
              📍 Anantnag, Jammu & Kashmir
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Floating Blobs in BG */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 blur-3xl rounded-full opacity-20 animate-blob" />
      <div className="absolute bottom-10 right-10 w-36 h-36 bg-pink-500 blur-3xl rounded-full opacity-20 animate-blob animation-delay-2000" />
    </section>
  );
}
