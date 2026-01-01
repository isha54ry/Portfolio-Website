import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-[#F8FAFC]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#020617] bg-gradient-to-r from-[#0F172A] to-[#334155] bg-clip-text text-transparent">
            Education <span className="text-[#38BDF8]">&</span> Academics
          </h2>
          <p className="text-[#334155] text-lg">My academic background and qualifications</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="max-w-4xl mx-auto bg-white rounded-xl p-8 border border-[#E2E8F0] shadow-lg hover:shadow-xl hover:border-[#38BDF8]/50 transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-lg bg-[#F1F5F9] text-[#0F172A]">
                <GraduationCap className="w-8 h-8 text-[#38BDF8]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-2">KIIT University</h3>
                <p className="text-lg font-medium text-[#334155] mb-2">B.Tech in Computer Science and Engineering</p>
                <div className="flex flex-wrap gap-4 text-[#64748B] text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Bhubaneswar, Odisha</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>2022 - 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
             <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-[#38BDF8] mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#0F172A] mb-2">Relevant Coursework</h4>
                  <p className="text-[#334155] leading-relaxed">
                    Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, 
                    Operating Systems, Computer Networks, Software Engineering, Machine Learning, Artificial Intelligence, 
                    Web Technologies.
                  </p>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;