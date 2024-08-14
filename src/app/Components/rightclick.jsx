"use client";
import React, { useState } from "react";
import DeleteButton from "./DeleteButton"; // Import the DeleteButton component

const RightClick = ({ messageId, onClose }) => {
  const [showDeleteComponent, setShowDeleteComponent] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteComponent(true);
  };

  const handleCloseDeleteComponent = () => {
    setShowDeleteComponent(false);
  };

  return (
    <div className="fixed bg-white w-[223px] h-[193px] p-[12px] rounded-[8px] border border-gray-300 shadow-lg z-50">
      <ul>
        <li className="w-[205px] h-[21px] flex items-center gap-[8px]">
          <span className="text-gray-700">Mark as unread</span>
        </li>
        <li className="w-[205px] h-[21px] flex items-center gap-[8px]">
          <span className="text-gray-700">Edit lead</span>
        </li>
        <li className="w-[205px] h-[21px] flex items-center gap-[8px]">
          <span className="text-gray-700">Remove lead</span>
        </li>
        <li className="w-[205px] h-[21px] flex items-center gap-[8px]">
          <span className="text-gray-700">Set reminder</span>
        </li>
        <li
          className="w-[205px] h-[21px] flex items-center gap-[8px] cursor-pointer"
          onClick={handleDeleteClick}
        >
          <span className="text-gray-700">Delete</span>
        </li>
      </ul>

      {showDeleteComponent && (
        <DeleteButton
          threadId={messageId}
          onClose={handleCloseDeleteComponent}
        />
      )}
    </div>
  );
};

export default RightClick;
