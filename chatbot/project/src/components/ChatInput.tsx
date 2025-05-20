import React, { useState, KeyboardEvent } from 'react';
import { useChat } from '../context/ChatContext';
import { SendIcon } from 'lucide-react';

const ChatInput: React.FC = () => {
  const [input, setInput] = useState('');
  const { sendMessage } = useChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex items-end gap-2 bg-white p-3 border-t border-gray-200"
    >
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
        className="flex-1 resize-none border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 max-h-24"
        rows={1}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition-colors duration-200"
        disabled={!input.trim()}
      >
        <SendIcon size={20} />
      </button>
    </form>
  );
};

export default ChatInput;