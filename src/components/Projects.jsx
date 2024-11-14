import { motion } from 'framer-motion';
import { projects } from '../constants';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, image, technologies, github, demo }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-[#1a1b1e] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-[#2a2b2e]"
  >
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover object-center"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-gray-100 dark:bg-[#2a2b2e] text-gray-800 dark:text-gray-300 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-[#00aeff] dark:text-gray-300 dark:hover:text-[#00aeff] transition-colors duration-300"
          >
            <FaGithub className="h-5 w-5 mr-2" />
            Code
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-[#00aeff] dark:text-gray-300 dark:hover:text-[#00aeff] transition-colors duration-300"
          >
            <FaExternalLinkAlt className="h-4 w-4 mr-2" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-white to-gray-50 dark:from-[#111827] dark:to-[#1a1b1e]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Some of my recent works
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 