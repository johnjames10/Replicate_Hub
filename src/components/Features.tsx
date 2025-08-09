import React from 'react';
import { Cloud, Users, Rocket, Shield, Code, BarChart } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Reproducible Environments",
      description: "One-click reproducible runs with pinned dependencies and version control.",
      highlight: true
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Workspaces", 
      description: "Invite teammates, comment on experiments, and fork successful runs."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "One-click Deploy",
      description: "From experiment to production API in minutes with automated scaling.",
      highlight: true
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "SOC2 compliant with private clouds and advanced access controls."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Universal SDKs",
      description: "Python, JavaScript, and REST APIs for seamless integration.",
      highlight: true
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Track model performance, usage metrics, and team productivity."
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-cyan-400">Core Features</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
            Everything you need to
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              build amazing AI
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Streamline your machine learning workflow with production-ready tools designed for modern AI teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-6 lg:p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 ${
                feature.highlight ? 'ring-1 ring-violet-500/30' : ''
              }`}
              style={{ 
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {feature.highlight && (
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✨</span>
                </div>
              )}
              
              <div className="text-violet-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              
              <p className="text-slate-300 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/0 via-violet-600/5 to-cyan-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Features;