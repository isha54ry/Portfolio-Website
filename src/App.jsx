import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import TechnicalSkills from '@/components/TechnicalSkills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Leadership from '@/components/Leadership';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Isha Raj - CSE Student Portfolio | Software Developer & ML Enthusiast</title>
        <meta name="description" content="Portfolio of Isha Raj, a final year B.Tech CSE student at KIIT University Bhubaneswar specializing in full-stack development, machine learning, and API testing." />
      </Helmet>
      <div className="min-h-screen bg-[#fcfafa] text-[#020617] selection:bg-[#c771e9] selection:text-[#0F172A]">
        <Header />
        <Hero />
        <Education />
        <TechnicalSkills />
        <Experience />
        <Projects />
        <Leadership />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;