import React, { useState } from 'react';
import { Check, ArrowRight, Crown, Zap } from 'lucide-react';
import AuthModal from './AuthModal';

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
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

  const handlePlanSelect = (planName: string) => {
    if (planName === 'Enterprise') {
      // Handle enterprise contact
      window.location.href = 'mailto:enterprise@replicate-hub.com?subject=Enterprise Plan Inquiry';
    } else {
      openAuthModal('signup');
    }
  };
  const plans = [
    {
      name: "Student",
      price: isYearly ? "0" : "0",
      period: "forever",
      features: [
        "5 experiments per month",
        "Basic collaboration",
        "Community support",
        "Standard compute"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: isYearly ? "79" : "99",
      period: isYearly ? "/year" : "/month",
      features: [
        "Unlimited experiments",
        "Advanced collaboration",
        "Priority support",
        "GPU compute included",
        "Private repositories",
        "Custom domains"
      ],
      cta: "Start Pro Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Everything in Pro",
        "Dedicated infrastructure",
        "Advanced security",
        "Custom integrations",
        "24/7 phone support",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-6">
            <Crown className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium text-violet-400">Membership Plans</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
            Choose your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              membership pass
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Get access to powerful AI tools and collaborative features with our flexible pricing plans.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${!isYearly ? 'text-white' : 'text-slate-400'}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-7 bg-white/10 rounded-full border border-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500"
              aria-label="Toggle between monthly and yearly billing"
            >
              <div className={`absolute top-1 w-5 h-5 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full transition-transform duration-200 ${
                isYearly ? 'translate-x-7' : 'translate-x-1'
              }`}></div>
            </button>
            <span className={`text-sm ${isYearly ? 'text-white' : 'text-slate-400'} flex items-center space-x-1`}>
              <span>Yearly</span>
              <span className="text-xs bg-cyan-500 text-white px-2 py-0.5 rounded">20% off</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-b from-violet-900/50 to-cyan-900/50 border-violet-500/50 shadow-xl shadow-violet-500/20' 
                  : 'bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-violet-600 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Zap className="w-3 h-3" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center space-x-1">
                  <span className="text-4xl font-black text-white">
                    {plan.price === "Custom" ? "" : "$"}{plan.price}
                  </span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => handlePlanSelect(plan.name)}
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                plan.popular
                  ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:shadow-lg hover:shadow-violet-500/25 transform hover:-translate-y-0.5'
                  : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
              }`}>
                <span>{plan.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400 text-sm">
            All plans include 14-day free trial. No credit card required.
          </p>
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

export default Pricing;