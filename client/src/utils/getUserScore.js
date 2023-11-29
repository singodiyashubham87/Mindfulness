import { BASE_URL } from "./baseURL";
import axios from "axios";

const getUserScore = async (formData) => {
  // Posting form data to get assessment Score
  let score = -1;
  try {
    await axios
      .post(`${BASE_URL}/api/user/`, {
        data: formData,
      })
      .then((res) => {
        score = res.data.score;
      });
  } catch (error) {
    console.error(`Error in posting formData: ${error}`);
  }
  return score;
};

export default getUserScore;
