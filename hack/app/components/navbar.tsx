"use client";

import { useState } from "react";

export default function Navbar() {
  const [isFlipped, setIsFlipped] = useState(false);

const handleFlip = () => {
  setIsFlipped((prev) => !prev);
};

  return (
    <nav
      className={`w-full bg-[#2f353c] shadow-md transition-transform duration-500 ${
        isFlipped ? "rotate-180" : "rotate-0"
      }`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex-shrink-0">
          <button
            onClick={handleFlip}
            className="text-2xl font-bold text-white">
            Navbar
          </button>
        </div>

        <div className="flex items-center space-x-6">
          <button
            onClick={handleFlip}
            className="font-semibold text-white hover:text-[#1c8d98]">
            Home
          </button>
          <button
            onClick={handleFlip}
            className="font-semibold text-[#6e7377] hover:text-[#1c8d98]">
            Features
          </button>
          <button
            onClick={handleFlip}
            className="font-semibold text-[#6e7377] hover:text-[#1c8d98]">
            Pricing
          </button>
          <button
            onClick={handleFlip}
            className="font-semibold text-[#6e7377] hover:text-[#1c8d98]">
            About
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search"
            className="w-64 rounded-md border border-[#2d3237] bg-white px-4 py-2 text-gray-700 outline-none placeholder-gray-500"/>
          <button
            onClick={handleFlip}
            className="rounded-md border border-[#1c8d98] px-4 py-2 font-semibold text-[#1c8d98] transition hover:bg-[#1c8d98] hover:text-white">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}