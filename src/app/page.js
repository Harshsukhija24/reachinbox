import React from "react";
import PrimaryNav from "./Components/PrimaryNav";
import NavBar from "./Components/NavBar";
import Inbox from "./Components/Inbox";
import Detailbar from "./Components/Detailbar";
import Midtop from "./Components/Midtop";
import Reply from "./Components/Reply";
import DeleteButton from "./Components/DeleteButton";
import Message from "./Components/Message";

const pagepage = () => {
  return (
    <div>
      <NavBar />
      <PrimaryNav />
      <Message />
    </div>
  );
};

export default pagepage;
