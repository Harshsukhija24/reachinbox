import Image from "next/image";
import React from "react";
import Reply from "./Reply";

const Inbox = () => {
  return (
    <div className="w-[260px] fixed h-[500px] mt-[60px] ml-[56px] border border-gray-700 bg-black">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-center p-2 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <p className="text-white text-m font-bold">All Inbox(s)</p>
            <Image src="/downarrow.png" width={16} height={17} alt="Arrow" />
          </div>
          <div className="p-1">
            <Image src="/refresh.png" width={16} height={16} alt="Refresh" />
          </div>
        </div>

        {/* Subheader */}
        <div className="flex justify-between items-center p-2">
          <p className="text-white text-sm font-semibold">
            25/25 Inboxes selected
          </p>
        </div>

        {/* Search Bar */}
        <div className="p-2">
          <div className="flex items-center p-1 bg-gray-800 rounded border border-gray-600">
            <Image src="/Search-s.png" width={16} height={16} alt="Search" />
            <input
              className="ml-2 bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm flex-1"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex justify-between items-center p-2">
          <div className="flex items-center gap-2">
            <div className="bg-gray-700 text-blue-500 px-3 py-1 text-sm rounded-full">
              26
            </div>
            <p className="text-white text-sm font-medium">New Replies</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-white text-sm font-medium">Newest</p>
            <Image src="/downarrow.png" width={12} height={7} alt="Dropdown" />
          </div>
        </div>

        {/* Inbox Items */}
        <div className="overflow-y-auto flex-1">
          {/* Example inbox item */}
          <div className="p-3 border-b border-gray-700">
            <p className="text-white text-sm">Inbox item content here...</p>
          </div>
          {/* Add more inbox items here */}
        </div>
      </div>
    </div>
  );
};

export default Inbox;
