import { patterns, fallbackResponses } from '../data/responses';

export function generateResponse(input: string): string {
  // Check if input matches any patterns
  for (const { pattern, responses } of patterns) {
    if (pattern.test(input)) {
      const randomIndex = Math.floor(Math.random() * responses.length);
      return responses[randomIndex];
    }
  }

  // If no pattern matches, use a fallback response
  const randomIndex = Math.floor(Math.random() * fallbackResponses.length);
  return fallbackResponses[randomIndex];
}

export function simulateTypingDelay(text: string): Promise<number> {
  // Calculate a realistic typing delay based on message length
  // Assume average typing speed of 5 characters per second with some randomness
  const baseDelay = 500; // Minimum delay in milliseconds
  const charsPerSecond = 5;
  const typingTime = (text.length / charsPerSecond) * 1000;
  
  // Add some randomness to make it feel more natural
  const randomFactor = 0.5 + Math.random();
  const totalDelay = baseDelay + (typingTime * randomFactor);
  
  // Limit maximum delay to 5 seconds
  return Promise.resolve(Math.min(totalDelay, 5000));
}