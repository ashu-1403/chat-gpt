import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import model from '../../lib/Gemini';
import { Send, User, Bot } from 'lucide-react';

const Chatpage = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'ai', text: 'Hello! How can I assist you today?' },
  ]);
  
  const [input, setInput] = useState('');
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const userMessage = input.trim();
    
    if (userMessage) {
      const newMessage = { id: messages.length + 1, sender: 'user', text: userMessage };
      setMessages([...messages, newMessage]);
      setInput('');

      try {
        const aiResponse = await getAIResponse(userMessage);
        const aiMessage = {
          id: messages.length + 2,
          sender: 'ai',
          text: aiResponse || 'I apologize, but I couldn\'t generate a response. Please try again.',
        };
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      } catch (error) {
        console.error('Error fetching AI response:', error);
      }
    }
  };

  const getAIResponse = async (message) => {
    try {
      const result = await model.generateContent(message);
      return result.response.text();
    } catch (error) {
      console.error('Error generating AI response:', error);
      return null;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="flex-grow overflow-hidden flex flex-col">
        <div 
          ref={chatContainerRef}
          className="flex-grow overflow-y-auto"
        >
          <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-md`}>
                  {message.sender === 'ai' && (
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <Bot size={20} className="text-gray-600" />
                    </div>
                  )}
                  <div
                    className={`p-4 rounded-2xl shadow-sm ${
                      message.sender === 'user'
                        ? 'bg-black text-white'
                        : 'bg-white text-gray-800'
                    }`}
                  >
                    {message.text}
                  </div>
                  {message.sender === 'user' && (
                    <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <User size={20} className="text-white" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white border-t border-gray-200 p-4">
        <div className="max-w-5xl mx-auto">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-grow p-3 bg-gray-100 border border-gray-300 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent mb-40 md:mb-24"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="bg-black text-white p-3 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300 ease-in-out mb-40 md:mb-24"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatpage;
