import { BASE_URL } from "./baseURL";
import axios from "axios";

// Get Track Data from Backend
export const getData = async (
  reqBody,
  setShowGetDataButton,
  setTrackingData
) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/user/`, {
      params: reqBody,
    });
    setTrackingData(res.data);
    // Hide the "Get Tracking Data" button and set local storage variable value to false
    setShowGetDataButton(false);
  } catch (error) {
    console.error(`Error in getting tracking data: ${error}`);
  }
};

// Function to handle click on Get Tracking Data button
export const getTrackingData = async (
  reqBody,
  setShowGetDataButton,
  setTrackingData
) => {
  try {
    await getData(reqBody, setShowGetDataButton, setTrackingData);
    localStorage.setItem("getData", "false");
  } catch (error) {
    console.error("Error fetching tracking data:", error);
  }
};

export default { getData, getTrackingData };
