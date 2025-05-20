import React, { createContext, useContext, useState, useCallback } from 'react';
import { Message, ChatContextType } from '../types';
import { generateResponse, simulateTypingDelay } from '../utils/chatbot';

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

interface ChatProviderProps {
  children: React.ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m ChatBot. How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setLoading(true);

    // Generate bot response with a delay to simulate thinking and typing
    const botResponse = generateResponse(text);
    const delay = await simulateTypingDelay(botResponse);
    
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setLoading(false);
    }, delay);
  }, []);

  const value = {
    messages,
    sendMessage,
    loading,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};