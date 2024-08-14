"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Reply = ({ onClose, threadId }) => {
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    // Extract token from URL parameters
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get("token");

    if (token) {
      setAuthToken(token);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch(
        `https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify({
            to,
            from,
            subject,
            body: message,
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        setErrorMessage("Failed to send reply. Please try again.");
        setSuccessMessage(null);
        console.error("Failed to send reply:", errorText);
        return;
      }

      const result = await response.json();
      setSuccessMessage("Reply sent successfully!");
      setErrorMessage(null);
      // Reset the form fields
      setTo("");
      setFrom("");
      setSubject("");
      setMessage("");
      onClose(); // Close the reply form after successful submission
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
      setSuccessMessage(null);
      console.error("Error sending reply:", error);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[999] bg-black bg-opacity-50 flex items-center justify-center">
      <form
        className="w-[752px] h-[434px] border rounded-lg bg-[#141517]"
        onSubmit={handleSubmit}
      >
        {/* Header */}
        <div className="relative w-[752px] h-[38px] px-[32px] py-[20px] rounded-t-lg bg-[#41464B] border border-[#41464B] flex items-center justify-between">
          <div className="w-[682px] h-[16px] flex items-center gap-[8px]">
            <p className="w-[33px] h-[16px] font-open-sans text-[12px] font-bold leading-[16.34px] text-white">
              Reply
            </p>
          </div>
          <div className="absolute right-[10px] top-[50%] transform -translate-y-[50%]">
            <Image
              src="/close.png"
              width={20}
              height={20}
              alt="Close"
              onClick={onClose} // Call onClose prop when clicked
              className="cursor-pointer" // Add cursor pointer for better UX
            />
          </div>
        </div>

        {/* Error and Success Messages */}

        {successMessage && (
          <p className="text-green-500 text-center">{successMessage}</p>
        )}

        {/* To Field */}
        <div className="w-[752px] h-[24px] px-[32px] pt-[8px] border-b border-[#34383D]">
          <div className="flex items-center gap-[8px]">
            <label className="font-open-sans text-[12px] font-normal leading-[16.34px]">
              To:
            </label>
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
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
              value={from}
              onChange={(e) => setFrom(e.target.value)}
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
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="flex-1 h-[16px] bg-transparent text-white border-none outline-none font-open-sans text-[12px] font-semibold leading-[16.34px]"
            />
          </div>
        </div>

        {/* Text Area */}
        <div className="w-[752px] h-[240px] px-[32px] pt-[8px]">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
              <Image src="/attachment.png" width={24} height={24} alt="Icon" />
              <Image src="/smiley.png" width={24} height={24} alt="Icon" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Reply;
