import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Keploy',
      role: 'API Fellow',
      period: 'Recent',
      type: 'Fellowship',
      description: 'Participated in API testing and development fellowship program, gaining hands-on experience with modern API testing tools and methodologies.',
      highlights: [
        'API Testing & Development',
        'Collaboration with development teams',
        'Modern testing frameworks'
      ]
    },
    {
      company: 'Bharat Coking Coal Limited',
      role: 'Intern',
      period: 'Previous',
      type: 'Internship',
      description: 'Gained practical experience in enterprise software systems and industrial automation processes.',
      highlights: [
        'Enterprise software systems',
        'Industrial automation',
        'Real-world problem solving'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-[#F8FAFC]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#020617] bg-gradient-to-r from-[#0F172A] to-[#334155] bg-clip-text text-transparent">
            Work <span className="text-[#38BDF8]">Experience</span>
          </h2>
          <p className="text-[#334155] text-lg">Professional journey and internships</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl p-8 border border-[#E2E8F0] shadow-md hover:shadow-xl hover:border-[#38BDF8]/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-[#F1F5F9] text-[#38BDF8]">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0F172A]">{exp.role}</h3>
                    <p className="text-lg text-[#38BDF8] font-medium">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#64748B] bg-[#F1F5F9] px-3 py-1 rounded-full border border-[#E2E8F0]">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>

              <p className="text-[#334155] mb-6 leading-relaxed">{exp.description}</p>

              <div className="space-y-3 bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E8F0]">
                <p className="text-sm font-semibold text-[#0F172A] uppercase tracking-wide">Key Highlights</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight} className="text-[#334155] flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;