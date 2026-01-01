import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Hero = () => {
  const { toast } = useToast();

  const handleEmailClick = () => {
    toast({
      title: "Contact Info",
      description: "Please check my resume or LinkedIn for contact details!"
    });
  };

const handleResumeClick = () => {
    toast({
        title: "Downloading Resume",
        description: "Resume download started!"
    });

    // Replace 'resume.pdf' with your actual PDF file path (public folder)
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Isha_Raj_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F8FAFC] via-[#F8FAFC] to-[#F1F5F9]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-32 h-32 rounded-full border-2 border-[#38BDF8] bg-[#FFFFFF] mb-8 flex items-center justify-center text-4xl font-bold text-[#0F172A] shadow-[0_0_30px_rgba(56,189,248,0.3)]"
          >
            IR
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4 text-[#020617] pb-2 bg-gradient-to-r from-[#0F172A] to-[#334155] bg-clip-text text-transparent"
          >
            Isha <span className="text-[#38BDF8]">Raj</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-[#334155] mb-2 font-medium"
          >
            B.Tech CSE, KIIT University Bhubaneswar
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-[#64748B] mb-8 max-w-2xl"
          >
            Final Year Student | Tech Enthusiast
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-8 justify-center"
          >
            <a href="https://github.com/isha54ry" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="bg-white hover:bg-[#38BDF8] text-[#0F172A] border-[#334155]/20 hover:border-[#38BDF8] hover:text-white transition-all duration-300"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/isha-raj-223184250/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="bg-white hover:bg-[#38BDF8] text-[#0F172A] border-[#334155]/20 hover:border-[#38BDF8] hover:text-white transition-all duration-300"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </a>
            <Button
              onClick={handleEmailClick}
              variant="outline"
              className="bg-white hover:bg-[#38BDF8] text-[#0F172A] border-[#334155]/20 hover:border-[#38BDF8] hover:text-white transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              onClick={handleResumeClick}
              className="bg-[#38BDF8] hover:bg-[#0EA5E9] text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-none font-semibold"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;