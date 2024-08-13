import Image from "next/image";
import React from "react";

const Reply = () => {
  return (
    <form className="w-[752px] h-[434px] border rounded-lg">
      {/* Header */}
      <div className="relative w-[752px] h-[38px] px-[32px] py-[20px] rounded-t-lg bg-[#41464B] border border-[#41464B] flex items-center justify-between">
        <div className="w-[682px] h-[16px] flex items-center gap-[8px]">
          <p className="w-[33px] h-[16px] font-open-sans text-[12px] font-bold leading-[16.34px] text-white">
            Reply
          </p>
        </div>
        <div className="absolute right-[10px] top-[50%] transform -translate-y-[50%]">
          <Image src="/close.png" width={20} height={20} alt="Icon" />
        </div>
      </div>

      {/* To Field */}
      <div className="w-[752px] h-[24px] px-[32px] pt-[8px]  border-b border-[#34383D]">
        <div className="flex items-center gap-[8px]">
          <label className="font-open-sans text-[12px] font-normal leading-[16.34px]">
            To:
          </label>
          <input
            type="text"
            className="flex-1 h-[16px] bg-transparent text-white border-none outline-none font-open-sans text-[12px] font-semibold leading-[16.34px]"
          />
        </div>
      </div>

      {/* From Field */}
      <div className="w-[752px] h-[24px] px-[32px] pt-[8px] border-b border-[#34383D]">
        <div className="flex items-center gap-[8px]">
          <label className="font-open-sans text-[12px] font-normal leading-[16.34px]">
            From:
          </label>
          <input
            type="text"
            className="flex-1 h-[16px] bg-transparent text-white border-none outline-none font-open-sans text-[12px] font-semibold leading-[16.34px]"
          />
        </div>
      </div>

      {/* Subject Field */}
      <div className="w-[752px] h-[24px] px-[32px] pt-[8px] border-b border-[#34383D]">
        <div className="flex items-center gap-[8px]">
          <label className="font-open-sans text-[12px] font-normal leading-[16.34px]">
            Subject:
          </label>
          <input
            type="text"
            className="flex-1 h-[16px] bg-transparent text-white border-none outline-none font-open-sans text-[12px] font-semibold leading-[16.34px]"
          />
        </div>
      </div>

      {/* Text Area */}
      <div className="w-[752px] h-[240px] px-[32px] pt-[8px]">
        <textarea
          className="w-full h-full bg-transparent text-white font-open-sans text-[12px] font-normal leading-[16.34px] resize-none border-none outline-none"
          placeholder="Type your message here..."
        />
      </div>

      {/* Footer */}
      <div className="w-[751px] h-[54px] px-[12px] flex items-center gap-[20px] border-t border-gray-300">
        <button
          type="submit"
          className="w-[114px] h-[40px] flex items-center justify-center gap-[16px] bg-blue-500 text-white rounded-md"
        >
          <div className="w-[34px] h-[22px]">Send</div>
          <Image src="/downarrow.png" width={24} height={24} alt="Send" />
        </button>
        <div className="w-[95px] h-[40px] flex items-center justify-center text-white">
          <Image src="/flash.png" width={20} height={20} alt="Variables" />
          <p className="w-[63px] h-[22px]">Variables</p>
        </div>
        <div className="w-[127px] h-[40px] flex items-center justify-center gap-[2px] text-white">
          <Image
            src="/remove_red_eye.png"
            width={24}
            height={24}
            alt="Preview Email"
          />
          <p className="w-[95px] h-[22px] font-open-sans text-[14px] font-semibold leading-[21.7px]">
            Preview Email
          </p>
        </div>
        <div className="w-[210px] h-[24px] flex items-center gap-[14px]">
          <div className="w-[24px] h-[24px]">
            <Image src="/spellcheck.png" width={24} height={24} alt="Icon" />
          </div>
          <div className="flex items-center gap-[12px]">
            <Image src="/link.png" width={24} height={24} alt="Icon" />
            <Image src="/image.png" width={24} height={24} alt="Icon" />
            <Image
              src="/sentiment_satisfied.png"
              width={24}
              height={24}
              alt="Icon"
            />
            <Image src="/Vector.png" width={24} height={24} alt="Icon" />
            <Image src="/unfold_more.png" width={24} height={24} alt="Icon" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Reply;
