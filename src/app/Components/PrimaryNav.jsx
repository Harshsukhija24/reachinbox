import Image from "next/image";
import Link from "next/link";
import React from "react";

const PrimaryNav = () => {
  return (
    <div className="w-[56px] fixed h-full border-r border-[#343A40] bg-[#101113] p-[0_4px]">
      {/* Logo Section */}
      <div className="w-[48px] h-[70px] p-[8px_12px_12px_12px] rounded-tl-[2px] rounded-br-none rounded-bl-none rounded-tr-none flex items-center justify-center">
        <Link href="/Home">
          <Image src="/logo12.png" alt="Logo" width={56} height={60} />{" "}
          {/* Further increased logo size */}
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="w-[48px] h-[300px] mt-16 flex flex-col items-center justify-between">
        <div className="w-[28px] h-[546px] flex flex-col items-center justify-between ">
          {" "}
          {/* Decreased space between icons */}
          <Link href="/Home">
            <Image src="/home.png" alt="Home" width={20} height={20} />{" "}
            {/* Decreased icon size */}
          </Link>
          <Link href="/Search">
            <Image src="/email.png" alt="Email" width={20} height={20} />{" "}
            {/* Decreased icon size */}
          </Link>
          <Link href="/Mail">
            <Image src="/email2.png" alt="Email 2" width={20} height={20} />{" "}
            {/* Decreased icon size */}
          </Link>
          <Link href="/Send">
            <Image src="/4frame.png" alt="Layout" width={20} height={20} />{" "}
            {/* Decreased icon size */}
          </Link>
          <Link href="/List">
            <Image src="/viewlist.png" alt="View List" width={20} height={20} />{" "}
            {/* Decreased icon size */}
          </Link>
          <Link href="/Inbox">
            <Image src="/6frame.png" alt="Frame 6" width={20} height={20} />{" "}
            {/* Decreased icon size */}
          </Link>
          <Link href="/Bar">
            <Image src="/barchart.png" alt="Bar Chart" width={20} height={20} />{" "}
            {/* Decreased icon size */}
          </Link>
        </div>
      </div>

      {/* User Icon Section */}
      <div className="w-[48px] h-[56px] flex items-center justify-center">
        <div className="w-[48px] h-[56px]  mt-28 p-[12px_8px] flex items-center justify-center rounded-tl-[2px] rounded-br-none rounded-bl-none rounded-tr-none ">
          <Image src="/user_icon.png" width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

export default PrimaryNav;
