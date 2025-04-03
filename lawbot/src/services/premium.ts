export interface PremiumFeatures {
  casePrediction: boolean;
  advancedAnalytics: boolean;
  prioritySupport: boolean;
  documentAnalysis: boolean;
}

export interface SubscriptionTier {
  name: string;
  price: number;
  features: PremiumFeatures;
}

export const subscriptionTiers: SubscriptionTier[] = [
  {
    name: 'Basic',
    price: 0,
    features: {
      casePrediction: false,
      advancedAnalytics: false,
      prioritySupport: false,
      documentAnalysis: false
    }
  },
  {
    name: 'Premium',
    price: 29.99,
    features: {
      casePrediction: true,
      advancedAnalytics: true,
      prioritySupport: true,
      documentAnalysis: true
    }
  }
];

export function checkFeatureAccess(feature: keyof PremiumFeatures, tier: string): boolean {
  const subscription = subscriptionTiers.find(t => t.name === tier);
  return subscription?.features[feature] || false;
}