import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-white to-gray-50 dark:from-[#111827] dark:to-[#1a1b1e]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Get to know me better
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#1a1b1e] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-[#2a2b2e]"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="bg-gradient-to-r from-[#00aeff] to-[#a78bfa] text-transparent bg-clip-text">
                Background
              </span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm a Computer Science student at Mikroskil University with a strong passion for technology and software development. Currently participating in Bangkit Academy to enhance my cloud computing skills.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              My journey in tech has equipped me with skills in web development using React.js, Flutter for mobile development, and various other technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#1a1b1e] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-[#2a2b2e]"
          >
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-gradient-to-r from-[#00aeff] to-[#a78bfa] text-transparent bg-clip-text">
                  Connect with me
                </span>
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/jansenloman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#00aeff] dark:text-gray-300 dark:hover:text-[#00aeff] transition-colors duration-300"
                >
                  <FaGithub className="h-8 w-8" />
                </a>
                <a
                  href="mailto:jansenloman28@gmail.com"
                  className="text-gray-600 hover:text-[#00aeff] dark:text-gray-300 dark:hover:text-[#00aeff] transition-colors duration-300"
                >
                  <FaEnvelope className="h-8 w-8" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-gradient-to-r from-[#00aeff] to-[#a78bfa] text-transparent bg-clip-text">
                  Current Focus
                </span>
              </h4>
              <ul className="space-y-3">
                {[
                  'Computer Science Studies',
                  'Cloud Computing with Bangkit Academy',
                  'Web Development',
                  'Mobile Development with Flutter'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-gradient-to-r from-[#00aeff] to-[#a78bfa] rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 