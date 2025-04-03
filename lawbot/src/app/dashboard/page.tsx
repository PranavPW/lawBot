'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Activity } from '@/types';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    // Simulate loading activities
    const loadActivities = () => {
      setTimeout(() => {
        setActivities([
          {
            id: '1',
            title: 'Chat Session: Property Law',
            type: 'chat',
            timestamp: new Date(),
            link: '/chat'
          },
          {
            id: '2',
            title: 'Resource: Contract Templates',
            type: 'resource',
            timestamp: new Date(Date.now() - 86400000), // Yesterday
            link: '/resources'
          }
        ]);
        setIsLoading(false);
      }, 1000);
    };

    loadActivities();
  }, []);

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-2">Welcome back!</h2>
        <p className="text-gray-600">Here's an overview of your legal assistance dashboard.</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/chat" className="block">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Start Chat</h3>
            <p className="text-gray-600">Get AI-powered legal guidance instantly</p>
          </div>
        </Link>
        
        <Link href="/resources" className="block">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Browse Resources</h3>
            <p className="text-gray-600">Access legal documents and guides</p>
          </div>
        </Link>
        
        <Link href="/premium" className="block">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Upgrade Plan</h3>
            <p className="text-gray-600">Get access to premium features</p>
          </div>
        </Link>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        {isLoading ? (
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/4"></div>
              </div>
            ))}
          </div>
        ) : activities.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No recent activity</p>
        ) : (
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between py-2 border-b">
                <div>
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-sm text-gray-600">
                    {activity.timestamp.toLocaleDateString('en-US', {
                      hour: 'numeric',
                      minute: 'numeric',
                      hour12: true,
                    })}
                  </p>
                </div>
                <Link href={activity.link}>
                  <Button variant="outline" size="sm">
                    {activity.type === 'chat' ? 'Resume' : 'View'}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}