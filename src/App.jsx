import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import BackgroundBlobs from './components/BackgroundBlobs';
import Services from "./components/Services";
import TrustedBy from "./components/TrustedBy";
import Portfolio from "./components/Portfolio";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from ".//components/Footer";
import ScrollAndWhatsApp from "./components/ScrollAndWhatsApp";



function App() {
  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* 🔝 Navbar */}
      <Navbar />

      {/* 🔵 Background Blobs */}
      <BackgroundBlobs />

      {/* 🎯 HERO SECTION */}
      <main className="relative py-24 sm:py-32 flex flex-col items-center justify-center px-6">

        {/* 🔮 Central Glowing Blob */}
        <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-600 via-purple-500 to-pink-500 opacity-20 blur-3xl rounded-full animate-spin-slow z-0" />

        {/* 🎈 Floating Glows */}
        <div className="absolute top-[20%] left-[10%] w-3 h-3 bg-indigo-400 rounded-full blur-sm animate-ping z-0" />
        <div className="absolute bottom-[15%] right-[8%] w-4 h-4 bg-purple-500 rounded-full blur-md animate-bounce z-0" />
        <div className="absolute top-[30%] right-[20%] w-2 h-2 bg-pink-400 rounded-full blur-sm animate-pulse z-0" />

        {/* 💬 Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center max-w-2xl z-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-white"
          >
            <span className="inline-block animate-bounce">🚀</span> Build Your Brand With{" "}
            <span className="text-indigo-400">DialUs Creations</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg sm:text-xl mb-8 text-gray-300"
          >
            Web Design • SEO • Hosting • Drone Shoots • Ads • Branding — All in one.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #6366f1" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
          >
            Let’s Talk
          </motion.button>
        </motion.div>
      </main>

   <TrustedBy/>
      <Services />
       <Portfolio/>
       <WhyUs/>
       <Testimonials/>
       <Pricing/>
       <Contact/>
       <Footer/>
       <ScrollAndWhatsApp/>
    </div>
  );
}

export default App;
