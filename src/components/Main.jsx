import React from 'react';

const Main = ({ weatherData }) => {
    const getCurrentDay = () => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = new Date();
        return days[today.getDay()];
    };

    return (
        <div className="flex flex-col items-center justify-center h-auto w-full mx-auto px-4 py-6 sm:py-10 lg:py-12">
            {weatherData ? (
                <div className="text-center w-full max-w-3xl mx-auto shadow-xl rounded-lg flex flex-col mt-16 sm:mt-24 lg:mt-20 bg-white">
                    {/* Top Section */}
                    <div className="flex flex-col sm:flex-row justify-between items-center p-4">
                        {/* Location Info */}
                        <div className="w-full sm:w-1/2 p-4 text-center sm:text-left">
                            <p className="text-lg sm:text-xl font-semibold mt-2 sm:mt-2">{getCurrentDay()}</p>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-1 sm:mt-2">{weatherData.location.name}</h2>
                            <p className="text-lg sm:text-xl mt-1">{weatherData.location.country}</p>
                        </div>
                        {/* Weather Icon */}
                        <div className="w-full sm:w-1/2 flex justify-center sm:my-0">
                            <img
                                src={weatherData.current.condition.icon}
                                alt="Weather icon"
                                className="w-4/6 sm:w-28 lg:w-3/6 lg:ms-0"
                            />
                        </div>
                    </div>

                    {/* Weather Details */}
                    <div className="flex flex-col sm:flex-row justify-between p-4">
                        {/* Temperature & Condition */}
                        <div className="w-full sm:w-1/2 p-2 text-left">
                            <p className="text-md sm:text-lg font-normal">
                                <span className="font-semibold lg:ms-2">Temperature:</span> {weatherData.current.temp_c}&deg;C
                            </p>
                            <p className="text-lg sm:text-xl font-semibold text-yellow-400 mt-2 lg:ms-2">
                                {weatherData.current.condition.text}
                            </p>
                        </div>

                        {/* Additional Weather Info */}
                        <div className="w-full sm:w-1/2 p-2 text-left">
                            <p className="text-md sm:text-lg font-normal">
                                <span className="font-semibold">Humidity:</span> {weatherData.current.humidity}%
                            </p>
                            <p className="text-md sm:text-lg font-normal mt-2">
                                <span className="font-semibold">Wind Speed:</span> {weatherData.current.wind_kph} {weatherData.current.wind_dir} kph
                            </p>
                            <p className="text-md sm:text-lg font-normal mt-2">
                                <span className="font-semibold">UV:</span> {weatherData.current.uv}
                            </p>
                            <p className="text-md sm:text-lg font-normal mt-2">
                                <span className="font-semibold">Pressure:</span> {weatherData.current.pressure_mb} mb
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <h1 className="text-xl text-red-500 sm:text-2xl lg:text-3xl font-bold mt-8 lg:mt-20 sm:mt-12">
                    Please Enter a city to see the weather!
                </h1>
            )}
        </div>
    );
};

export default Main;
