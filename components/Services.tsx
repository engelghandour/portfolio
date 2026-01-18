'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FiCode, FiServer, FiDatabase, FiZap, FiUsers, FiTool
} from 'react-icons/fi';

const services = [
  {
    icon: FiCode,
    title: 'Custom Web Application Development',
    description: 'Build scalable, responsive web applications tailored to your business needs using modern frameworks and best practices.',
    benefits: [
      'User-centric design',
      'Responsive across all devices',
      'SEO optimized',
      'Fast performance',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FiServer,
    title: 'API Development & Integration',
    description: 'Design and implement robust APIs and integrate third-party services to connect your systems seamlessly.',
    benefits: [
      'RESTful & GraphQL APIs',
      'Secure authentication',
      'Rate limiting & caching',
      'Comprehensive documentation',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: FiDatabase,
    title: 'Database Design & Optimization',
    description: 'Architect efficient database schemas and optimize queries for maximum performance and scalability.',
    benefits: [
      'SQL & NoSQL expertise',
      'Data modeling',
      'Query optimization',
      'Backup & recovery strategies',
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: FiZap,
    title: 'Business Process Automation',
    description: 'Automate repetitive tasks and workflows to increase efficiency, reduce errors, and save valuable time.',
    benefits: [
      'Workflow automation',
      'Integration with existing tools',
      'Reporting & analytics',
      'Cost reduction',
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: FiUsers,
    title: 'Technical Consulting & Solution Architecture',
    description: 'Provide strategic guidance on technology decisions, system architecture, and development best practices.',
    benefits: [
      'Technology stack selection',
      'Scalability planning',
      'Security audits',
      'Team mentoring',
    ],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: FiTool,
    title: 'Legacy System Modernization',
    description: 'Transform outdated systems into modern, maintainable applications without disrupting your business operations.',
    benefits: [
      'Gradual migration strategies',
      'Risk mitigation',
      'Performance improvements',
      'Reduced maintenance costs',
    ],
    color: 'from-pink-500 to-rose-500',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" ref={ref} className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Services & Solutions
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive technology services focused on delivering business value and ROI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                transition: { duration: 0.3 }
              }}
              className="bg-white dark:bg-slate-700 rounded-xl p-8 group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
              >
                <service.icon className="text-white" size={32} />
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Benefits */}
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Key Benefits:
                </p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* ROI Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${service.color} animate-pulse`} />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    High ROI Potential
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let&apos;s discuss how I can help you achieve your technology goals
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255,255,255,0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contact = document.getElementById('contact');
                if (contact) contact.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
