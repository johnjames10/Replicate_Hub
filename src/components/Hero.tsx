import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Sparkles, Zap } from 'lucide-react';
import AuthModal from './AuthModal';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: 'signin' | 'signup' }>({
    isOpen: false,
    mode: 'signup'
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (clientX / innerWidth - 0.5) * 20,
        y: (clientY / innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const openAuthModal = (mode: 'signin' | 'signup') => {
    setAuthModal({ isOpen: true, mode });
  };

  const closeAuthModal = () => {
    setAuthModal({ isOpen: false, mode: 'signup' });
  };

  const changeAuthMode = (mode: 'signin' | 'signup') => {
    setAuthModal(prev => ({ ...prev, mode }));
  };

  const handleDemo = () => {
    // Scroll to docs section or open demo modal
    const docsSection = document.getElementById('docs');
    if (docsSection) {
      docsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-slate-900 overflow-hidden flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-white">MIT Sloan × K-1000 Hackathon</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none">
                Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">·</span> Share <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">·</span> Scale
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">AI</span> — Replicate Hub
              </h1>
              
              <p className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-lg">
                Reproducible experiments, team collaboration, deployable models — all in one beautiful workspace.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => openAuthModal('signup')}
                className="group bg-gradient-to-r from-violet-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-violet-500/25 transition-all duration-200 flex items-center justify-center space-x-2 transform hover:-translate-y-0.5"
                aria-label="Get early access to Replicate Hub"
              >
                <span>Get Early Access</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button 
                onClick={handleDemo}
                className="group bg-white/5 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-200 flex items-center justify-center space-x-2 transform hover:-translate-y-0.5"
              >
                <Play className="w-5 h-5" />
                <span>See Demo</span>
              </button>
            </div>
          </div>

          {/* Right - Membership Pass Cards */}
          <div className="relative flex justify-center lg:justify-end">
            <div 
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Background Cards */}
              <div 
                className="absolute inset-0 transform rotate-3 scale-95 opacity-60"
                style={{
                  transform: `rotate(6deg) scale(0.95) translateX(${mousePosition.x * 0.1}px) translateY(${mousePosition.y * 0.1}px)`
                }}
              >
                <div className="w-80 lg:w-96 h-56 lg:h-64 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md border border-white/10 rounded-2xl"></div>
              </div>
              
              <div 
                className="absolute inset-0 transform -rotate-2 scale-97 opacity-80"
                style={{
                  transform: `rotate(-3deg) scale(0.97) translateX(${mousePosition.x * 0.2}px) translateY(${mousePosition.y * 0.2}px)`
                }}
              >
                <div className="w-80 lg:w-96 h-56 lg:h-64 bg-gradient-to-br from-violet-900/60 to-cyan-900/60 backdrop-blur-md border border-white/20 rounded-2xl"></div>
              </div>

              {/* Main Card */}
              <div 
                className={`relative w-80 lg:w-96 h-56 lg:h-64 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md border border-white/30 rounded-2xl p-6 transition-all duration-300 ${
                  isHovered ? 'shadow-2xl shadow-violet-500/30 scale-105' : 'shadow-xl shadow-black/50'
                }`}
                style={{
                  transform: `translateX(${mousePosition.x * 0.3}px) translateY(${mousePosition.y * 0.3}px) ${isHovered ? 'scale(1.05)' : 'scale(1)'}`
                }}
              >
                {/* Card Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-white/10 rounded border border-white/20 flex items-center justify-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-sm"></div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Pro Member</h3>
                    <p className="text-slate-300 text-sm">Unlimited experiments • Team collaboration</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">AI</span>
                      </div>
                      <span className="text-white font-medium">ID: REP2025</span>
                    </div>
                    <div className="bg-gradient-to-r from-violet-600 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      EARLY ACCESS
                    </div>
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600 via-cyan-500 to-violet-600 opacity-0 hover:opacity-20 transition-opacity duration-300 animate-pulse" 
                     style={{ padding: '1px' }}>
                  <div className="w-full h-full bg-slate-800/90 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModal.isOpen}
        onClose={closeAuthModal}
        mode={authModal.mode}
        onModeChange={changeAuthMode}
      />
    </section>
  );
};

export default Hero;