import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com";
const API_KEY = "IfeBOWKo5_l4DuTgbYSckZr3T4lMOj3kJWlb31Vnoyo";

export async function fetchImages(inputValue, args) {
  try {
    const res = await axios.get("/search/photos/", {
      params: {
        query: inputValue,
        per_page: 10,
        client_id: `${API_KEY}`,
        ...args,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}
