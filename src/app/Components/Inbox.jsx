"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Inbox = ({ onSelectThread }) => {
  const [messages, setMessages] = useState([]);
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    console.log("useEffect triggered");

    // Extract token from URL parameters
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get("token");

    console.log("Token from URL parameters:", token);

    if (token) {
      setAuthToken(token);
    }
  }, []);

  useEffect(() => {
    if (authToken) {
      console.log("Auth token available, fetching messages...");

      const fetchMessages = async () => {
        try {
          const response = await fetch(
            "https://hiring.reachinbox.xyz/api/v1/onebox/list",
            {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            }
          );

          console.log("Fetch response:", response);

          if (!response.ok) {
            console.error("Network response was not ok:", response.statusText);
            throw new Error("Network response was not ok");
          }

          const result = await response.json();
          console.log("Fetch result:", result);

          if (result && Array.isArray(result.data)) {
            setMessages(result.data);
            console.log("Messages set:", result.data);
          } else {
            console.error("Invalid data format:", result);
          }
        } catch (error) {
          console.error("Error fetching messages:", error);
        }
      };

      fetchMessages();
    } else {
      console.warn("Auth token is not set, unable to fetch messages");
    }
  }, [authToken]);

  const handleSelectThread = (threadId) => {
    console.log("Thread selected:", threadId);
    onSelectThread(threadId);
  };

  const handleReset = async () => {
    console.log("Resetting messages...");
    try {
      const response = await fetch(
        "https://hiring.reachinbox.xyz/api/v1/onebox/reset",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Reset response:", response);

      if (!response.ok) {
        const errorText = await response.text();
        console.error(
          "Network response was not ok:",
          response.statusText,
          errorText
        );
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      // Define fetchMessages function inside handleReset
      const fetchMessages = async () => {
        try {
          const response = await fetch(
            "https://hiring.reachinbox.xyz/api/v1/onebox/list",
            {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            }
          );

          console.log("Fetch response:", response);

          if (!response.ok) {
            console.error("Network response was not ok:", response.statusText);
            throw new Error("Network response was not ok");
          }

          const result = await response.json();
          console.log("Fetch result:", result);

          if (result && Array.isArray(result.data)) {
            setMessages(result.data);
            console.log("Messages set:", result.data);
          } else {
            console.error("Invalid data format:", result);
          }
        } catch (error) {
          console.error("Error fetching messages:", error);
        }
      };

      // Fetch messages after resetting
      await fetchMessages();
    } catch (error) {
      console.error("Error resetting messages:", error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="w-[260px] fixed h-[500px] mt-[60px] ml-[56px] border border-gray-700 bg-black">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-center p-2 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <p className="text-white text-m font-bold">All Inbox(s)</p>
            <Image src="/downarrow.png" width={16} height={17} alt="Arrow" />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="p-1 rounded"
              aria-label="Reset"
            >
              <Image src="/refresh.png" width={16} height={16} alt="Reset" />
            </button>
          </div>
        </div>

        {/* Subheader */}
        <div className="flex justify-between items-center p-2">
          <p className="text-white text-sm font-semibold">
            {messages.length}/{messages.length} Inboxes selected
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
              {messages.length}
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
          {messages.length > 0 ? (
            messages.map((message) => (
              <div
                key={message.id}
                className="border-b border-gray-700 cursor-pointer p-2"
                onClick={() => handleSelectThread(message.threadId)}
              >
                <div className="flex justify-between">
                  <p className="text-white text-l">{message.fromEmail}</p>
                  <p className="text-gray-400 text-sm">
                    {formatDate(message.createdAt)}
                  </p>
                </div>
                <p className="text-white text-sm mt-1">{message.subject}</p>
              </div>
            ))
          ) : (
            <div className="p-3 text-white text-sm">No messages found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inbox;
