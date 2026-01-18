'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiTarget, FiTrendingUp, FiUsers, FiAward } from 'react-icons/fi';
import Image from 'next/image';

const differentiators = [
  {
    icon: FiTarget,
    title: 'Business-First Mindset',
    description: 'I don&apos;t just write code; I solve business problems. Every solution is designed with ROI and user impact in mind.',
  },
  {
    icon: FiTrendingUp,
    title: 'End-to-End Solutions',
    description: 'From requirements gathering to deployment and maintenance, I own the entire development lifecycle.',
  },
  {
    icon: FiUsers,
    title: 'Stakeholder Communication',
    description: 'I bridge the gap between technical and non-technical teams, ensuring everyone is aligned and informed.',
  },
  {
    icon: FiAward,
    title: 'Quality & Performance',
    description: 'I deliver scalable, maintainable code with a focus on performance, security, and best practices.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate about creating technology solutions that drive real business value
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-2 flex items-center justify-center">
                {/* Replace the placeholder below with your actual photo */}
                {/* Uncomment and update the path to use your photo: */}
                {/* <Image 
                  src="/images/profile.jpg" 
                  alt="Profile Photo" 
                  width={320}
                  height={320}
                  className="w-full h-full object-cover rounded-xl"
                /> */}
                
                {/* Placeholder - remove this when you add your photo */}
                <div className="w-full h-full bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-gray-400 dark:text-gray-600">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👨‍💻</div>
                    <p className="text-sm">Add your photo to</p>
                    <p className="text-sm font-semibold">/public/images/profile.jpg</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
              Transforming Ideas into Impact
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                As a full-stack developer and software engineer, I specialize in creating 
                comprehensive digital solutions that address real business challenges. My approach 
                goes beyond writing code—I focus on understanding your business objectives and 
                delivering solutions that drive measurable results.
              </p>
              <p>
                With expertise spanning modern frontend frameworks, robust backend systems, and 
                cloud infrastructure, I bring a holistic perspective to every project. I thrive 
                on turning complex requirements into elegant, scalable solutions that users love 
                and businesses depend on.
              </p>
              <p>
                Whether it&apos;s building a customer-facing application, optimizing system performance, 
                or architecting a new platform from scratch, I bring technical excellence, 
                strategic thinking, and a commitment to delivering value at every stage.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Key Differentiators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            What Sets Me Apart
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className="bg-gray-50 dark:bg-slate-800 p-6 rounded-xl"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4"
                >
                  <item.icon className="text-white" size={24} />
                </motion.div>
                <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
