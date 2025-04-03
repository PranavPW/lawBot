"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Mock data for legal resources
const RESOURCES = [
  {
    id: "1",
    title: "Indian Penal Code",
    type: "Legal Code",
    description: "The main criminal code of India that covers all substantive aspects of criminal law.",
    url: "/resources/ipc"
  },
  {
    id: "2",
    title: "Code of Criminal Procedure",
    type: "Legal Code",
    description: "The main legislation on procedure for administration of criminal law in India.",
    url: "/resources/crpc"
  },
  {
    id: "3",
    title: "Hindu Marriage Act",
    type: "Act",
    description: "Law relating to marriage among Hindus codified in 1955.",
    url: "/resources/hma"
  },
  {
    id: "4",
    title: "Special Marriage Act",
    type: "Act",
    description: "A civil marriage law for citizens irrespective of religion.",
    url: "/resources/sma"
  },
  {
    id: "5",
    title: "Protection of Women from Domestic Violence Act",
    type: "Act",
    description: "An act to protect women from domestic violence.",
    url: "/resources/pwdva"
  },
  {
    id: "6",
    title: "Right to Information Act",
    type: "Act",
    description: "Law that sets out the rules and procedures regarding citizens' right to information.",
    url: "/resources/rti"
  }
];

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredResources = RESOURCES.filter(resource => 
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-2xl font-bold text-blue-900">Legal Resources</h1>
            <Link href="/dashboard">
              <Button variant="outline">Back to Dashboard</Button>
            </Link>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="bg-white p-6 rounded-lg shadow-md">
              <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded mb-2">
                {resource.type}
              </span>
              <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <Link href={resource.url}>
                <Button variant="outline" className="w-full">View Details</Button>
              </Link>
            </div>
          ))}
          
          {filteredResources.length === 0 && (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-600">No resources found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}