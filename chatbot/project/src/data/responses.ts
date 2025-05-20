interface Pattern {
  pattern: RegExp;
  responses: string[];
}

export const patterns: Pattern[] = [
  {
    pattern: /^(hello|hi|hey|howdy|hola)/i,
    responses: [
      "Hello! How can I help you today?",
      "Hi there! What can I assist you with?",
      "Hey! What's on your mind?"
    ]
  },
  {
    pattern: /how are you/i,
    responses: [
      "I'm doing well, thanks for asking! How about you?",
      "I'm functioning optimally! How can I help you today?",
      "I'm great! What can I do for you?"
    ]
  },
  {
    pattern: /your name/i,
    responses: [
      "I'm ChatBot, your virtual assistant!",
      "You can call me ChatBot. I'm here to help!",
      "I go by ChatBot. How can I assist you?"
    ]
  },
  {
    pattern: /weather/i,
    responses: [
      "I don't have real-time weather data, but I'd be happy to chat about other topics!",
      "Unfortunately, I can't check the weather right now. Is there something else I can help with?",
      "I wish I could tell you about the weather, but I don't have that capability yet."
    ]
  },
  {
    pattern: /(bye|goodbye|see you|farewell)/i,
    responses: [
      "Goodbye! Feel free to chat again anytime.",
      "Bye for now! Have a great day!",
      "See you later! Come back soon!"
    ]
  },
  {
    pattern: /thank you|thanks/i,
    responses: [
      "You're welcome! Is there anything else I can help with?",
      "My pleasure! Let me know if you need anything else.",
      "Happy to help! Any other questions?"
    ]
  },
  {
    pattern: /help/i,
    responses: [
      "I'm here to help! You can ask me questions, and I'll do my best to answer.",
      "How can I assist you today? Feel free to ask me anything!",
      "I'd be happy to help! What do you need assistance with?"
    ]
  },
  {
    pattern: /who (created|made) you/i,
    responses: [
      "I was created as a demonstration of a React TypeScript chatbot.",
      "I'm a sample chatbot built with React and TypeScript.",
      "I'm a demonstration of chat interface capabilities built with modern web technologies."
    ]
  }
];

export const fallbackResponses = [
  "I'm not sure I understand. Could you rephrase that?",
  "Interesting! Can you tell me more about that?",
  "I'm still learning. Could you elaborate on that?",
  "I don't have enough information to respond to that properly. Could you provide more details?",
  "That's beyond my current capabilities, but I'm always learning!"
];