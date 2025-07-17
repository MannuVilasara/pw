import React from "react";

function Navbar() {
  return (
    <div className="w-full h-16 flex items-center justify-between px-8 bg-[#1a1a1a]">
      <div className="flex items-center">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#e5e5e5]">
          <span className="text-2xl font-serif font-bold text-black">PW</span>
        </div>
      </div>
      {/* Navigation Links */}
      <nav className="flex items-center gap-10">
        <a
          href="#"
          className="text-white font-medium border-b-2 border-white pb-1"
        >
          Overview
        </a>
        <a href="#" className="text-white font-medium hover:underline">
          Key Features
        </a>
        <a href="#" className="text-white font-medium hover:underline">
          Get Pi Box Now
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
