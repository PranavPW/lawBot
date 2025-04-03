import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Premium() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-2xl font-bold text-blue-900">Premium Features</h1>
            <Link href="/dashboard">
              <Button variant="outline">Back to Dashboard</Button>
            </Link>
          </div>
        </div>
      </header>
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Upgrade Your Legal Experience</h2>
          <p className="text-xl text-gray-600">Access advanced features and professional legal support</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4">Standard</h3>
            <p className="text-gray-600 mb-6">Free access to basic legal information</p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                AI-powered legal guidance
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Access to legal resources
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Basic legal information
              </li>
            </ul>
            
            <div className="text-center">
              <span className="block text-3xl font-bold mb-2">Free</span>
              <span className="block text-gray-600 mb-6">Forever</span>
              <Button disabled className="w-full bg-gray-300 cursor-not-allowed">Current Plan</Button>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border-2 border-blue-500 relative">
            <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-sm font-semibold rounded-bl">
              RECOMMENDED
            </div>
            <h3 className="text-2xl font-bold mb-4">Premium</h3>
            <p className="text-gray-600 mb-6">Advanced features and professional support</p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                All Standard features
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Paid lawyer consultations
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Advanced legal research tools
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Priority support
              </li>
            </ul>
            
            <div className="text-center">
              <span className="block text-3xl font-bold mb-2">₹499</span>
              <span className="block text-gray-600 mb-6">per month</span>
              <Button className="w-full bg-blue-700 hover:bg-blue-800">Upgrade Now</Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold mb-2">Coming Soon</h3>
          <p className="mb-4">We're working on additional premium features including:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Document review by legal professionals</li>
            <li>Custom legal document generation</li>
            <li>Video consultations with lawyers</li>
          </ul>
        </div>
      </main>
    </div>
  );
}