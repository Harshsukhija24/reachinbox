import React from "react";
import NavBar from "../Components/NavBar";
import PrimaryNav from "../Components/PrimaryNav";
import Detailbar from "../Components/Detailbar";
import Inbox from "../Components/Inbox";
import Midtop from "../Components/Midtop";

const Page = () => {
  return (
    <div>
      <NavBar />
      <PrimaryNav />
      <Inbox />
      <Midtop />
      <Detailbar />
    </div>
  );
};

export default Page;
