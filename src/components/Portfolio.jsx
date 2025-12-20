import React, { useState, useEffect } from 'react';
import { Moon, Sun, ArrowUp } from 'lucide-react';
import { HeroSection, AboutSection, StrengthsSection, ExperienceSection, ProjectsSection, CertificationsSection, ContactSection, Footer } from './Sections';

export default function Portfolio() {
  const [scroll, setScroll] = useState(false);
  const [dark, setDark] = useState(false);
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const lines = [
    "I Have Experience in Python, MLOps, AWS and More",
    "Software and Machine Learning Engineer",
    "AWS Certified Machine Learning Engineer",
    "Always Building, Always Creating, Always Learning.",
    "Problem Solver and Leetcoder!!!"
  ];

  useEffect(() => {
    const line = lines[idx % lines.length];
    if (text.length < line.length) {
      setTimeout(() => setText(line.substring(0, text.length + 1)), 80);
    } else {
      setTimeout(() => { setText(''); setIdx(i => i + 1); }, 2000);
    }
  }, [text, idx, lines]);

  useEffect(() => {
    const handle = () => setScroll(window.scrollY > 50);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-hidden">
        
        {/* Animated floating shapes */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-2xl opacity-20 animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-float-delayed"></div>
          <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-green-400 rounded-2xl opacity-20 animate-spin-slow"></div>
          <div className="absolute top-1/2 right-10 w-32 h-2 bg-blue-600 opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-yellow-400 rounded-full opacity-20 animate-bounce-slow"></div>
          <div className="absolute top-60 left-1/3 w-12 h-12 bg-pink-400 rounded-2xl opacity-20 animate-float-delayed"></div>
        </div>
        
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          @keyframes float-delayed {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-30px) translateX(10px); }
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
          .animate-spin-slow { animation: spin-slow 20s linear infinite; }
          .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        `}</style>
        
        <nav className={`fixed w-full z-50 transition-all ${scroll ? 'bg-white dark:bg-gray-900 shadow' : 'bg-gray-100 dark:bg-gray-900'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5 flex justify-between items-center">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-2xl">P</span>
              </div>
              <div>
                <div className="font-bold text-sm sm:text-lg">Praneeth</div>
                <div className="text-xs sm:text-sm text-gray-500">Sai Chunchu</div>
              </div>
            </div>
            
            <div className="hidden lg:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-gray-600 transition">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-gray-600 transition">About Me</button>
              <button onClick={() => scrollToSection('strengths')} className="hover:text-gray-600 transition">Strengths</button>
              <button onClick={() => scrollToSection('exp')} className="hover:text-gray-600 transition">Experience</button>
              <button onClick={() => scrollToSection('proj')} className="hover:text-gray-600 transition">Projects</button>
              <button onClick={() => scrollToSection('certs')} className="hover:text-gray-600 transition">Certifications</button>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button onClick={() => scrollToSection('contact')} className="hidden sm:block bg-black dark:bg-white dark:text-black text-white px-4 sm:px-7 py-2 sm:py-3 rounded-full text-sm sm:text-base">Contact</button>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black dark:bg-white dark:text-black text-white px-4 sm:px-7 py-2 sm:py-3 rounded-full text-sm sm:text-base"
              >
                Resume
              </a>
              <button onClick={() => setDark(!dark)} className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                {dark ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
              <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1">
                <span className="w-6 h-0.5 bg-gray-900 dark:bg-white transition"></span>
                <span className="w-6 h-0.5 bg-gray-900 dark:bg-white transition"></span>
                <span className="w-6 h-0.5 bg-gray-900 dark:bg-white transition"></span>
              </button>
            </div>
          </div>
          
          {menuOpen && (
            <div className="lg:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700">
              <div className="flex flex-col px-4 py-2">
                <button onClick={() => { scrollToSection('home'); setMenuOpen(false); }} className="py-3 text-left hover:text-blue-600">Home</button>
                <button onClick={() => { scrollToSection('about'); setMenuOpen(false); }} className="py-3 text-left hover:text-blue-600">About Me</button>
                <button onClick={() => { scrollToSection('strengths'); setMenuOpen(false); }} className="py-3 text-left hover:text-blue-600">Strengths</button>
                <button onClick={() => { scrollToSection('exp'); setMenuOpen(false); }} className="py-3 text-left hover:text-blue-600">Experience</button>
                <button onClick={() => { scrollToSection('proj'); setMenuOpen(false); }} className="py-3 text-left hover:text-blue-600">Projects</button>
                <button onClick={() => { scrollToSection('certs'); setMenuOpen(false); }} className="py-3 text-left hover:text-blue-600">Certifications</button>
              </div>
            </div>
          )}
        </nav>

        <HeroSection text={text} />
        <AboutSection scrollToSection={scrollToSection} />
        <StrengthsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
        <Footer scrollToSection={scrollToSection} />

        {scroll && (
          <button onClick={() => scrollToSection('home')} className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center z-50 hover:bg-blue-700 transition transform hover:scale-110">
            <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}
      </div>
    </div>
  );
}