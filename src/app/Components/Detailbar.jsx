import Image from "next/image";
import React from "react";

const Detailbar = () => {
  return (
    <div className="fixed top-[60px] right-0 w-[278px] h-[500px] p-[8px] border-l border-gray-700 bg-black">
      <div className="w-full bg-gray-700 rounded-lg p-[4px] flex justify-between items-center mb-[8px]">
        <p className="text-[14px] font-semibold text-white">Lead Details</p>
        <Image
          src="/downarrow.png"
          alt="icon"
          width={10}
          height={6}
          className="transform"
        />
      </div>
      <div className="w-full p-[6px] flex flex-col gap-[12px]">
        <div className="flex justify-between">
          <p className="text-[12px] text-white">Name</p>
          <p className="text-[14px] text-white">Orlando</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[12px] text-white">Contact No</p>
          <p className="text-[14px] text-white">+54-9062827869</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[12px] text-white">Email ID</p>
          <p className="text-[14px] text-white">orlando@gmail.com</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[12px] text-white">LinkedIn</p>
          <p className="text-[14px] text-right text-white">
            linkedin.com/in/timvadde/
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-[12px] text-white">Company Name</p>
          <p className="text-[14px] text-white">Reachinbox</p>
        </div>
      </div>

      {/* Activities Section */}
      <div className="w-full bg-gray-700 rounded-lg p-[4px] flex justify-between items-center mb-[8px]">
        <p className="text-[14px] font-semibold text-white">Activities</p>
        <Image
          src="/path.png"
          alt="icon"
          width={10}
          height={6}
          className="transform"
        />
      </div>

      <div className="w-full flex flex-col gap-[10px]">
        <div className="flex flex-col gap-[12px]">
          <div className="flex items-center gap-[8px]">
            <p className="text-[18px] text-white">Campaign Name</p>
          </div>
          <div className="flex items-center gap-[8px]">
            <p className="text-[12px] font-semibold text-white">3 Steps</p>
            <div className="border-l border-gray-700 h-[16px]"></div>
            <p className="text-[12px] font-semibold text-white">
              5 Days in Sequence
            </p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="flex items-center gap-[8px]">
              <div className="relative p-[2px] rounded-full border border-gray-700">
                <Image src="/email3.png" alt="icon" width={20} height={20} />
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full border-l border-gray-700 h-[14px]"></div>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-[13px] font-semibold text-white">
                  Step 1: Email
                </p>
                <div className="flex items-center mt-[1px]">
                  <Image src="/send.png" width={16} height={16} />
                  <p className="text-[10px] font-normal text-white ml-[3px]">
                    Sent
                  </p>
                  <p className="text-[10px] font-semibold text-white ml-[3px]">
                    3rd, Feb
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[8px]">
              <div className="relative p-[2px] rounded-full border border-gray-700">
                <Image src="/email3.png" alt="icon" width={20} height={20} />
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full border-l border-gray-700 h-[14px]"></div>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-[13px] font-semibold text-white">
                  Step 2: Email
                </p>
                <div className="flex items-center mt-[1px]">
                  <Image src="/drafts.png" width={16} height={16} />
                  <p className="text-[10px] font-normal text-white ml-[3px]">
                    Opened
                  </p>
                  <p className="text-[10px] font-semibold text-white ml-[3px]">
                    5th, Feb
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[8px]">
              <div className="relative p-[2px] rounded-full border border-gray-700">
                <Image src="/email3.png" alt="icon" width={20} height={20} />
              </div>
              <div className="flex flex-col w-full">
                <p className="text-[13px] font-semibold text-white">
                  Step 3: Email
                </p>
                <div className="flex items-center mt-[1px]">
                  <Image src="/drafts.png" width={16} height={16} />
                  <p className="text-[10px] font-normal text-white ml-[3px]">
                    Responded
                  </p>
                  <p className="text-[10px] font-semibold text-white ml-[3px]">
                    7th, Feb
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailbar;
