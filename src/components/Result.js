import React from "react";

function Result({ weatherData, historyData}) {
  const historyItems = historyData.map((item, index) => {
    return <li className="text-xl cursor-pointer" key={index}>{item}</li>
  })
  return (
    <div className="grid grid-cols-4 shadow-xl mt-5 p-2 bg-slate-900 text-white">
      <div className="col-span-1 border-r-2">
        <span className="text-center block font-bold text-base">Search History</span>
        <ul>
          {historyItems}
        </ul>
      </div>
      <div className="col-span-3">
      {weatherData.length !== 0 ? (
        <>
          <h2 className="text-3xl text-center mt-3">{weatherData.name}</h2>
          <div className="text-2xl flex justify-around my-5">
            <div>Max Temp: {weatherData ? Math.round(weatherData.main.temp_max-273.15): ""} deg</div>
            <div>Min Temp: {weatherData ? Math.round(weatherData.main.temp_min-273.15): ""} deg</div>
          </div>
          <div className="text-2xl flex justify-around my-5 items-center">
            <div>
              <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
            </div>
            <div>{weatherData.weather[0].main}</div>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-center p-3 text-2xl">Please enter the city name</h3>
        </>
      )}
      </div>
    </div>
  );
}

export default Result;
