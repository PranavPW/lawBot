import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p className="mt-2 text-gray-600">Access your Legal Aid Assistant account</p>
        </div>
        
        <div className="space-y-4">
          <Button className="w-full bg-blue-700 hover:bg-blue-800">
            Sign in with Google
          </Button>
          
          <div className="text-center text-sm text-gray-600">
            <p>By signing in, you agree to our Terms of Service and Privacy Policy</p>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <Link href="/" className="text-blue-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}