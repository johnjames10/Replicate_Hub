import React, { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import AuthModal from './AuthModal';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: 'signin' | 'signup' }>({
    isOpen: false,
    mode: 'signup'
  });

  const openAuthModal = (mode: 'signin' | 'signup') => {
    setAuthModal({ isOpen: true, mode });
  };

  const closeAuthModal = () => {
    setAuthModal({ isOpen: false, mode: 'signup' });
  };

  const changeAuthMode = (mode: 'signin' | 'signup') => {
    setAuthModal(prev => ({ ...prev, mode }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email.trim()) {
      // Handle newsletter subscription
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
      
      // Optionally open signup modal for full account creation
      setTimeout(() => {
        openAuthModal('signup');
      }, 1000);
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-r from-violet-900 to-cyan-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900/80"></div>
      
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-white">Stay Updated</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-black text-white">
              Get early access to new features
            </h2>
            
            <p className="text-lg text-slate-200 max-w-2xl mx-auto">
              Join thousands of AI researchers and developers. No spam, just the latest updates on Replicate Hub.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex space-x-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={isSubscribed}
                className="px-6 py-3 bg-gradient-to-r from-violet-600 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-200 flex items-center space-x-2 disabled:opacity-50"
                aria-label="Subscribe to newsletter"
              >
                {isSubscribed ? (
                  <span>Subscribed!</span>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
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

export default Newsletter;