"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Mock data for chat history
const CHAT_HISTORY = [
  {
    id: "1",
    topic: "Criminal Law → FIR Registration",
    date: "2023-06-15",
    preview: "How do I file an FIR if the police refuse to register it?",
    url: "/chat?id=1"
  },
  {
    id: "2",
    topic: "Marriage Laws → Divorce Procedures",
    date: "2023-06-10",
    preview: "What is the process for mutual consent divorce in India?",
    url: "/chat?id=2"
  },
  {
    id: "3",
    topic: "Land Rights → Property Disputes",
    date: "2023-06-05",
    preview: "How can I verify the authenticity of a property document?",
    url: "/chat?id=3"
  }
];

export default function History() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-2xl font-bold text-blue-900">Chat History</h1>
            <Link href="/dashboard">
              <Button variant="outline">Back to Dashboard</Button>
            </Link>
          </div>
        </div>
      </header>
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {CHAT_HISTORY.length > 0 ? (
          <div className="space-y-4">
            {CHAT_HISTORY.map((chat) => (
              <div key={chat.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-lg font-semibold">{chat.topic}</h2>
                  <span className="text-sm text-gray-500">{chat.date}</span>
                </div>
                <p className="text-gray-600 mb-4">"{chat.preview}"</p>
                <div className="flex justify-end">
                  <Link href={chat.url}>
                    <Button variant="outline">Continue Conversation</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">No Chat History</h2>
            <p className="text-gray-600 mb-6">You haven't had any conversations yet.</p>
            <Link href="/chat">
              <Button>Start a New Chat</Button>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}