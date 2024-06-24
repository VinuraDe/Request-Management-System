import { apiRequest, axiosInstance } from "../axios";

export const getAllRequests = async () => {
  try {
    return await apiRequest(() => axiosInstance.get("requests"));
  } catch (error) {}
};

const getRequestCountsByStatus = async (status) => {
  const request = async () => axiosInstance.get("/requests");
  const response = await apiRequest(request);

  if (response.success) {
    const requests = response.data;
    return requests.filter((request) => request.status === status).length;
  } else {
    console.error(`Error fetching ${status} request counts:`, response.message);
    throw new Error(response.message);
  }
};

export const getNewRequestCounts = () => getRequestCountsByStatus("NEW");
export const getDelayedRequestCounts = () =>
  getRequestCountsByStatus("DELAYED");
export const getEscalatedRequestCounts = () =>
  getRequestCountsByStatus("ESCALATED");
export const getOnHoldRequestCounts = () => getRequestCountsByStatus("ON_HOLD");
