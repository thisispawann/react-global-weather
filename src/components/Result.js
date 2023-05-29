import React from 'react'

function Result() {
  return (
    <div className="shadow-xl mt-5 p-2">
      <h2 className="text-3xl text-center">City Name</h2>
      <div className="text-2xl flex justify-around my-5">
        <div>Max Temp: 35 deg</div>
        <div>Min Temp: 17 deg</div>
      </div>
      <div className="text-2xl flex justify-around my-5">
        <div>Icon</div>
        <div>Weather Type</div>
      </div>
    </div>
  )
}

export default Result
