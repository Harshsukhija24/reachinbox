import Image from "next/image";
import React from "react";

const Message = () => {
  return (
    <div>
      <main className="flex-grow flex flex-col items-center px-4 py-10">
        <div className="w-full max-w-screen-lg flex flex-col items-center gap-[48px]">
          <div className="w-full fixed max-w-[832.3px] h-[392.4px]  mt-20 flex flex-col items-center gap-[48px]">
            <Image
              src="/NoMessageillustration.png"
              width={200}
              height={200}
              alt="Description"
            />
            <div className="w-full max-w-[533px] h-[115px] flex flex-col items-center gap-[24px]">
              <p className="w-full max-w-[533px] h-[37px] font-[DM Sans] text-[24px]  leading-[36.53px] text-center">
                It’s the beginning of a legendary sales pipeline
              </p>
              <p className="w-full max-w-[289px] h-[54px] font-[DM Sans] text-[18px] font-medium leading-[27.4px] text-center">
                When you have inbound E-mails you’ll see them here
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Message;
