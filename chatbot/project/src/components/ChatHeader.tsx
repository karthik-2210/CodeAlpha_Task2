import React from 'react';
import { MessageSquare } from 'lucide-react';

const ChatHeader: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-200 p-4 flex items-center sticky top-0 z-10">
      <div className="bg-blue-500 text-white p-2 rounded-full mr-3">
        <MessageSquare size={24} />
      </div>
      <div>
        <h1 className="text-xl font-semibold">ChatBot</h1>
        <p className="text-sm text-gray-500">Online | Ready to chat</p>
      </div>
    </div>
  );
};

export default ChatHeader;