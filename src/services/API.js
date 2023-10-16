import axios from "axios";

const API_KEY = "L0p1sRS3wsVB4hGm9uQfnGWaGeRSKSWzmMwqZqyt";

const fetchData = async (date) => {
  try {
    const response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const fetchMarsRover = async () => {
  try {
    const response = await axios.get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const fetchMarsWeather = async () => {
  try {
    const response = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  fetchData,
  fetchMarsRover,
  fetchMarsWeather,
};
