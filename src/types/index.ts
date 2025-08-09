export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}