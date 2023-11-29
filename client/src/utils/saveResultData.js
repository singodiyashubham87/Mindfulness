import { BASE_URL } from "./baseURL";
import axios from "axios";

const saveResultData = async (userEmail, actualTimestamp, assessmentScore) => {
  const data = {
    user: userEmail,
    score: assessmentScore,
    timestamp: actualTimestamp,
  };
  try {
    // Sending the result to the server for saving in the database
    await axios.post(`${BASE_URL}/api/saveresult/`, data);
  } catch (error) {
    console.error(`Error in saving result: ${error}`);
  }
};

export default saveResultData;
