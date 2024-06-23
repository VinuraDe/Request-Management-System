import React from 'react'

function RequestPage() {
  return (
    <div>
      <div className="flex flex-row bg-secondary text-white pt-[21.5px] pb-[12.5px] rounded-t-1.25 text-xs font-medium">
        <div className="flex-[0.5] pl-2">Request ID</div>
        <div className="flex-1 pl-2">Created on</div>
        <div className="flex-1 pl-2 truncate">Location</div>
        <div className="flex-1 pl-2">Service</div>
        <div className="flex-[0.7] pl-2 min-w-25 flex flex-row items-center gap-1">Status</div>
        <div className="flex-[0.7] pl-2 flex flex-row items-center gap-1">SLA</div>
        <div className="flex-1 pl-2 truncate">Department</div>
        <div className="flex-1 pl-2 truncate">Requested by</div>
        <div className="flex-1 pl-2 truncate">Assigned to</div>
        <div className="flex-[0.7] pl-2">Priority</div>
        <div className="flex-[0.5] pl-2">View</div>
      </div>
      {requests.map((request) => (
        <div key={request.id} className="flex flex-row bg-white text-black pt-[10.5px] pb-[10.5px] text-xs font-medium">
          <div className="flex-[0.5] pl-2">{request.id}</div>
          <div className="flex-1 pl-2">{request.createdOn}</div>
          <div className="flex-1 pl-2 truncate">{request.location}</div>
          <div className="flex-1 pl-2">{request.service}</div>
          <div className="flex-[0.7] pl-2 min-w-25 flex flex-row items-center gap-1">{request.status}</div>
          <div className="flex-[0.7] pl-2 flex flex-row items-center gap-1">{request.sla}</div>
          <div className="flex-1 pl-2 truncate">{request.department}</div>
          <div className="flex-1 pl-2 truncate">{request.requestedBy}</div>
          <div className="flex-1 pl-2 truncate">{request.assignedTo}</div>
          <div className="flex-[0.7] pl-2">{request.priority}</div>
          <div className="flex-[0.5] pl-2">View</div>
        </div>
      ))}
    </div>
  );
}

export default RequestPage;
