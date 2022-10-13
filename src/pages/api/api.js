import axios from "axios";

const baseURL = "https://fintual.cl/api/";
// const token = '1234'

export const GetRequest = async () => {
  try {
    const response = await axios.get(apiUrl, {
    //  headers: { Authorization: `Bearer ${token}`},
    });
    return response.data
  } catch (error) {
    console.error(error);
  }
};

export const PostRequest = async () => {
  try {
    const response = await axios.post(
      "urlhere",
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
