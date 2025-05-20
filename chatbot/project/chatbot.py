import random
import os

class SimpleBot:
    def __init__(self):
        self.greetings = [
            "Hello! How can I help you today?",
            "Hi there! What's on your mind?",
            "Greetings! How may I assist you?"
        ]
        
        self.farewells = [
            "Goodbye! Have a great day!",
            "See you later! Take care!",
            "Bye! Come back soon!"
        ]
        
        self.responses = {
            "how are you": [
                "I'm doing well, thank you for asking!",
                "I'm great! How about you?",
                "All systems operational! How can I help?"
            ],
            "what is your name": [
                "I'm SimpleBot, nice to meet you!",
                "You can call me SimpleBot!",
                "My name is SimpleBot, how can I assist you?"
            ],
            "help": [
                "I can help you with basic conversation. Try asking me how I am or what my name is!",
                "I'm a simple chatbot. I can chat with you about basic topics!",
                "Feel free to ask me questions, and I'll do my best to respond!"
            ]
        }
        
        self.default_responses = [
            "I'm not sure I understand. Could you rephrase that?",
            "Interesting! Tell me more about that.",
            "I'm still learning and don't know how to respond to that yet.",
            "Could you elaborate on that?"
        ]

    def clear_screen(self):
        print('\033c', end='')

    def print_header(self):
        print("\n" + "="*50)
        print("🤖 SimpleBot Chat Interface")
        print("="*50)
        print("Type 'quit', 'exit', or 'bye' to end the conversation")
        print("-"*50 + "\n")

    def get_response(self, user_input):
        # Convert input to lowercase for matching
        user_input = user_input.lower().strip()
        
        # Check for greetings
        if user_input.startswith(('hello', 'hi', 'hey')):
            return random.choice(self.greetings)
        
        # Check for farewells
        if user_input.startswith(('bye', 'goodbye', 'see you')):
            return random.choice(self.farewells)
        
        # Check for known patterns
        for key in self.responses:
            if key in user_input:
                return random.choice(self.responses[key])
        
        # Default response if no pattern matches
        return random.choice(self.default_responses)

    def format_message(self, sender, message):
        if sender == "You":
            return f"\033[94m{sender}: {message}\033[0m"  # Blue color for user
        else:
            return f"\033[92m{sender}: {message}\033[0m"  # Green color for bot

def main():
    bot = SimpleBot()
    bot.clear_screen()
    bot.print_header()
    
    initial_greeting = random.choice(bot.greetings)
    print(bot.format_message("SimpleBot", initial_greeting))
    
    while True:
        try:
            user_input = input("\nYou: ").strip()
            
            if not user_input:
                continue
                
            if user_input.lower() in ['quit', 'exit', 'bye']:
                farewell = random.choice(bot.farewells)
                print(bot.format_message("SimpleBot", farewell))
                break
            
            print("SimpleBot is typing...")
            response = bot.get_response(user_input)
            print(bot.format_message("SimpleBot", response))
            
        except KeyboardInterrupt:
            print("\n\nGoodbye! Chat ended by user.")
            break
        except Exception as e:
            print(f"\nAn error occurred: {e}")
            print("Let's continue our conversation!")

if __name__ == "__main__":
    main()