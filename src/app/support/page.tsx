'use client'

import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { FaArrowCircleLeft,FaArrowRight, FaTrash, FaMicrophone, FaSmile, FaImage } from 'react-icons/fa';
import { FiUser, FiSun, FiMoon } from 'react-icons/fi';

interface ChatMessage {
  id: number;
  sender: string;
  message: string;
  timestamp: Date;
}

const SupportGroupPage: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (newMessage.trim() !== '') {
      const newChatMessage: ChatMessage = {
        id: messages.length + 1,
        sender: 'User',
        message: newMessage.trim(),
        timestamp: new Date(),
      };
      setMessages([...messages, newChatMessage]);
      setNewMessage('');
    }
  };

  const handleDelete = (id: number) => {
    setMessages(messages.filter(message => message.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-sky-100 to-blue-100">
      {/* Top Bar */}
      <div className="bg-sky-500 text-white p-2 sm:p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="inline-flex items-center text-white hover:text-sky-200 transition-colors">
            <FaArrowCircleLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          </Link>
          <h1 className="text-lg sm:text-xl font-bold">Support Group</h1>
        </div>
        <div className="flex items-center">
          <button className="text-white hover:text-sky-200 focus:outline-none mr-2 sm:mr-4">
            <FiUser className="text-lg sm:text-xl" />
          </button>
          <div className="relative">
            <input type="checkbox" id="darkModeToggle" className="sr-only" />
            <label htmlFor="darkModeToggle" className="flex items-center cursor-pointer">
              <FiSun className="text-lg sm:text-xl text-yellow-300" />
              <FiMoon className="text-lg sm:text-xl text-gray-300 ml-1" />
            </label>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-grow overflow-hidden h-[90vh]">
        <div className="h-full p-2 sm:p-4 flex flex-col">
          <div className="flex-grow overflow-y-auto bg-white rounded-lg shadow-lg p-2 sm:p-4">
            {messages.map(message => (
              <div key={message.id} className={`mb-2 sm:mb-4 flex ${message.sender === 'User' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-2 sm:px-4 py-1 sm:py-2 rounded-lg ${message.sender === 'User' ? 'bg-sky-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs opacity-75">{message.sender}</span>
                    <span className="text-xs opacity-75">{message.timestamp.toLocaleTimeString()}</span>
                  </div>
                  <p className="text-xs sm:text-sm">{message.message}</p>
                  <button 
                    onClick={() => handleDelete(message.id)} 
                    className="text-xs opacity-75 hover:opacity-100 transition-opacity"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div className="mt-2 sm:mt-4 flex items-center bg-white rounded-full shadow-lg">
            <button className="p-1 sm:p-2 text-gray-500 hover:text-gray-700">
              <FaSmile className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <input
              type="text"
              className="flex-grow px-2 sm:px-4 py-1 sm:py-2 bg-transparent focus:outline-none text-black text-sm"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button className="p-1 sm:p-2 text-gray-500 hover:text-gray-700">
              <FaImage className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button className="p-1 sm:p-2 text-gray-500 hover:text-gray-700">
              <FaMicrophone className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              className="ml-1 sm:ml-2 px-2 sm:px-4 py-1 sm:py-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 focus:outline-none text-sm"
              onClick={handleSend}
            >
              <FaArrowRight/>
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportGroupPage;