import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_8duhc0t',
        'template_yg2mp5t',
        form.current,
        'IFMfu-Wa1rSBgVR9p'
      )
      .then(
        () => {
          form.current!.reset();
          toast.success('Message sent successfully!', {
            position: 'top-center',
            autoClose: 3000,
            theme: 'dark',
          });
          setIsSubmitting(false);
        },
        (error) => {
          toast.error(`Failed to send message: ${error.text}`, {
            position: 'top-center',
            autoClose: 5000,
            theme: 'dark',
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-dark-900 relative overflow-hidden">
      <ToastContainer />

      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
              Get in <span className="text-primary-400">Touch</span>
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.4}>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Let's discuss how we can work together to build something amazing.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:bg-white/10">
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 rounded-full bg-primary-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 font-display">Email</h3>
                  <a href="mailto:sanjaim202@gmail.com" className="text-gray-400 hover:text-primary-400 transition-colors">
                    sanjaim202@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:bg-white/10">
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 rounded-full bg-primary-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 font-display">Phone</h3>
                  <a href="tel:+919361557446" className="text-gray-400 hover:text-primary-400 transition-colors">
                    +91 93615 57446
                  </a>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:bg-white/10">
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 rounded-full bg-primary-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 font-display">Location</h3>
                  <p className="text-gray-400">Chennai, Tamil Nadu</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form ref={form} onSubmit={sendEmail} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-2xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    required
                    className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="reply_to"
                    required
                    className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-300"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all duration-300 resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-600 to-purple-600 text-white py-4 px-6 rounded-xl hover:from-primary-500 hover:to-purple-500 transition-all duration-300 flex items-center justify-center gap-2 font-medium shadow-lg shadow-primary-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}