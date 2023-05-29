import React from "react";

function Result({ weatherData }) {
  return (
    <div className="shadow-xl mt-5 p-2">
      {weatherData.length !== 0 ? (
        <>
          <h2 className="text-3xl text-center">{weatherData.name}</h2>
          <div className="text-2xl flex justify-around my-5">
            <div>Max Temp: {weatherData ? Math.round(weatherData.main.temp_max-273.15): ""} deg</div>
            <div>Min Temp: {weatherData ? Math.round(weatherData.main.temp_min-273.15): ""} deg</div>
          </div>
          <div className="text-2xl flex justify-around my-5">
            <div>Icon</div>
            <div>Weather Type</div>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-center p-3 text-2xl">Please enter the city name</h3>
        </>
      )}
    </div>
  );
}

export default Result;
