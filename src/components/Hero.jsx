import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-[#111827] dark:via-[#1a1b1e] dark:to-[#1f2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base text-[#00aeff] dark:text-primary-400 font-semibold tracking-wide uppercase">
              Welcome to my portfolio
            </h2>
            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Hi, I'm Jansen Loman</span>
              <span className="block bg-gradient-to-r from-[#00aeff] to-[#a78bfa] text-transparent bg-clip-text">
                Computer Science Student & Developer
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-600 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Currently pursuing Computer Science at Mikroskil University. Passionate about web development and cloud computing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
          >
            <div className="rounded-md shadow-lg">
              <a
                href="/cv.pdf"
                className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-[#00aeff] hover:bg-[#0087db] transition-all duration-300 md:py-4 md:text-lg md:px-10 dark:bg-[#00aeff] dark:hover:bg-[#0087db] dark:shadow-[0_0_15px_rgba(0,174,255,0.3)] hover:dark:shadow-[0_0_25px_rgba(0,174,255,0.5)]"
              >
                Download CV
              </a>
            </div>
            <div className="mt-3 rounded-md shadow-lg sm:mt-0 sm:ml-3">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-[#1a1b1e] hover:bg-[#2a2b2e] border border-[#2a2b2e] hover:border-[#00aeff] transition-all duration-300 md:py-4 md:text-lg md:px-10 dark:shadow-[0_0_15px_rgba(42,43,46,0.3)] hover:dark:shadow-[0_0_25px_rgba(0,174,255,0.2)]"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 