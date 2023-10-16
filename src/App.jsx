import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PictureOfTheDay from "./components/PictureOfTheDay/PictureOfTheDay";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import MarsRoverPhoto from "./components/MarsRoverPhoto/MarsRoverPhoto";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pic-of-the-day" element={<PictureOfTheDay />} />
          <Route path="/mars-rover" element={<MarsRoverPhoto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
