'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  FiCode, FiServer, FiCloud, FiBriefcase,
  FiLayout, FiDatabase, FiGitBranch, FiPackage
} from 'react-icons/fi';
import {
  SiReact, SiNextdotjs, SiTypescript, SiVuedotjs, SiTailwindcss,
  SiNodedotjs, SiPython, SiPostgresql, SiMongodb,
  SiDocker, SiKubernetes, SiGit, SiGithubactions
} from 'react-icons/si';

const skillCategories = [
  {
    name: 'Frontend',
    icon: FiCode,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React', icon: SiReact, level: 95 },
      { name: 'Next.js', icon: SiNextdotjs, level: 90 },
      { name: 'TypeScript', icon: SiTypescript, level: 90 },
      { name: 'Vue.js', icon: SiVuedotjs, level: 85 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 95 },
    ],
  },
  {
    name: 'Backend',
    icon: FiServer,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 92 },
      { name: 'Python', icon: SiPython, level: 88 },
      { name: 'Java', icon: FiCode, level: 85 },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 90 },
      { name: 'MongoDB', icon: SiMongodb, level: 87 },
    ],
  },
  {
    name: 'DevOps & Cloud',
    icon: FiCloud,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Docker', icon: SiDocker, level: 90 },
      { name: 'Kubernetes', icon: SiKubernetes, level: 80 },
      { name: 'AWS', icon: FiCloud, level: 85 },
      { name: 'Azure', icon: FiCloud, level: 82 },
      { name: 'GCP', icon: FiCloud, level: 78 },
    ],
  },
  {
    name: 'Business & Tools',
    icon: FiBriefcase,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Git', icon: SiGit, level: 95 },
      { name: 'CI/CD', icon: SiGithubactions, level: 88 },
      { name: 'Agile/Scrum', icon: FiGitBranch, level: 90 },
      { name: 'Architecture', icon: FiPackage, level: 87 },
      { name: 'Leadership', icon: FiBriefcase, level: 85 },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section id="skills" ref={ref} className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for delivering end-to-end solutions
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedCategory(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === index
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:shadow-md'
              }`}
            >
              <category.icon size={20} />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {skillCategories[selectedCategory].skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              className="bg-white dark:bg-slate-700 p-6 rounded-xl"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${skillCategories[selectedCategory].color}`}>
                    <skill.icon className="text-white" size={24} />
                  </div>
                  <span className="font-semibold text-gray-800 dark:text-white text-lg">
                    {skill.name}
                  </span>
                </div>
                <span className="text-gray-600 dark:text-gray-400 font-medium">
                  {skill.level}%
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="relative h-3 bg-gray-200 dark:bg-slate-600 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                  className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skillCategories[selectedCategory].color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            And Many More Technologies...
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['REST APIs', 'GraphQL', 'Redis', 'RabbitMQ', 'Webpack', 'Jest', 'Cypress', 'Terraform', 'JIRA', 'Figma'].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-md"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
