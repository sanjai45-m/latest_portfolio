import { Code2, Palette, Cpu, Database, CreditCard, Radio, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';

export default function About() {
  const skills = [
    {
      icon: Cpu,
      title: 'Mobile App Development',
      description: 'Building and deploying production-ready mobile applications with real-world integrations.',
      technologies: [
        'Flutter',
        'Dart',
        'Android (Java)',
        'iOS Deployment',
        'Background Services'
      ]
    },
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Developing modern, responsive web applications with clean and maintainable code.',
      technologies: [
        'JavaScript',
        'React.js',
        'HTML5',
        'CSS3', 'Tailwind CSS', 'Redux', 'Node.js',
        'REST API Integration'
      ]
    },
    {
      icon: Database,
      title: 'Backend & Cloud Services',
      description: 'Integrating secure authentication, real-time data, and cloud services into applications.',
      technologies: [
        'Firebase Authentication',
        'Firestore / Realtime Database',
        'JWT Authentication',
        'API Integration'
      ]
    },
    {
      icon: CreditCard,
      title: 'Payments & App Deployment',
      description: 'Implementing secure payment workflows and managing app store deployments.',
      technologies: [
        'Razorpay Integration',
        'Google Play Store Deployment',
        'Apple App Store / TestFlight',
        'Release Management'
      ]
    },
    {
      icon: Radio,
      title: 'Device & Hardware Integration',
      description: 'Building applications that integrate with external devices and handle real-time data.',
      technologies: [
        'RFID Device Integration',
        'Bluetooth / USB Communication',
        'Real-time Scanning',
        'Backend Sync'
      ]
    },
    {
      icon: Brain,
      title: 'AI Model Training & Integration',
      description: 'Training, fine-tuning, and integrating AI models to solve real-world problems.',
      technologies: [
        'BERT-based NLP Models',
        'Model Fine-tuning',
        'Semantic Search & Matching',
        'AI API Integration'
      ]
    }
  ];


  return (
    <section id="about" className="py-24 bg-dark-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-500/10 rounded-full blur-3xl will-change-transform"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, delay: 2, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-3xl will-change-transform"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
              About <span className="text-primary-400">Me</span>
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.4}>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I build and deploy mobile and web applications using Flutter, React, and Android, with experience in payments, authentication, background services, and Play Store deployment. I also train and fine-tune NLP models (BERT-based) and integrate AI-driven features into applications to solve real-world problems, along with hands-on experience in Android-based RFID device integration.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {skills.map(({ icon: Icon, title, description, technologies }, index) => (
            <Reveal key={title} delay={index * 0.2} className="h-full">
              <motion.div
                whileHover={{ y: -10 }}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300 h-full flex flex-col"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Icon className="w-7 h-7 text-primary-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-display flex-shrink-0">{title}</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-shrink-0 min-h-[5rem]">{description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium text-primary-300 bg-primary-500/10 px-3 py-1 rounded-full border border-primary-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}