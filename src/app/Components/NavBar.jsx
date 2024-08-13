import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className="w-full h-[60px] fixed top-0  p-[16px] border border-r-0 border-[#343A40] bg-[#1F1F1F] flex items-center justify-between">
      {/* Brand or Logo Section */}
      <div className="text-[18px] font-bold leading-[24px] tracking-[-0.02em] text-left text-white ml-[60px]">
        Onebox
      </div>

      {/* Right Section with Buttons and Text */}
      <div className="flex items-center gap-[16px]">
        {/* Icons Section */}
        <div className="flex items-center p-[4px] gap-[8px] rounded-full border-t border-[#343A40] bg-[#222426]">
          <Image src="/ellipes.png" alt="Ellipes" width={20} height={20} />
          <Image src="/vector2.png" alt="Vector" width={20} height={20} />
        </div>

        {/* Text and Arrow Section */}
        <div className="flex items-center gap-[8px]">
          <p className="text-[14px] font-semibold leading-[21.7px] text-white">
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
