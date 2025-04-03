import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center space-y-8 max-w-3xl">
        <h1 className="text-5xl font-bold text-blue-900">Legal Aid Assistant</h1>
        <p className="text-xl text-gray-600">Your AI-powered legal guidance platform for Indian law</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link href="/login">
            <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
              Get Started
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="lg" className="border-blue-300">
              Learn More
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">For Legal Aid Seekers</h3>
            <p className="text-gray-600">Get guidance on your legal questions with our AI-powered assistant</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">For Lawyers</h3>
            <p className="text-gray-600">Access case laws, legal sections, and past judgments</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">12 Legal Categories</h3>
            <p className="text-gray-600">From Criminal Law to Property Rights and more</p>
          </div>
        </div>
      </div>
    </main>
  );
}
