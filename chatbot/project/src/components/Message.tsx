import React from 'react';
import { Message as MessageType } from '../types';

interface MessageProps {
  message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const { text, sender, timestamp } = message;
  
  // Format timestamp
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div
      className={`flex ${
        sender === 'user' ? 'justify-end' : 'justify-start'
      } mb-4`}
    >
      <div
        className={`max-w-xs md:max-w-md lg:max-w-lg rounded-lg px-4 py-2 ${
          sender === 'user'
            ? 'bg-blue-500 text-white rounded-br-none'
            : 'bg-gray-200 text-gray-800 rounded-bl-none'
        }`}
      >
        <p className="text-sm">{text}</p>
        <div
          className={`text-xs mt-1 ${
            sender === 'user' ? 'text-blue-100' : 'text-gray-500'
          }`}
        >
          {formatTime(timestamp)}
          {sender === 'user' && (
            <span className="ml-1">✓</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;