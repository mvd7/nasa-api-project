import React, { useState, useEffect } from "react";
import API from "../../services/API";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Fade } from "react-reveal";

const PictureOfTheDay = () => {
  const [nasaData, setNasaData] = useState(null);
  const [loadingData, setLoadingData] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [loadingImage, setLoadingImage] = useState(true);

  const fetchData = async () => {
    try {
      const formattedDate = selectedDate.toISOString().split("T")[0];
      const data = await API.fetchData(formattedDate);
      //   console.log("Data from API:", data);
      setNasaData(data);
      setLoadingData(false);
      //   console.log("Data from API:", data);
      setNasaData(data);
      setLoadingData(false);
    } catch (error) {
      console.error(error);
      setLoadingData(false);
    }
  };

  const loadImage = () => {
    setLoadingImage(true);
    const img = new Image();
    img.src = nasaData.hdurl;
    img.onload = () => {
      setLoadingImage(false);
    };
  };

  useEffect(() => {
    fetchData();
  }, [selectedDate]);

  useEffect(() => {
    if (nasaData && nasaData.hdurl) {
      loadImage();
    }
  }, [nasaData]);

  return (
    <div className="bg-gray-800 text-white p-4 flex flex-col min-h-screen md:flex-row">
      <div className="w-full p-4 flex flex-col items-center justify-center md:w-1/2">
        <Fade left>
          <h1 className="text-3xl font-extrabold mb-4 text-blue-400 mt-20 ml-auto mr-auto">
            Astronomy Picture of the Day
          </h1>
        </Fade>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="yyyy-MM-dd"
          className="bg-white text-gray-800 p-2 rounded-md shadow-md focus:outline-none focus:ring focus:ring-blue-400"
          calendarClassName="bg-white rounded-md shadow-md"
          maxDate={new Date()}
        />

        {loadingData ? (
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <Fade left>
            <div>
              <h2 className="text-2xl font-semibold mb-4">{nasaData.title}</h2>
              <p className="text-lg">{nasaData.explanation}</p>
            </div>
          </Fade>
        )}
      </div>
      {!loadingData && (
        <div className="w-full flex items-center justify-center md:w-1/2">
          {loadingImage ? (
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <Fade right>
              <img
                src={nasaData.hdurl}
                alt={nasaData.title}
                className="max-w-full h-[90vh]"
              />
            </Fade>
          )}
        </div>
      )}
    </div>
  );
};

export default PictureOfTheDay;
