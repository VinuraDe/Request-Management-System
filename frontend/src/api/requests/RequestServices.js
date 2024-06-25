import { axiosInstance } from "../axios";

export const getAllRequests = async () => {
  try {
    const response = await axiosInstance.get("/requests");
    console.log(response.data, "response from API"); // Ensure response structure is correct
    return response.data;
  } catch (error) {
    console.error("Error in getAllRequests:", error);
    return {
      success: false,
      message: error.message,
    };
  }
};
