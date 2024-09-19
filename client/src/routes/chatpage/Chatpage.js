import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import model from '../../lib/Gemini';

const Chatpage = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'ai', text: 'Hello! How can I assist you today?' },
  ]);
  
  const [input, setInput] = useState('');
  const chatContainerRef = useRef(null);

  // Auto scroll to the bottom when a new message is added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Send message and get AI response
  const handleSendMessage = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    const userMessage = input.trim() || 'test message'; // Use custom message or default to "test message"
    
    if (userMessage) {
      const newMessage = { id: messages.length + 1, sender: 'user', text: userMessage };
      setMessages([...messages, newMessage]);
      setInput('');

      try {
        // Send the user's message to the AI API and get the response
        const aiResponse = await getAIResponse(userMessage);

        // Set the AI response
        const aiMessage = {
          id: messages.length + 2,
          sender: 'ai',
          text: aiResponse || 'text message', // Default to "text message" if there's no response
        };
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      } catch (error) {
        console.error('Error fetching AI response:', error);
      }
    }
  };

  // Function to get AI response using the Gemini API
  const getAIResponse = async (message) => {
    try {
      const result = await model.generateContent(message);
      return result.response.text(); // Return the response from the AI API
    } catch (error) {
      console.error('Error generating AI response:', error);
      return null;
    }
  };

  // Function to test AI API call with a fixed prompt
  const add = async () => {
    const prompt = "Write a story about a magic backpack.";

    try {
      const result = await model.generateContent(prompt);
      console.log(result.response.text());
    } catch (error) {
      console.error('Error testing AI API:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-600 text-white p-4">
      {/* Messages container with auto-scroll and limited height */}
      <div
        ref={chatContainerRef}
        className="flex-grow overflow-y-auto space-y-4 p-4 bg-gray-800 rounded-lg max-h-[78vh]"
      >
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-white text-black'
                  : 'bg-gray-700 text-white'
              }`}
            >
              {message.text}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input form for sending messages */}
      <form className="w-full max-w-2xl mx-auto flex items-center space-x-2 p-4" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full p-3 bg-gray-800 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-white text-black p-3 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatpage;
