'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi';

const projects = [
    {
    title: 'Asseddiq American Schhol LMS',
    category: 'Full-Stack',
    problem: 'Lack of a centralized system to track student performance and academic data efficiently.',
    solution: 'Built a custom LMS that centralizes academic data and delivers clear, actionable insights',
    impact: '65% reduction in cart abandonment, 3x faster page loads, $2M additional annual revenue',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    image:(
      <img
        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
        alt="E-Commerce Platform"
        className="object-cover w-full h-full"
      />
    ),
    liveUrl: '#',
    githubUrl: '#',
  },
    {
    title: 'ATC Academy',
    category: 'Full-Stack',
    problem: 'Managing courses, students, and financial operations across multiple systems caused inefficiency and lack of visibility.',
    solution: 'Developed an all-in-one LMS that manages courses, students, and finances with centralized control and real-time insights.',
    impact: '65% reduction in cart abandonment, 3x faster page loads, $2M additional annual revenue',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'AWS' , 'React'],
    image:(
      <img
        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
        alt="E-Commerce Platform"
        className="object-cover w-full h-full"
      />
    ),
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'E-Commerce Platform Modernization',
    category: 'Full-Stack',
    problem: 'Legacy e-commerce system causing 45% cart abandonment and slow checkout',
    solution: 'Rebuilt with Next.js, Node.js, and PostgreSQL with optimized checkout flow',
    impact: '65% reduction in cart abandonment, 3x faster page loads, $2M additional annual revenue',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    image:(
      <img
        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
        alt="E-Commerce Platform"
        className="object-cover w-full h-full"
      />
    ),
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title:  'Real-Time Analytics Dashboard',
    category: 'Frontend',
    problem: 'Business stakeholders lacked visibility into real-time operational metrics',
    solution: 'Built interactive dashboard with live data streaming and customizable widgets',
    impact: '80% faster decision-making, 50% reduction in manual reporting, used by 200+ users',
    tech: ['React', 'D3.js', 'WebSocket', 'GraphQL', 'MongoDB'],
    image:(
      <img
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
        alt="Real-Time Analytics Dashboard"
        className="object-cover w-full h-full"
      />
    ),
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'API Integration Platform',
    category: 'Backend',
    problem: 'Manual data sync between 15+ systems causing errors and delays',
    solution:  'Developed unified API gateway with automated sync and error handling',
    impact: '99.9% uptime, 90% reduction in data errors, 20 hours/week saved in manual work',
    tech: ['Node.js', 'Express', 'RabbitMQ', 'Docker', 'Kubernetes'],
    image:(
      <img
        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
        alt="API Integration Platform"
        className="object-cover w-full h-full"
      />
    ),
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Customer Portal & Mobile App',
    category: 'Full-Stack',
    problem: 'Customers calling support for basic account management tasks',
    solution: 'Self-service portal with mobile app for account management and support',
    impact:  '70% reduction in support calls, 95% customer satisfaction, 50K+ active users',
    tech: ['React Native', 'Next.js', 'Python', 'AWS Lambda', 'DynamoDB'],
    image:(
      <img
        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
        alt="Customer Portal & Mobile App"
        className="object-cover w-full h-full"
      />
    ),
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'DevOps Pipeline Automation',
    category: 'DevOps',
    problem:  'Manual deployment process taking 4+ hours with frequent rollbacks',
    solution: 'Automated CI/CD pipeline with testing, staging, and zero-downtime deployments',
    impact: 'Deployments reduced to 15 minutes, 85% fewer production incidents, 10x release frequency',
    tech: ['Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'AWS'],
    image:(
      <img
        src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80"
        alt="DevOps Pipeline Automation"
        className="object-cover w-full h-full"
      />
    ),
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Business Intelligence System',
    category: 'Full-Stack',
    problem: 'Data siloed across departments, no unified reporting capability',
    solution: 'ETL pipeline and BI dashboard aggregating data from multiple sources',
    impact: 'Single source of truth for metrics, 60% faster reporting, strategic insights enabled',
    tech: ['Python', 'Apache Airflow', 'PostgreSQL', 'Vue.js', 'Tableau'],
    image:(
      <img
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
        alt="Business Intelligence System"
        className="object-cover w-full h-full"
      />
    ),
    liveUrl: '#',
    githubUrl: '#',
  },
];
const categories = ['All', 'Full-Stack', 'Frontend', 'Backend', 'DevOps'];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" ref={ref} className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real-world solutions delivering measurable business impact
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <FiFilter className="text-gray-600 dark:text-gray-400 mt-2" size={20} />
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:shadow-md'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
              className="bg-gray-50 dark:bg-slate-800 rounded-xl overflow-hidden group"
            >
              {/* Project Image/Icon */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-8xl overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.image}
                </motion.div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      href={project.githubUrl}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <FiGithub size={20} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      href={project.liveUrl}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <FiExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">Problem:</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">Solution:</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{project.solution}</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                    <p className="text-xs font-semibold text-green-700 dark:text-green-400 mb-1">Impact:</p>
                    <p className="text-sm text-green-700 dark:text-green-300 font-medium">{project.impact}</p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
