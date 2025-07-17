"use client";
import React, { useState } from "react";

function Page() {
  const [showForm, setShowform] = useState(false);
  if (showForm) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6">User Form</h2>
          {/* Form fields go here */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#181b1b] to-[#23272f] p-4 relative overflow-hidden">
      {/* Background blurred rectangles */}
      <div className="absolute left-[-120px] top-[40px] w-[700px] h-[540px] rounded-[48px] bg-[#3b53c7] opacity-70 blur-[100px] z-0" />
      <div className="absolute left-[200px] top-[100px] w-[700px] h-[480px] rounded-[48px] bg-[#a16cff] opacity-60 blur-[120px] z-0" />
      <div
        className="relative flex flex-col md:flex-row items-center justify-center rounded-3xl bg-transparent shadow-2xl p-6 md:p-12 max-w-5xl w-full border-none z-10"
        style={{ overflow: "visible" }}
      >
        {/* Left: Product Image */}
        <div className="relative flex-1 flex items-center justify-center min-w-[320px] overflow-visible z-40">
          <div className="absolute left-[-120px] top-[-120px] md:left-[-180px] md:top-[-160px] w-[600px] h-[480px] md:w-[760px] md:h-[600px] pointer-events-none select-none z-50">
            <img
              src="/pi-box.png"
              alt="Pi Box"
              className="w-full h-full object-contain drop-shadow-2xl"
              draggable={false}
              style={{ userSelect: "none" }}
            />
          </div>
        </div>
        {/* Right: Product Details */}
        <div className="flex-1 flex flex-col justify-center items-start bg-[#23213a]/90 backdrop-blur-2xl rounded-3xl p-16 md:ml-[-60px] z-30 max-w-2xl w-full shadow-xl border border-[#4b4b6b]/30 relative">
          <h2 className="text-5xl font-bold text-white mb-6">Pi Box Basic</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              Whats Inside:
            </h3>
            <ul className="space-y-3 text-white/90 text-lg">
              <li className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✔</span> Core Pi Box
                device
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✔</span> Essential
                Cables & Power Adapter
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✔</span> Input Devices
                (Mouse, Keyboard)
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✔</span> Compatible
                with all Projectors, Monitors & TV’s
              </li>
            </ul>
          </div>
          <div className="mb-6 w-full">
            <h3 className="text-xl font-semibold text-white mb-3">Add Ons</h3>
            <div className="flex gap-4">
              <div className="flex items-center bg-white rounded-xl px-4 py-3 min-w-[130px] shadow-md">
                <span className="text-black text-xl mr-2">
                  <i className="fa-solid fa-video" />
                </span>
                <span className="text-black font-semibold text-lg">Webcam</span>
              </div>
              <div className="flex flex-col items-start bg-white rounded-xl px-4 py-3 min-w-[170px] shadow-md">
                <span className="flex items-center text-black font-semibold text-lg">
                  <i className="fa-solid fa-desktop mr-2" />
                  LED Monitor
                </span>
                <span className="text-xs text-gray-600 font-medium ml-7">
                  (19 Inch)
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setShowform(true)}
            className="w-full mt-2 bg-black text-white font-bold py-3 rounded-xl border border-white/40 hover:bg-white hover:text-black transition text-lg shadow-md"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
