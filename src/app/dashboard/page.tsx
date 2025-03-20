import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-2xl font-bold text-blue-900">Legal Aid Dashboard</h1>
            <Button variant="outline">Sign Out</Button>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Legal Categories */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Legal Categories</h2>
            <ul className="space-y-2">
              <li><Link href="/dashboard/category/criminal" className="text-blue-600 hover:underline">Criminal Law</Link></li>
              <li><Link href="/dashboard/category/civil" className="text-blue-600 hover:underline">Civil Disputes</Link></li>
              <li><Link href="/dashboard/category/land" className="text-blue-600 hover:underline">Land Rights</Link></li>
              <li><Link href="/dashboard/category/constitutional" className="text-blue-600 hover:underline">Constitutional Help</Link></li>
              <li><Link href="/dashboard/category/marriage" className="text-blue-600 hover:underline">Marriage Laws</Link></li>
              <li><Link href="/dashboard/category/more" className="text-blue-600 hover:underline">View All Categories...</Link></li>
            </ul>
          </div>
          
          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <Button className="w-full">Start New Chat</Button>
              <Button variant="outline" className="w-full">Browse Resources</Button>
              <Button variant="outline" className="w-full">View History</Button>
            </div>
          </div>
          
          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <p className="text-gray-600">No recent activity to display.</p>
          </div>
        </div>
      </main>
    </div>
  );
}