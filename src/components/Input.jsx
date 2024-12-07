import React, { useState } from 'react';

const Input = ({ onCityChange }) => {
    const [city, setCity] = useState('');

    const handleCityChange = (e) => {
        const newCity = e.target.value;
        setCity(newCity);
        if (newCity.trim()) {
            onCityChange(newCity); // Notify App component
        }
    };

    return (
        <div className="flex items-center justify-center px-4">
            <input
                type="text"
                value={city}
                onChange={handleCityChange}
                placeholder="Enter a City..."
                className="w-full max-w-md px-4 py-2 sm:px-6 sm:py-3 text-gray-900 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
};

export default Input;
