import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import image from '../../assets/images/filter_vintage_72dp_E8EAED_FILL0_wght100_GRAD0_opsz48.png';

const Dashboardpage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-900 text-white p-4">
      {/* ChatGemini Logo and text in the center */}
      <motion.div
        className="flex items-center justify-center flex-grow"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold  text-white">ChatGemini</h1>
        <img
          src={image}
          alt="ChatGemini Logo"
          className="w-32 h-32 md:w-48 md:h-48 object-contain"
        />
      </motion.div>

      {/* Spacer to prevent blocking */}
      <div className="flex-grow-0 mb-8"></div>

      {/* Input section at the bottom */}
      <motion.div
        className="w-full max-w-xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="relative mb-20">
          <input
            type="text"
            placeholder="Ask something..."
            className="w-full p-4 pr-12 bg-gray-800 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-black rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-"
            aria-label="Send message"
          >
            <Send size={20} />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboardpage;