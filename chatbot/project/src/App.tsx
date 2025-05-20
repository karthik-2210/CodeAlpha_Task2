import React from 'react';
import { ChatProvider } from './context/ChatContext';
import ChatHeader from './components/ChatHeader';
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';

function App() {
  return (
    <ChatProvider>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md md:max-w-lg lg:max-w-xl h-[600px] flex flex-col">
          <ChatHeader />
          <ChatMessages />
          <ChatInput />
        </div>
      </div>
    </ChatProvider>
  );
}

export default App;