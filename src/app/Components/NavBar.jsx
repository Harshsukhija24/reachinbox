"use client";
import Image from "next/image";
import React, { useState } from "react";

const NavBar = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleLightMode = () => {
    setIsLightMode(true);
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  };

  const toggleDarkMode = () => {
    setIsLightMode(false);
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  };

  return (
    <div
      className={`w-full h-[60px] fixed top-0 p-[16px] border border-r-0 border-[#343A40] ${
        isLightMode ? "bg-white" : "bg-[#1F1F1F]"
      } flex items-center justify-between`}
    >
      {/* Brand or Logo Section */}
      <div
        className={`text-[18px] font-bold leading-[24px] tracking-[-0.02em] text-left ${
          isLightMode ? "text-black" : "text-white"
        } ml-[60px]`}
      >
        Onebox
      </div>

      {/* Right Section with Buttons and Text */}
      <div className="flex items-center gap-[16px]">
        {/* Icons Section */}
        <div
          className={`flex items-center p-[4px] gap-[8px] rounded-full border-t border-[#343A40] ${
            isLightMode ? "bg-gray-200" : "bg-[#222426]"
          }`}
        >
          <Image
            src="/ellipes.png"
            alt="Ellipes"
            width={20}
            height={20}
            onClick={toggleDarkMode}
            className={`cursor-pointer ${isLightMode ? "opacity-50" : ""}`} // Adjust opacity for visual feedback
          />
          <Image
            src="/vector2.png"
            alt="Vector"
            width={20}
            height={20}
            onClick={toggleLightMode}
            className={`cursor-pointer ${isLightMode ? "" : "opacity-50"}`} // Adjust opacity for visual feedback
          />
        </div>

        {/* Text and Arrow Section */}
        <div className="flex items-center gap-[8px]">
          <p
            className={`text-[14px] font-semibold leading-[21.7px] ${
              isLightMode ? "text-black" : "text-white"
            }`}
          >
            Tim’s Workspace
          </p>
          <Image
            src="/downarrow.png"
            alt="Down Arrow"
            width={16}
            height={16}
            className="rotate-180" // Assuming you want to rotate it
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
