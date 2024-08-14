// Page.js
"use client";
import React, { useEffect, useState } from "react";
import Inbox from "../Components/Inbox";
import Midtop from "../Components/Midtop";
import NavBar from "../Components/NavBar";
import PrimaryNav from "../Components/PrimaryNav";
import Detailbar from "../Components/Detailbar";
import Image from "next/image";
import Reply from "../Components/Reply";
import DeleteButton from "../Components/DeleteButton";

const Page = () => {
  const [selectedThread, setSelectedThread] = useState(null);
  const [threadDetails, setThreadDetails] = useState(null);
  const [showReplies, setShowReplies] = useState(false);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get("token");
    setAuthToken(token || null);

    const handleKeyDown = (event) => {
      if (event.key === "d" || event.key === "D") setShowDeleteButton(true);
      if (event.key === "r" || event.key === "R") setShowReplyForm(true);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSelectThread = async (threadId) => {
    setSelectedThread(threadId);
    setErrorMessage(null);

    try {
      const response = await fetch(
        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`,
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );

      if (!response.ok) {
        const message =
          response.status === 401
            ? "Unauthorized access. Please log in again."
            : "Failed to fetch thread details. Please try again.";
        setErrorMessage(message);
        throw new Error(message);
      }

      const result = await response.json();
      setThreadDetails(result.data);
    } catch (error) {
      setThreadDetails(null);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Unknown Date";

    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const dateOnly = date.toLocaleDateString();
    const todayOnly = today.toLocaleDateString();
    const yesterdayOnly = yesterday.toLocaleDateString();

    return dateOnly === todayOnly
      ? "Today"
      : dateOnly === yesterdayOnly
      ? "Yesterday"
      : dateOnly;
  };

  return (
    <div>
      <NavBar />
      <PrimaryNav />
      <Inbox onSelectThread={handleSelectThread} />
      <Midtop />
      <div className="relative">
        <div className="absolute top-[135px] left-[316px] w-[700px] flex items-center justify-center text-xs">
          <div className="relative flex items-center">
            <div className="absolute border-l border-gray-500 h-4"></div>
            <p className="text-white px-2 bg-[#141517] relative z-10">
              {threadDetails && formatDate(threadDetails[0]?.createdAt)}
            </p>
          </div>
        </div>
        <div className="fixed top-[170px] left-[316px] w-[700px] h-auto p-2 bg-[rgb(20,21,23)] rounded-lg shadow-lg">
          {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}
          {threadDetails ? (
            <div className="space-y-2">
              <div className="p-2 border border-gray-700 rounded-lg">
                <p className="text-white text-md font-semibold">
                  {threadDetails[0].subject || "No Subject"} -{" "}
                  {formatDate(threadDetails[0].createdAt)}
                </p>
                <p className="text-white text-sm">
                  From: {threadDetails[0].fromEmail || "No Email"}
                </p>
                <p className="text-white text-sm">
                  To: {threadDetails[0].toEmail || "Unknown Recipient"}
                </p>
                <p className="text-white text-sm mt-2">
                  Hey <br />
                  {threadDetails[0].body}
                </p>
              </div>
              {showReplies &&
                threadDetails.slice(1).map((reply, index) => (
                  <div
                    key={index}
                    className="p-2 mt-2 border border-gray-700 rounded-lg bg-[#171819]"
                  >
                    <p className="text-white text-sm">
                      <strong>RE: {reply.subject}:</strong> <br />
                      From: {reply.fromEmail} <br />
                      To: {reply.toEmail} <br />
                      {reply.body}
                    </p>
                  </div>
                ))}
              <div className="flex items-center justify-center mt-2">
                <button
                  className="text-white px-4 py-2 rounded"
                  onClick={() => setShowReplies(!showReplies)}
                >
                  {showReplies
                    ? "Hide Replies"
                    : `View all ${threadDetails?.length - 1} replies`}
                </button>
              </div>
            </div>
          ) : (
            <p className="text-white">Select a thread to view details.</p>
          )}
        </div>
      </div>
      <div className="flex w-[315px] h-[40px] absolute top-[500px] left-[353px] gap-[24px]">
        <button
          className="flex items-center w-[136px] h-[40px] px-[24px] py-[8px] gap-[10px] rounded-lg bg-[#4B63DD]"
          onClick={() => setShowReplyForm(true)}
        >
          <Image src="/reply.png" height={24} width={24} alt="Reply" />
          <p>Reply</p>
        </button>
      </div>
      {showReplyForm && (
        <Reply
          threadId={selectedThread}
          onClose={() => setShowReplyForm(false)}
          handleSelectThread={handleSelectThread}
        />
      )}
      {showDeleteButton && (
        <DeleteButton
          threadId={selectedThread}
          onClose={() => setShowDeleteButton(false)}
        />
      )}
      <Detailbar />
    </div>
  );
};

export default Page;
