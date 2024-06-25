import React from 'react'
import Counts from '../molecules/Counts'
import RequestForm from './RequestForm'

function CountsBar() {
  return (
    <div className=' h-auto'>
        <div className="flex flex-wrap justify-center sm:justify-between w-full  lg:w-fit gap-2.5 xl:w-fit">
        <div className="w-[150px] h-[150px]  lg:w-[100px] lg:h-[100px] xl:w-[150px] xl:h-[150px] rounded-full flex flex-col items-center justify-center bg-[#FFE2E8]">
          <div className="text-8xl md:text-12xl lg:text-8xl xl:text-12xl font-Ciutadella-SemiBold leading-10">
            {/* {newRequestList?.totalCount} */}
          </div>
          <div className="text-center text-xs md:text-lg lg:text-xs xl:text-base font-medium xl:w-19 lg:w-10 md:w-19">
            New Requests
          </div>
        </div>
        <div className="w-[150px] h-[150px]  lg:w-[100px] lg:h-[100px]  xl:w-[150px] xl:h-[150px] rounded-full flex flex-col items-center justify-center bg-[#CCF5BB]">
          <div className="text-8xl md:text-12xl lg:text-8xl xl:text-12xl font-Ciutadella-SemiBold leading-10">
            {/* {inProgressRequestList?.totalCount} */}
          </div>
          <div className="text-center text-xs md:text-lg lg:text-xs xl:text-base font-medium md:w-19">
            In Progress Requests
          </div>
        </div>
        <div className="w-[150px] h-[150px]  lg:w-[100px] lg:h-[100px]  xl:w-[150px] xl:h-[150px] rounded-full flex flex-col items-center justify-center bg-[#D0EEFF]">
          <div className="text-8xl md:text-12xl lg:text-8xl xl:text-12xl font-Ciutadella-SemiBold leading-10">
            {/* {escalatedRequestList?.totalCount} */}
          </div>
          <div className="text-center text-xs md:text-lg lg:text-xs xl:text-base font-medium md:w-19">
            Escalated Requests
          </div>
        </div>
        <div className="w-[150px] h-[150px]  lg:w-[100px] lg:h-[100px]  xl:w-[150px] xl:h-[150px] rounded-full flex flex-col items-center justify-center bg-[#D2D4FF]">
          <div className="text-8xl md:text-12xl lg:text-8xl xl:text-12xl font-Ciutadella-SemiBold leading-10">
            {/* {onHoldRequestList?.totalCount} */}
          </div>
          <div className="text-center text-xs md:text-lg lg:text-xxs xl:text-base font-medium md:w-19">
            On Hold Requests
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountsBar