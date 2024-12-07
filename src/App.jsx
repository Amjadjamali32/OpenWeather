import bg from './assets/bg.jpg';
import Main from './components/Main';
import Input from './components/Input';
import { useState, useEffect } from 'react';
import axios from "axios";
import { PuffLoader } from 'react-spinners'; 

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const DEFAULT_CITY = "New York"; // Set your default city
  const [loading, setLoading] = useState(false); // Loading state

  const fetchWeather = async (city) => {
    const API_KEY = '636907694b514dd3b39104754232612';
    const API_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

    setLoading(true); // Set loading to true when fetching data
    try {
      const response = await axios.get(API_URL);
      setWeatherData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Set loading to false after the API call completes
    }
  };

  useEffect(() => {
    fetchWeather(DEFAULT_CITY);
  }, []); 

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
      className="relative min-h-screen">
        <div className="absolute top-8 sm:top-16 left-0 right-0">
          <Input onCityChange={fetchWeather} />
        </div>

        <div>
          {loading && (
            <div className="loader-container">
              <PuffLoader color="#ffffff" size={150} />
            </div>
          )}
          {!loading && <Main weatherData={weatherData} />}
        </div>
    </div>
  );
};

export default App;
