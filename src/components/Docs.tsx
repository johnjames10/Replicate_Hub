import React from 'react';
import { Book, ExternalLink, Terminal } from 'lucide-react';
import CodeBlock from './CodeBlock';

const Docs: React.FC = () => {
  return (
    <section id="docs" className="py-20 lg:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-6">
            <Book className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">Documentation</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
            Get started in
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              minutes, not hours
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Simple APIs, comprehensive SDKs, and detailed documentation to get you building AI applications fast.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Quick Start</h3>
              <p className="text-slate-300 mb-6">
                Install the Replicate Hub SDK and run your first AI model in just a few lines of code.
              </p>
              
              <div className="space-y-4">
                <div className="bg-slate-950 border border-white/10 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-medium text-white">Installation</span>
                  </div>
                  <code className="text-sm text-slate-300">
                    pip install replicate-hub
                  </code>
                </div>
                
                <div className="bg-slate-950 border border-white/10 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-medium text-white">Authentication</span>
                  </div>
                  <code className="text-sm text-slate-300">
                    export REPLICATE_API_TOKEN="your-token"
                  </code>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
                <h4 className="text-lg font-semibold text-white mb-2">API Reference</h4>
                <p className="text-sm text-slate-300 mb-4">Complete API documentation with examples</p>
                <a href="#" className="inline-flex items-center space-x-1 text-violet-400 hover:text-violet-300 text-sm font-medium">
                  <span>View Docs</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              
              <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
                <h4 className="text-lg font-semibold text-white mb-2">SDK Examples</h4>
                <p className="text-sm text-slate-300 mb-4">Code samples for popular frameworks</p>
                <a href="#" className="inline-flex items-center space-x-1 text-violet-400 hover:text-violet-300 text-sm font-medium">
                  <span>Browse Examples</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Try it now</h3>
              <CodeBlock language="python" code="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Docs;