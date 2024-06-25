import React, { useEffect, useState } from "react";
import Counts from "../molecules/Counts";
import RequestTable from "../organism/RequestsTable";
import CountsBar from "../organism/CountsBar";
import RequestForm from "../organism/RequestForm";
import { NavButtons, PrimaryButtons } from "../atoms/Buttons/Buttons";
import { PrimaryHeading, SecondaryHeading } from "../atoms/Headings/Heading";
import {
  RequestTableData,
  TableHeadingTitle,
} from "../../constants/RequestTableData";
import { TableHeading } from "../atoms/Headings/Heading";
import { getAllRequests } from "../../api/requests/RequestServices"; // Import your API call function

function RequestsPage() {
  const [requestsData, setRequestsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllRequests();
        if (response.success) {
          setRequestsData(response.data); // Ensure correct setting of state
          console.log("Fetched data:", response.data);
        } else {
          console.error("Failed to fetch requests", response.message);
        }
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Requests state has been updated:", requestsData);
  }, [requestsData]);

  return (
    <div className="px-[50px] py-10">
      {/* <RequestTable/> */}
      <div className="flex w-full justify-between items-center">
        <div className="flex items-center  gap-10">
          <SecondaryHeading typo={"Requests"} />
          <PrimaryButtons typo={"+ New Request"} />
        </div>
        <CountsBar />
      </div>
      <div className="w-full bg-[#C0A03A] flex">
        {TableHeadingTitle.map((items) => (
          <div className="w-full flex" key={items.id}>
            <div className="flex flex-row bg-[#C0A03A] text-white pt-[21.5px]  pb-[12.5px] rounded-t-1.25 text-xs font-medium">
              <div className="flex-[1] pl-2 w-full">{items.title}</div>
            </div>
          </div>
        ))}
      </div>
       <div>
        {Array.isArray(requestsData) && requestsData.length > 0 ? (
          requestsData.map((items, index) => (
            <div
              className="flex flex-row bg-white text-xsxl hover:bg-gray-200 cursor-pointer"
              key={index}
            >
              <div className="flex-[0.5] border-r-2 border-b-2 border-gray-100 pl-2 py-4">
                {index + 1}
              </div>
              <div className="flex-[0.5] border-r-2 border-b-2 border-gray-100 pl-2 py-4">
                {new Date(items.createdOn).toLocaleDateString()}
              </div>
              <div className="flex-[0.5] border-r-2 border-b-2 border-gray-100 pl-2 py-4">
                {items.location}
              </div>
              <div className="flex-[0.5] border-r-2 border-b-2 border-gray-100 pl-2 py-4">
                {items.service}
              </div>
              <div className="flex-[0.5] border-r-2 border-b-2 border-gray-100 pl-2 py-4">
                {items.status}
              </div>
              <div className="flex-[0.5] border-r-2 border-b-2 border-gray-100 pl-2 py-4">
                {items.department}
              </div>
              <div className="flex-[0.5] border-r-2 border-b-2 border-gray-100 pl-2 py-4">
                {items.requestedBy}
              </div>
              <div className="flex-[0.5] border-r-2 border-b-2 border-gray-100 pl-2 py-4">
                {items.assignedTo}
              </div>
              <div className="flex-[0.5] border-r-2 border-b-2 border-gray-100 pl-2 py-4">
                {items.priority}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-4">No requests found.</div>
        )}
      </div>
    </div>
  );
}

export default RequestsPage;
