import React, { useEffect, useRef } from 'react';
import { useChat } from '../context/ChatContext';
import Message from './Message';
import { MessageCircle } from 'lucide-react';

const ChatMessages: React.FC = () => {
  const { messages, loading } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <div key={message.id} className="animate-fadeIn">
          <Message message={message} />
        </div>
      ))}
      
      {loading && (
        <div className="flex justify-start mb-4">
          <div className="bg-gray-200 text-gray-800 rounded-lg rounded-bl-none px-4 py-2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-150" />
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-300" />
            </div>
          </div>
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;