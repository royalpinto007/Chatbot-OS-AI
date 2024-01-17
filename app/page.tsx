"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="mx-auto max-w-screen-lg flex flex-col min-h-screen bg-gradient-to-b from-gray-700 to-gray-900 text-white">
      {/* Header */}
      <div className="flex items-center px-4 py-3 bg-opacity-80 backdrop-blur-lg pt-5">
        <div className="w-full flex items-center justify-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white truncate flex items-center">
            Chatbot
          </h2>
        </div>
      </div>

      <div className="border-b border-white mx-2 my-2"></div>
      
      {/* Chat Messages */}
      <div className="flex-1 p-4 md:p-8 overflow-y-auto">
        <div className="flex flex-col space-y-4">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${
                m.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-4 rounded-lg ${
                  m.role === "user" ? "text-right w-30" : "text-left w-30"
                }`}
              >
                <div className="rounded-lg">
                  <span className="font-medium">
                    {m.role === "user" ? "" : ""}
                  </span>{" "}
                  {m.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* User Input */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center px-4 py-3 bg-gray-800"
      >
        <input
          className="flex-1 px-4 py-2 text-white bg-gray-700 bg-opacity-60 border rounded-full placeholder-white::placeholder focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="ml-4 p-2 text-blue-400 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
