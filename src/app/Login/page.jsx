import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen p-4">
      {/* Logo Section */}
      <div className="w-full h-[64px] p-[10px_100px] border-b border-[#000] flex items-center justify-center mt-[-20px]">
        <Image src="/logo123.png" width={126} height={24} alt="company logo" />
      </div>

      {/* Signup Section */}
      <div className="flex-grow flex flex-col items-center space-y-8 mt-12">
        <div className="w-[460px] h-[312px] rounded-[17px] border border-[#000] p-[24px_40px] bg-gradient-to-br from-[#111214] to-[#121212] flex flex-col items-center space-y-[32px]">
          <div className="flex flex-col items-center space-y-[32px]">
            <h3 className="text-xl font-semibold text-white text-center">
              Create A New Account
            </h3>

            <button className="w-[195px] h-[48px] rounded-lg border border-[#707172] text-white flex items-center justify-center bg-[#111214]">
              <div className="relative w-[24px] h-[24px] flex items-center justify-center"></div>
              <span className="ml-2">SignUp with Google</span>
            </button>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <button className="w-[195px] h-[48px] rounded-lg bg-gradient-to-r from-[#4B63DD] to-[#0524BF] text-white flex items-center justify-center">
              Create An Account
            </button>
            <h3 className="text-base font-normal text-white text-center">
              Already have an Account?{" "}
              <Link href="/" className="text-blue-500">
                signIn
              </Link>
            </h3>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full bg-[#121212] p-2 flex justify-center items-center mb-[-12px]">
        <p className="text-[12px] font-normal text-[#909296]">
          © 2023 Reachinbox. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Page;
