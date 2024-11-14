import { motion } from 'framer-motion';
import { skills } from '../constants';

const SkillCard = ({ icon: Icon, name, level }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-[#1a1b1e] p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-[#2a2b2e]"
  >
    <Icon className="h-12 w-12 text-[#00aeff] mb-4" />
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{name}</h3>
    <div className="w-full bg-gray-100 dark:bg-[#2a2b2e] rounded-full h-2.5">
      <div
        className="bg-gradient-to-r from-[#00aeff] to-[#a78bfa] h-2.5 rounded-full"
        style={{ width: `${level}%` }}
      ></div>
    </div>
    <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">{level}%</span>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-[#111827]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Technologies I've been working with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 