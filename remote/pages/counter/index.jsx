import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-600 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center flex-col gap-4">
        <div className="text-7xl font-bold text-gray-800">{counter}</div>
        <button
          type="button"
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-full shadow-md hover:from-pink-500 hover:to-indigo-500 transform hover:scale-105 transition-transform duration-300"
          onClick={() => setCounter((prev) => prev + 1)}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default Counter;
