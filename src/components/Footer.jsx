import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { socialLinks } from '../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-gray-50 to-white dark:from-[#1a1b1e] dark:to-[#111827]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex space-x-6 mb-6"
          >
            <a
              href="https://github.com/jansenloman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="mailto:jansenloman28@gmail.com"
              className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
            >
              <FaEnvelope className="h-6 w-6" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-4"
          >
            <nav className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <p className="text-base text-gray-500 dark:text-gray-400">
              © {currentYear} Jansen Loman. All rights reserved.
            </p>
            
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Built with React + Vite and Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 