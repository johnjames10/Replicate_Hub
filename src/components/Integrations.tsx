import React from 'react';

const Integrations: React.FC = () => {
  const integrations = [
    { name: 'Hugging Face', logo: '🤗' },
    { name: 'PyTorch', logo: '🔥' },
    { name: 'GitHub', logo: '📦' },
    { name: 'Docker', logo: '🐳' },
    { name: 'Jupyter', logo: '📓' },
    { name: 'TensorFlow', logo: '🧠' },
    { name: 'Weights & Biases', logo: '⚖️' },
    { name: 'MLflow', logo: '📊' }
  ];

  return (
    <section className="py-16 lg:py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Integrates with your favorite tools
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 group hover:scale-110 transition-transform duration-200"
            >
              <div className="w-12 h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center text-2xl group-hover:bg-white/10 transition-colors duration-200">
                {integration.logo}
              </div>
              <span className="text-xs text-slate-400 text-center group-hover:text-white transition-colors duration-200">
                {integration.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;