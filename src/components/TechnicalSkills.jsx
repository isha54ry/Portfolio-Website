import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Wrench, Brain } from 'lucide-react';

const TechnicalSkills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'C++', 'Java', 'SQL', 'HTML/CSS'],
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
    },
    {
      icon: Wrench,
      title: 'Tools & Platforms',
      skills: ['React', 'Node.js', 'Express', 'Django', 'Flask', 'Git', 'Docker', 'AWS', 'Postman'],
    },
    {
      icon: Brain,
      title: 'Core Competencies',
      skills: ['Machine Learning', 'Data Structures', 'Algorithms', 'API Testing', 'REST APIs', 'Web Development'],
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-[#F8FAFC]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0F172A] to-[#000000] bg-clip-text text-transparent mx-auto">
            Technical <span className="text-[#38BDF8]">Skills</span>
          </h2>
          <p className="text-[#334155] text-lg">My technical expertise and competencies</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl p-8 border border-[#E2E8F0] shadow-md hover:shadow-xl hover:border-[#38BDF8]/50 transition-all duration-300 group"
            >
              <div className="inline-flex p-3 rounded-lg bg-[#F1F5F9] group-hover:bg-[#38BDF8]/10 mb-4 transition-colors duration-300">
                <category.icon className="w-6 h-6 text-[#38BDF8]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-[#38BDF8] transition-colors duration-300">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-full text-sm text-[#334155] hover:border-[#38BDF8] hover:text-[#0F172A] hover:bg-[#E0F2FE] transition-colors duration-300 font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;