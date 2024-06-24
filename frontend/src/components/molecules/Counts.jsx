import React from "react";
import { CountsHeading } from "../atoms/Headings/Heading";
// import { 
//     getNewRequestCounts, 
//     getDelayedRequestCounts, 
//     getEscalatedRequestCounts, 
//     getOnHoldRequestCounts 
//   } from '../../api/requests/RequestServices';

function Counts() {
  return (
    <div>
      <div className="flex gap-[30px] justify-end px-[30px] py-[50px] bg-slate-500">
        <div className="w-[114px] h-[114px] rounded-full bg-[#FFE2E8]">
            <div className="flex justify-center w-[40px] h-[40px] font-[600]">
                <p>10</p>
            </div>
          <div className=" align-middle">
            <CountsHeading typo={"New Requests"} />
          </div>
        </div>
        <div className="w-[114px] h-[114px] rounded-full bg-[#CCF5BB]">
          <div className=" align-middle">
            <CountsHeading typo={"Delayed Requests"} />
          </div>
        </div>
        <div className="w-[114px] h-[114px] rounded-full bg-[#D0EEFF]">
          <div className=" align-middle">
            <CountsHeading typo={"Escalated Requests"} />
          </div>
        </div>
        <div className="w-[114px] h-[114px] rounded-full bg-[#D2D4FF]">
          <div className=" align-middle">
            <CountsHeading typo={"On Hold Requests"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counts;
