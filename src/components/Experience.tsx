import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';

export default function Experience() {
  const experiences = [
    {
      company: 'Aastra Technologies',
      role: 'Senior Mobile App Developer',
      period: 'Feb 2025 - Feb 2026',
      location: 'Chennai',
      description:
        'Led mobile application development and handled device-level integrations.',
      achievements: [
        'Led a small team in developing Android mobile applications',
        'Integrated RFID devices for real-time scanning and data processing',
        'Designed application flows and ensured delivery quality',
        'Coordinated with stakeholders to meet project timelines'
      ]
    },
    {
      company: 'Kosuke Technologies',
      role: 'Mobile Application Developer',
      period: 'Dec 2024 - Feb 2025',
      location: 'Chennai',
      description:
        'Worked on mobile application development for business-focused platforms.',
      achievements: [
        'Built and maintained Flutter mobile applications',
        'Implemented authentication and API-driven workflows',
        'Worked closely with product teams to deliver customer-facing features'
      ]
    },
    {
      company: 'Renixe Info Tech Pvt. Ltd.',
      role: 'Software Developer',
      period: 'Nov 2023 - Dec 2024',
      location: 'Avadi, Chennai',
      description:
        'Working as a junior developer on production mobile and web applications under senior guidance.',
      achievements: [
        'Developed Flutter application features with REST API integration',
        'Implemented authentication flows and payment-related modules',
        'Assisted in Google Play Store deployment and release activities',
        'Fixed bugs and improved application stability'
      ]
    },


  ];

  return (
    <section id="experience" className="py-24 bg-dark-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none will-change-transform"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none will-change-transform"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
              Work <span className="text-primary-400">Experience</span>
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.2}>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              My professional journey and key achievements in the tech industry.
            </p>
          </Reveal>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Reveal key={exp.company} width="100%" delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -5 }}
                className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary-500/30 transition-all duration-300 hover:bg-white/10 overflow-hidden"
              >
                {/* Gradient Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8">
                  {/* Icon Column */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-dark-900/50 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Briefcase className="w-8 h-8 text-primary-400" />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-2xl font-bold text-white font-display group-hover:text-primary-400 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-primary-300 font-medium">{exp.company}</p>
                      </div>

                      <div className="flex flex-col items-start md:items-end gap-1 text-sm text-gray-400">
                        <div className="flex items-center gap-2 bg-dark-900/50 px-3 py-1 rounded-full border border-white/5">
                          <Calendar size={14} className="text-primary-500" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-dark-900/50 px-3 py-1 rounded-full border border-white/5">
                          <MapPin size={14} className="text-primary-500" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                      {exp.description}
                    </p>

                    <div className="bg-dark-900/30 rounded-xl p-5 border border-white/5">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Key Achievements</h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0 shadow-[0_0_8px_rgba(139,92,246,0.6)]"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}