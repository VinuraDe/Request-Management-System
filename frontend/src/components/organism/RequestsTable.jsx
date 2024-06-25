import React from 'react'

function RequestsTable() {
  return (
    <div className='justify-center w-[1340px]'>
      <div className="flex flex-row bg-[#C19C27] text-black pt-[21.5px] pb-[12.5px] rounded-t-1.25 text-xs font-medium">
        <div className="flex-[0.5] pl-2">Request ID</div>
        <div className="flex-1 pl-2">Created on</div>
        <div className="flex-1 pl-2 truncate">Location</div>
        <div className="flex-1 pl-2">Service</div>
        <div className="flex-[0.7] pl-2 min-w-25 flex flex-row items-center gap-1">Status</div>
        <div className="flex-1 pl-2 truncate">Department</div>
        <div className="flex-1 pl-2 truncate">Requested by</div>
        <div className="flex-1 pl-2 truncate">Assigned to</div>
        <div className="flex-[0.7] pl-2">Priority</div>
        <div className="flex-[0.5] pl-2">View</div>
      </div>
      
    </div>
  );
}

export default RequestsTable;
