"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Mock data for categories and subcategories
const CATEGORIES = {
  criminal: {
    name: "Criminal Law",
    subcategories: [
      { id: "fir", name: "FIR Registration", description: "Process of filing a First Information Report" },
      { id: "bail", name: "Bail Procedures", description: "Understanding bail application and procedures" },
      { id: "trial", name: "Criminal Trial", description: "Stages of criminal trial in India" }
    ]
  },
  civil: {
    name: "Civil Disputes",
    subcategories: [
      { id: "property", name: "Property Disputes", description: "Resolving property-related civil matters" },
      { id: "contract", name: "Contract Breaches", description: "Legal remedies for contract violations" },
      { id: "recovery", name: "Money Recovery", description: "Procedures for recovering money owed" }
    ]
  },
  land: {
    name: "Land Rights",
    subcategories: [
      { id: "title", name: "Land Titles", description: "Understanding land ownership documents" },
      { id: "acquisition", name: "Land Acquisition", description: "Government acquisition of private land" },
      { id: "tenancy", name: "Tenancy Rights", description: "Rights of tenants on agricultural land" }
    ]
  },
  constitutional: {
    name: "Constitutional Help",
    subcategories: [
      { id: "fundamental", name: "Fundamental Rights", description: "Understanding your constitutional rights" },
      { id: "pil", name: "Public Interest Litigation", description: "Filing PILs for public causes" },
      { id: "writs", name: "Writ Petitions", description: "Types of writs and their applications" }
    ]
  },
  marriage: {
    name: "Marriage Laws",
    subcategories: [
      { id: "registration", name: "Marriage Registration", description: "Process for registering marriages" },
      { id: "divorce", name: "Divorce Procedures", description: "Legal process for divorce in India" },
      { id: "domestic", name: "Domestic Violence", description: "Legal protection against domestic violence" }
    ]
  }
};

export default function Category() {
  const params = useParams();
  const categoryId = params.id as string;
  const category = CATEGORIES[categoryId as keyof typeof CATEGORIES];
  
  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category not found</h1>
          <Link href="/dashboard">
            <Button>Back to Dashboard</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-2xl font-bold text-blue-900">{category.name}</h1>
            <Link href="/dashboard">
              <Button variant="outline">Back to Dashboard</Button>
            </Link>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-xl font-semibold mb-6">Subcategories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.subcategories.map((subcategory) => (
            <Link 
              key={subcategory.id} 
              href={`/dashboard/category/${categoryId}/subcategory/${subcategory.id}`}
            >
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <h3 className="text-lg font-semibold mb-2">{subcategory.name}</h3>
                <p className="text-gray-600">{subcategory.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}