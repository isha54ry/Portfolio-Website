import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-[#334155] bg-[#0F172A]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center space-y-4"
        >
          <div className="flex items-center gap-2 text-[#94A3B8]">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-[#38BDF8] fill-[#38BDF8] animate-pulse" />
            <span>and</span>
            <Code className="w-4 h-4 text-[#F8FAFC]" />
            <span>by Isha Raj</span>
          </div>
          
          <p className="text-[#94A3B8] text-sm text-center">
            © 2026 Isha Raj. All rights reserved.
          </p>

          <p className="text-[#94A3B8]/60 text-xs text-center max-w-md">
            Final Year CSE Student | Passionate about building innovative solutions
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;