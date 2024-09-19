import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, MessageCircle, Settings, HelpCircle } from "lucide-react";
import image from "../../assets/images/filter_vintage_24dp_E8EAED_FILL0_wght100_GRAD0_opsz24.png";

const LeftSideMenu = () => {
  const dashboardItems = [
    { name: "Create a new chat", icon: MessageCircle },
    { name: "Explore ChatGemini", icon: HelpCircle },
    { name: "Contact", icon: HelpCircle },
  ];

  const recentChats = [
    "Project Discussion",
    "Team Meeting",
    "Client Presentation",
    "Brainstorming Session",
  ];

  return (
    <div className="flex flex-col h-screen w-64 bg-black text-white p-4">
      <nav className="mb-4">
        <h3 className="text-xs uppercase text-gray-500 font-semibold mb-2">Dashboard</h3>
        <ul className="space-y-1">
          {dashboardItems.map((item, index) => (
            <li key={index}>
              <Link
                to={`/dashboard/chats/:id`}
                className="flex items-center p-2 text-sm hover:bg-gray-900 rounded transition duration-200"
              >
                <item.icon size={16} className="mr-3 flex-shrink-0" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mb-4">
        <h3 className="text-xs uppercase text-gray-500 font-semibold mb-2">Recent Chats</h3>
        <ul className="space-y-1">
          {recentChats.map((chat, index) => (
            <li key={index}>
              <Link
                to={`/chat/${index}`}
                className="flex items-center p-2 text-sm hover:bg-gray-900 rounded transition duration-200"
              >
                <MessageCircle size={16} className="mr-3 flex-shrink-0" />
                <span className="truncate">{chat}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto mb-4">
        <Link
          to="/upgrade"
          className="block p-4 bg-slate-500 text-white rounded-lg hover:bg-slate-400 transition duration-200"
        >
          <div className="flex items-center justify-between w-full ">
            <img src={image} alt="Pro Feature" className="w-10 h-10 " />
          </div>
          <p className="font-semibold text-sm mb-1">Upgrade to ChatGemini Pro</p>
          <p className="text-xs text-gray-300">Unlimited access to all features</p>
        </Link>
      </div>

      <div className="flex items-center justify-center text-gray-500 hover:text-white transition-colors duration-200 mb-10">
        <Settings size={20} />
        <span className="ml-2 text-sm">Settings</span>
      </div>

    </div>
  );
};

export default LeftSideMenu;