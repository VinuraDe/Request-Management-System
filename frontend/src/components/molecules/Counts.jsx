import React from "react";
import { CountsHeading, PrimaryHeading } from "../atoms/Headings/Heading";
import { Circles } from "../atoms/Circles/Circles";
import { PrimaryButtons } from "../atoms/Buttons/Buttons";
// import {
// getNewRequestCounts,
// getDelayedRequestCounts,
// getEscalatedRequestCounts,
// getOnHoldRequestCounts
// } from '../../api/requests/RequestServices';

function Counts() {
  return (
    <div className="h-[174px]] flex items-center">
      <div className="flex gap-[30px] justify-end px-[30px] py-[50px] w-full">
        <div className="flex justify-start gap-[28px]">
          <div>
          <PrimaryHeading typo={"Requests"} />
          </div>
          <div>
          <PrimaryButtons typo={"New Request"} />
          </div>
          
        </div>

        <div className="flex flex-col justify-center items-center w-[114px] h-[114px] rounded-full bg-[#FFE2E8]">
          <div className="flex flex-col items-center">
            <p className="text-center font-extralight text-[40px]">10</p>
            <CountsHeading typo={"New Requests"} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[114px] h-[114px] rounded-full bg-[#CCF5BB]">
          <div className="flex flex-col items-center">
            <p className="text-center font-extralight text-[40px]">10</p>
            <CountsHeading typo={"Delayed Requests"} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[114px] h-[114px] rounded-full bg-[#D0EEFF]">
          <div className="flex flex-col items-center">
            <p className="text-center font-extralight text-[40px]">10</p>
            <CountsHeading typo={"Escalated Requests"} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[114px] h-[114px] rounded-full bg-[#D2D4FF]">
          <div className="flex flex-col items-center">
            <p className="text-center font-extralight text-[40px]">10</p>
            <CountsHeading typo={"On Hold Requests"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counts;
