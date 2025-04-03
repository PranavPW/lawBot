'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { PremiumFeatures, checkFeatureAccess } from '@/services/premium';

interface PremiumContextType {
  isPremium: boolean;
  currentTier: string;
  features: PremiumFeatures;
  upgradeSubscription: () => Promise<void>;
}

const PremiumContext = createContext<PremiumContextType | undefined>(undefined);

export function PremiumProvider({ children }: { children: React.ReactNode }) {
  const [currentTier, setCurrentTier] = useState('Basic');
  const [features, setFeatures] = useState<PremiumFeatures>({
    casePrediction: false,
    advancedAnalytics: false,
    prioritySupport: false,
    documentAnalysis: false
  });

  useEffect(() => {
    // TODO: Fetch user's subscription from backend
    const fetchSubscription = async () => {
      // Placeholder for subscription check
      setCurrentTier('Basic');
    };
    fetchSubscription();
  }, []);

  const upgradeSubscription = async () => {
    // TODO: Implement payment flow
    console.log('Upgrading subscription...');
  };

  return (
    <PremiumContext.Provider value={{
      isPremium: currentTier === 'Premium',
      currentTier,
      features,
      upgradeSubscription
    }}>
      {children}
    </PremiumContext.Provider>
  );
}

export function usePremium() {
  const context = useContext(PremiumContext);
  if (context === undefined) {
    throw new Error('usePremium must be used within a PremiumProvider');
  }
  return context;
}