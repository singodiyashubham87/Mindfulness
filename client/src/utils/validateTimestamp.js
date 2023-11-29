import { BASE_URL } from "./baseURL";
import axios from "axios";

// Validate if the result is already saved in the database or not using the timestamp of assessment submission
const validateTimestamp = async (userEmail, actualTimestamp) => {
  const reqBody = { email: userEmail };

  try {
    const res = await axios.get(`${BASE_URL}/api/user/`, {
      params: reqBody,
    });
    const trackingDataArray = res.data;
    for (let i = 0; i < trackingDataArray.length; i++) {
      if (trackingDataArray[i].timestamp == actualTimestamp) {
        return true;
      }
    }
    return false;
  } catch (error) {
    console.error(`Error in getting tracking data: ${error}`);
  }
};

export default validateTimestamp;
