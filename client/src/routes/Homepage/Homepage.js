import React from "react";
import { motion } from "framer-motion";
import image from "../../assets/images/3d.png";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Homepage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle button click and navigate to /dashboard/chats/12345
  const handleStartChatting = () => {
    navigate("/dashboard/chats/12345");
  };

  return (
    <div className="min-h-screen text-white flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
      <main className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between lg:ml-7 mb-28">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 text-center lg:text-left lg:pr-8 mb-8 lg:mb-0 lg:mr-36"
        >
          <h1 className="text-4xl sm:text-9xl md:text-8xl font-bold mb-4 sm:mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            ChatGemini.
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 lg:ml-8 text-center text-gray-300">
            Experience the power of AI
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 lg:ml-8 text-center text-gray-400">
            Engage in natural, intelligent dialogues on any topic with our
            cutting-edge AI technology.
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#ffffff",
              color: "#000000",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 hover:bg-white hover:text-black text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full text-base sm:text-lg transition duration-300 lg:ml-48 shadow-lg border border-gray-600"
            onClick={handleStartChatting} // Add click handler
          >
            Start chatting
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="w-full max-w-md aspect-w-16 aspect-h-9 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-700 to-gray-900 p-1"
          >
            <motion.div className="w-full h-full rounded-2xl overflow-hidden bg-gray-800">
              <motion.img
                src={image}
                alt="ChatGemini AI Visualization"
                className="w-full h-full object-cover"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </main>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="fixed bottom-4 right-4 z-10"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-400 p-0.5 rounded-xl shadow-lg"
        >
          <div className="bg-gray-900 rounded-xl p-4">
            <TypeAnimation
              sequence={[
                "AI-Powered Chatbot...",
                1500,
                "Engage in Conversations...",
                1500,
                "Experience Natural AI...",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Homepage;
