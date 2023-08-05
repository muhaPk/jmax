"use client";
import React, { useState } from "react";

function DropDown({number, description, contant}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`bg-[#F4F8F3] ${
        isOpen ? "h-fit rounded-tl-[14px] lg:rounded-tl-[40px]" : "rounded-tl-[14px] lg:rounded-tl-[40px]"
      } transition-all duration-500 ease-in-out xl:px-[140px] lg:px-8 lg:py-8 px-[8px] py-[14px]`}
    >
      <div className="title flex justify-between items-center xl:h-[58px] w-full  ">
        <p className="flex">
          <span className="text-[#CDE1DB] font-donpoligrafbum text-xs sm:text-lg xl:text-[26px] mt-auto min-w-[32px] lg:min-w-[71px] block">
            0{number}.
          </span>{" "}
          {""}
          <span className="font-montserrat font-semibold text-[10px] sm:text-lg xl:text-2xl pl-3">
            {description}
          </span>
        </p>
        <p
          className={`${
            isOpen ? "text-black " : "text-[#44937D]"
          } cursor-pointer underline font-semibold text-[8px] sm:text-xs xl:text-2xl `}
        >
          {isOpen ? "LESS" : "MORE"}{" "}
        </p>
      </div>
      <div className={`${isOpen ? "block" : "hidden" } font-montserrat text-[10px] sm:text-base xl:text-lg pl-[44px] lg:pl-[80px] mt-[20px] xl:mt-[45px]`}>
        <p>
          {contant}
        </p>
      </div>
    </div>
  );
}

export default DropDown;
