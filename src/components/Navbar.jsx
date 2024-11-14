import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../hooks/useTheme';
import { navLinks } from '../constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg border-b border-accent-100 dark:border-accent-900' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="flex items-center cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00aeff] to-[#a78bfa] flex items-center justify-center text-white font-bold text-xl">
                JL
              </div>
              <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">
                Jansen Loman
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#00aeff] dark:hover:text-[#00aeff]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            {isDark ? (
              <SunIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            ) : (
              <MoonIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 