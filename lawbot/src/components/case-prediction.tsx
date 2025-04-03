'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import type { CasePrediction } from '@/services/prediction';

interface PredictionProps {
  isPremium: boolean;
  chatHistory: string[];
  caseType: string;
}

export function CasePredictionPanel({ isPremium, chatHistory, caseType }: PredictionProps) {
  const [prediction, setPrediction] = useState<CasePrediction | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  if (!isPremium) {
    return (
      <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-2">Case Prediction</h3>
        <p className="text-gray-600 mb-4">Upgrade to Premium to access case outcome predictions</p>
        <Button variant="outline" onClick={() => window.location.href = '/premium'}>
          Upgrade Now
        </Button>
      </div>
    );
  }

  return (
    <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Case Analysis</h3>
      
      {prediction ? (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-blue-600">
              {prediction.likelihood}%
            </div>
            <div className="text-sm text-gray-600">Success Likelihood</div>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Legal Reasoning</h4>
            <p className="text-gray-700">{prediction.reasoning}</p>
          </div>

          <div>
            <h4 className="font-medium mb-2">Similar Cases</h4>
            <ul className="list-disc list-inside text-gray-700">
              {prediction.similarCases.map((case_, i) => (
                <li key={i}>{case_}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-2">Ethical Considerations</h4>
            <ul className="list-disc list-inside text-gray-700">
              {prediction.ethicalConsiderations.map((consideration, i) => (
                <li key={i}>{consideration}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-2">Recommended Next Steps</h4>
            <ul className="list-disc list-inside text-gray-700">
              {prediction.nextSteps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <Button
          onClick={() => {/* Add prediction logic */}}
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? 'Analyzing...' : 'Analyze Case Outcome'}
        </Button>
      )}
    </div>
  );
}