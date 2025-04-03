'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { generateLegalResponse } from '@/services/ai';
import { CasePredictionPanel } from '@/components/case-prediction';
import { EncryptionService } from '@/services/encryption';
import { detectCaseType } from '@/services/caseDetection';
import { usePremium } from '@/contexts/PremiumContext';
import { MessageStorage, StoredMessage } from '@/services/storage';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  encrypted?: boolean;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [encryptionKey, setEncryptionKey] = useState<CryptoKey | null>(null);
  const [caseType, setCaseType] = useState<string>('');
  // Replace the isPremium state with context
  const { isPremium, features } = usePremium();
  const [caseInfo, setCaseInfo] = useState<CaseTypeInfo | null>(null);

  useEffect(() => {
    const initializeEncryption = async () => {
      const key = await EncryptionService.generateKey();
      setEncryptionKey(key);
    };
    initializeEncryption();
  }, []);

  // Load messages on component mount
  useEffect(() => {
    const loadStoredMessages = async () => {
      if (encryptionKey) {
        const storedMessages = await MessageStorage.loadMessages(encryptionKey);
        setMessages(storedMessages);
      }
    };
    loadStoredMessages();
  }, [encryptionKey]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !encryptionKey) return;

    try {
      // Detect case type from first message
      if (!caseInfo) {
        const detectedCase = await detectCaseType(input.trim());
        setCaseInfo(detectedCase);
        setCaseType(detectedCase.type);
      }
      // Encrypt message
      const encryptedContent = await EncryptionService.encryptMessage(input.trim(), encryptionKey);

      const userMessage: Message = {
        id: Date.now().toString(),
        content: input.trim(),
        sender: 'user',
        timestamp: new Date(),
        encrypted: true
      };

      setMessages(prev => [...prev, userMessage]);
      setInput('');
      setIsLoading(true);

      const response = await generateLegalResponse(input.trim());
      
      // Encrypt response
      const encryptedResponse = await EncryptionService.encryptMessage(response, encryptionKey);

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'bot',
        timestamp: new Date(),
        encrypted: true
      };
      
      setMessages(prev => [...prev, botMessage]);

      // Auto-detect case type from conversation
      if (!caseType && messages.length === 0) {
        // Add case type detection logic here
        setCaseType('general'); // Placeholder
      }
      // Save messages to storage
      await MessageStorage.saveMessage(userMessage as StoredMessage, encryptionKey);
      await MessageStorage.saveMessage(botMessage as StoredMessage, encryptionKey);

    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Add clear chat functionality
  const handleClearChat = async () => {
    await MessageStorage.clearMessages();
    setMessages([]);
    setCaseInfo(null);
    setCaseType('');
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      {/* Chat Header with Clear Button */}
      <div className="bg-white border-b p-4 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Legal Assistant Chat</h2>
          {caseInfo && (
            <div className="flex items-center gap-2 mt-2">
              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {caseInfo.type} {caseInfo.subtype && `- ${caseInfo.subtype}`}
              </span>
              <span className="text-sm text-gray-500">
                Confidence: {Math.round(caseInfo.confidence * 100)}%
              </span>
            </div>
          )}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleClearChat}
          className="text-gray-600"
        >
          Clear Chat
        </Button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-4 ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <p>{message.content}</p>
              <span className="text-xs opacity-70 mt-1 block">
                {message.timestamp.toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <form onSubmit={handleSend} className="bg-white border-t p-4">
        <div className="flex space-x-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your legal question..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            disabled={isLoading || !input.trim()}
          >
            Send
          </Button>
        </div>
      </form>

      {/* Case Prediction Panel */}
      <CasePredictionPanel 
        isPremium={isPremium}
        chatHistory={messages.map(m => m.content)}
        caseType={caseType}
      />
    </div>
  );
}