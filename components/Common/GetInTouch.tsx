// File: GetInTouch.tsx

import React, { useState } from "react";

const GetInTouch: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2">
      {/* Container for both button and sliding panel */}
      <div
        className={`flex items-center transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sliding Form Panel */}
        <div className="bg-white p-6 shadow-lg rounded-l-lg w-72">
          <h2 className="text-lg font-semibold mb-4">Get in Touch</h2>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 border border-gray-300 rounded"
              required
            />
            <textarea
              placeholder="Message"
              className="p-2 border border-gray-300 rounded h-24"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Sticky Button */}
        <button
          onClick={toggleForm}
          className="bg-blue-500 text-white p-4 rounded-l-lg shadow-lg hover:bg-blue-600 transition-colors"
        >
          {isOpen ? "Close" : "Get in Touch"}
        </button>
      </div>
    </div>
  );
};

export default GetInTouch;
