'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleRoleSelect = async (role: string) => {
    setSelectedRole(role);
    setIsLoading(true);
    
    // Simulate role selection processing
    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Choose Your Role</h1>
        <p className="text-xl text-gray-600">Select how you would like to use LawBot</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className={`p-6 rounded-xl border-2 cursor-pointer transition-colors
              ${selectedRole === 'client' 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 bg-white hover:border-blue-300'}`}
            onClick={() => handleRoleSelect('client')}
          >
            <div className="h-20 w-20 mx-auto mb-4">
              <svg className="h-full w-full text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2">I Need Legal Help</h2>
            <p className="text-gray-600">Get AI-powered legal guidance and connect with lawyers</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className={`p-6 rounded-xl border-2 cursor-pointer transition-colors
              ${selectedRole === 'lawyer' 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 bg-white hover:border-blue-300'}`}
            onClick={() => handleRoleSelect('lawyer')}
          >
            <div className="h-20 w-20 mx-auto mb-4">
              <svg className="h-full w-full text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2">I am a Lawyer</h2>
            <p className="text-gray-600">Provide legal services and connect with clients</p>
          </motion.div>
        </div>

        {selectedRole && (
          <Button 
            className="mt-8 w-full max-w-md mx-auto"
            disabled={isLoading}
            onClick={() => handleRoleSelect(selectedRole)}
          >
            {isLoading ? 'Processing...' : 'Continue'}
          </Button>
        )}
      </div>
    </div>
  );
}