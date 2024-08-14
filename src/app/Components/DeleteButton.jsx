"use client";

import React, { useEffect, useState } from "react";

const DeleteButton = ({ threadId, onClose }) => {
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    // Extract token from URL parameters
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get("token");

    if (token) {
      setAuthToken(token);
    }
  }, []); // Empty dependency array to run only once on mount

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (response.ok) {
        console.log("Message deleted successfully");
        onClose();
      } else {
        console.error("Failed to delete message");
      }
    } catch (error) {
      console.error("An error occurred while deleting the message", error);
    }
  };

  return (
    <div className="w-[443px] h-[249px] absolute top-[256px] left-[499px] p-[32px] rounded-lg border-gray-300 flex flex-col items-center justify-center bg-[#1F1F1F] shadow-lg">
      <div className="w-full max-w-[395px] flex flex-col items-center gap-[32px] text-center">
        <p className="text-lg font-semibold text-white">Are you sure?</p>
        <p className="text-sm text-gray-300">
          Your selected email will be deleted.
        </p>
        <div className="w-full flex justify-center gap-[12px]">
          <button
            className="w-[119px] h-[48px] bg-[#25262B] text-white rounded-l-md flex items-center justify-center"
            onClick={onClose} // Cancel button functionality
          >
            Cancel
          </button>
          <button
            className="w-[152px] h-[48px] bg-gradient-to-r from-[#FA5252] to-[#A91919] text-white rounded-r-md flex items-center justify-center"
            onClick={handleDelete} // Delete button functionality
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteButton;
