'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiSend, FiCheck, FiX
} from 'react-icons/fi';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormStatus('sending');
    
    // TODO: Replace with actual EmailJS implementation
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } catch (error) {
      setFormStatus('error');
    }
    // Example:
    // import emailjs from '@emailjs/browser';
    // emailjs.send(serviceId, templateId, formData, publicKey)
    //   .then(() => setFormStatus('success'))
    //   .catch(() => setFormStatus('error'));
    
    // Simulate form submission (replace with actual EmailJS or API call)
    // setTimeout(() => {
    //   setFormStatus('success');
    //   setFormData({ name: '', email: '', subject: '', message: '' });
      
    //   setTimeout(() => {
    //     setFormStatus('idle');
    //   }, 5000);
    // }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: '',
      });
    }
  };

  const socialLinks = [
    { icon: FiGithub, url: 'https://github.com/engelghandour', label: 'GitHub' },
    { icon: FiLinkedin, url: 'https://linkedin.com/in/engelghandour', label: 'LinkedIn' },
    { icon: FiTwitter, url: 'https://twitter.com/engelghandour', label: 'Twitter' },
    { icon: FiMail, url: 'mailto:your.engelghandour@icloud.com', label: 'Email' },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how I can help bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
              Let&apos;s Connect
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I&apos;m currently available for freelance projects and full-time opportunities. 
              Whether you need a complete solution or just want to discuss your ideas, 
              I&apos;d love to hear from you.
            </p>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-8 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-700 dark:text-green-400 font-semibold">
                  Available for new projects
                </span>
              </div>
            </motion.div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Connect on Social Media
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all"
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 space-y-4"
            >
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <FiMail size={20} />
                <a href="mailto:engelghandour@icloud.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  engelghandour@icloud.com
                </a>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-500">
                <p>Response time: Within 24 hours</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.name 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                  } bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:border-transparent transition-all`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-red-500 flex items-center gap-1"
                  >
                    <FiX size={14} /> {errors.name}
                  </motion.p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                  } bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:border-transparent transition-all`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-red-500 flex items-center gap-1"
                  >
                    <FiX size={14} /> {errors.email}
                  </motion.p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.subject 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                  } bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:border-transparent transition-all`}
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-red-500 flex items-center gap-1"
                  >
                    <FiX size={14} /> {errors.subject}
                  </motion.p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                  } bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:border-transparent transition-all resize-none`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-red-500 flex items-center gap-1"
                  >
                    <FiX size={14} /> {errors.message}
                  </motion.p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={formStatus === 'sending'}
                whileHover={{ scale: formStatus === 'idle' ? 1.02 : 1 }}
                whileTap={{ scale: formStatus === 'idle' ? 0.98 : 1 }}
                className={`w-full py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all ${
                  formStatus === 'success'
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : formStatus === 'error'
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                }`}
              >
                {formStatus === 'sending' && (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                )}
                {formStatus === 'success' && (
                  <>
                    <FiCheck size={20} />
                    Message Sent Successfully!
                  </>
                )}
                {formStatus === 'error' && (
                  <>
                    <FiX size={20} />
                    Failed to Send
                  </>
                )}
                {formStatus === 'idle' && (
                  <>
                    <FiSend size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
