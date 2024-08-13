import React from "react";

const DeleteButton = () => {
  return (
    <div className="w-[443px] h-[249px] absolute top-[256px] left-[499px] p-[32px] rounded-lg  border-gray-300 flex flex-col items-center justify-center">
      <div className="w-[395px] flex flex-col items-center gap-[32px] text-center">
        <p className="w-full max-w-[395px] text-lg font-semibold">
          Are you sure?
        </p>
        <p className="w-full max-w-[213px] text-sm whitespace-nowrap">
          Your selected email will be deleted.
        </p>
        <div className="w-full flex justify-center gap-[12px]">
          <button className="w-[119px] h-[48px] bg-[#25262B] text-white rounded-l-md flex items-center justify-center">
            Cancel
          </button>
          <button className="w-[152px] h-[48px] bg-gradient-to-r from-[#FA5252] to-[#A91919] text-white rounded-r-md flex items-center justify-center">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteButton;
