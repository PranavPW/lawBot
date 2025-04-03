"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Mock data for subcategories
const SUBCATEGORIES = {
  "criminal-fir": {
    name: "FIR Registration",
    description: "A First Information Report (FIR) is a written document prepared by the police when they receive information about the commission of a cognizable offense.",
    keyPoints: [
      "FIR should be filed at the earliest at the police station having jurisdiction",
      "Police are obligated to register FIR for cognizable offenses",
      "If police refuse to file FIR, you can approach the Superintendent of Police or Magistrate",
      "You can also file a private complaint before the Magistrate"
    ]
  },
  "marriage-divorce": {
    name: "Divorce Procedures",
    description: "Divorce is the legal dissolution of a marriage by a court or other competent body.",
    keyPoints: [
      "Mutual consent divorce requires both parties to agree",
      "Contested divorce can be filed on grounds like cruelty, desertion, etc.",
      "Mandatory 6-month cooling period in mutual consent divorce",
      "Alimony and child custody are determined as part of divorce proceedings"
    ]
  }
};

export default function Subcategory() {
  const params = useParams();
  const categoryId = params.id as string;
  const subcategoryId = params.subId as string;
  const key = `${categoryId}-${subcategoryId}`;
  const subcategory = SUBCATEGORIES[key as keyof typeof SUBCATEGORIES] || {
    name: subcategoryId,
    description: "Information about this legal topic",
    keyPoints: ["Consult with our AI assistant for more details"]
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-2xl font-bold text-blue-900">{subcategory.name}</h1>
            <Link href={`/dashboard/category/${categoryId}`}>
              <Button variant="outline">Back to Category</Button>
            </Link>
          </div>
        </div>
      </header>
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-lg mb-6">{subcategory.description}</p>
          
          <h2 className="text-xl font-semibold mb-4">Key Points</h2>
          <ul className="list-disc pl-5 space-y-2 mb-8">
            {subcategory.keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
            <h3 className="text-lg font-semibold mb-2">Need more specific information?</h3>
            <p className="mb-4">Our AI assistant can help answer your specific questions about {subcategory.name}.</p>
            <Link href={`/chat?topic=${categoryId}-${subcategoryId}`}>
              <Button className="bg-blue-700 hover:bg-blue-800">
                Chat with Legal Assistant
              </Button>
            </Link>
          </div>
          
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-2">Disclaimer</h3>
            <p className="text-sm text-gray-600">
              The information provided is for general guidance only and should not be considered as legal advice. 
              For specific legal issues, please consult with a qualified lawyer.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}