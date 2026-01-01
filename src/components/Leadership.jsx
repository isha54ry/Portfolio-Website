import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, TrendingUp, Target } from 'lucide-react';

const Leadership = () => {
  const activities = [
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Active participant in group projects and collaborative coding sessions, fostering teamwork and knowledge sharing.',
    },
    {
      icon: Award,
      title: 'Technical Excellence',
      description: 'Recognized for outstanding performance in academic projects and competitive programming challenges.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Learning',
      description: 'Committed to staying updated with latest technologies through online courses, workshops, and tech communities.',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Demonstrated ability to set and achieve technical milestones while maintaining high code quality standards.',
    }
  ];

  return (
    <section id="leadership" className="py-20 px-6 bg-[#F8FAFC]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#020617] bg-gradient-to-r from-[#0F172A] to-[#334155] bg-clip-text text-transparent">
            Leadership <span className="text-[#38BDF8]">&</span> Activities
          </h2>
          <p className="text-[#334155] text-lg">Beyond technical skills - personal growth and contributions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-8 border border-[#E2E8F0] shadow-md hover:shadow-xl hover:border-[#38BDF8]/50 transition-all duration-300 group"
            >
              <div className="inline-flex p-4 rounded-lg bg-[#F1F5F9] text-[#38BDF8] mb-4 group-hover:bg-[#38BDF8]/10 transition-colors duration-300">
                <activity.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-[#38BDF8] transition-colors">{activity.title}</h3>
              <p className="text-[#334155] leading-relaxed">{activity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;