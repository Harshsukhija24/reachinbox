import Image from "next/image";
import React from "react";
import Reply from "./Reply";

const Midtop = () => {
  return (
    <div className="w-[699px] h-[60px] absolute top-[69px] left-[315px] px-[20px] py-[5px] flex items-center justify-between text-white rounded-t-lg border-b border-gray-300">
      {/* Left section for text */}
      <div className="flex flex-col ml-[10px] ">
        <p className="font-inter text-[14px] font-semibold leading-[20px]  text-left">
          Orlando
        </p>
        <p className="font-inter text-[12px] font-normal leading-[18px] text-left">
          orladom@gmail.com
        </p>
      </div>

      {/* Right section for other content */}
      <div className="flex items-center gap-[12px]">
        <div className="flex gap-[12px] items-center bg-[#1F1F1F] p-2 rounded-md">
          <Image src="/Ellipse.png" width={20} height={20} alt="Description" />
          <p className="font-open-sans text-[12px] font-semibold leading-[18.6px] text-white">
            Meeting Completed
          </p>
          <Image
            src="/downarrow.png"
            width={16}
            height={16}
            alt="Arrow"
            className=""
          />
        </div>
        <div className="flex items-center bg-[#1F1F1F] p-2 rounded-md">
          <p className="w-[32px] h-[16px] ml-[12px] font-open-sans text-[12px] font-semibold leading-[16.34px] text-white">
            Move
          </p>
          <Image
            src="/downarrow.png"
            width={16}
            height={16}
            alt="Move"
            className=""
          />
        </div>
        <div className="w-[32px] h-[32px] bg-[#1F1F1F] p-2 rounded-md">
          <Image
            src="/more_horiz.png"
            className="rotate-90"
            width={16}
            height={16}
            alt="Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Midtop;
