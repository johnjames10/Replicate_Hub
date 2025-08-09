import React from 'react';
import { Award, Users, Globe } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '10K+', label: 'Experiments Run', icon: <Award className="w-6 h-6" /> },
    { number: '500+', label: 'Active Teams', icon: <Users className="w-6 h-6" /> },
    { number: '50+', label: 'Countries', icon: <Globe className="w-6 h-6" /> }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2">
                <span className="text-sm font-medium text-violet-400">MIT Sloan × K-1000</span>
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-black text-white">
                Built by researchers,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                  for researchers
                </span>
              </h2>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                Replicate Hub was born from the frustration of managing AI experiments across research teams. 
                Our mission is to make reproducible AI accessible to everyone, from students to enterprise teams.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
                  <div className="text-violet-400 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Partner Logos */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-6">Proudly supported by</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-3 mx-auto">
                        MIT
                      </div>
                      <div className="text-white font-semibold">MIT Sloan</div>
                      <div className="text-slate-400 text-sm">School of Management</div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-3 mx-auto">
                        K
                      </div>
                      <div className="text-white font-semibold">K-1000</div>
                      <div className="text-slate-400 text-sm">Innovation Partners</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-slate-400 text-sm">
                  Part of the Global AI Hackathon initiative to democratize artificial intelligence research and development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;