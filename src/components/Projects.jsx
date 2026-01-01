import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Krishi Mitra',
      description: 'An agricultural assistance platform designed to help farmers with crop recommendations, weather updates, and farming best practices using machine learning algorithms.',
      tech: ['Python', 'Machine Learning', 'Flask', 'React', 'MongoDB'],
      image: <img alt="Happy Indian farmer in a field" src="https://images.unsplash.com/photo-1670607951160-d7780f0f0478" />
    },
    {
      title: 'Heart Disease Prediction',
      description: 'A machine learning-based predictive system that analyzes patient data to assess the risk of heart disease using various classification algorithms and data visualization.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
      image: <img alt="Medical data visualization dashboard with heart rate monitor" src="https://images.unsplash.com/photo-1682706841297-5524ba1faa9c" />
    },
    {
      title: 'Expense Tracker',
      description: 'A comprehensive web application for tracking personal finances, managing budgets, and visualizing spending patterns with interactive charts and reports.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
      image: <img alt="Financial dashboard with charts and budget tracking graphs" src="https://images.unsplash.com/photo-1614029496114-c84c1bbef6c1" />
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-[#F8FAFC]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#020617] bg-gradient-to-r from-[#0F172A] to-[#334155] bg-clip-text text-transparent">
            Featured <span className="text-[#38BDF8]">Projects</span>
          </h2>
          <p className="text-[#334155] text-lg">Showcasing my best work and innovations</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-[#E2E8F0] hover:border-[#38BDF8]/50 transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                   {project.image}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/50 via-transparent to-transparent"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-[#38BDF8] transition-colors">{project.title}</h3>
                <p className="text-[#334155] mb-4 leading-relaxed flex-grow text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#F1F5F9] rounded-full text-xs font-medium text-[#0F172A] border border-[#E2E8F0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <a href="https://github.com/isha54ry" target="_blank" rel="noopener noreferrer">
                    <Button
                      className="w-full bg-white hover:bg-[#38BDF8] hover:text-white text-[#0F172A] border border-[#334155]/20 hover:border-[#38BDF8] transition-all duration-300"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Source
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;