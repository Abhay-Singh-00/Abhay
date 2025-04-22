import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600"
      >
        Hi, I'm Abhay Singh
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-lg md:text-xl max-w-2xl mb-6"
      >
        A Full Stack Developer | Java & MERN Enthusiast | Creative Coder
      </motion.p>
      <div className="mt-6 flex gap-6">
        <a
          href="#projects"
          className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-full font-semibold shadow-lg transition-all"
        >
          View Projects
        </a>
        <a
          href="mailto:2k22.cscys32245@gmail.com"
          className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-all"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
