import React, { useRef } from 'react'

function Search(props) {
    const searchInput = useRef();
  return (
    <div className="flex shadow-xl">
      <input
        type="search"
        className="border border-black w-full p-3 text-2xl"
        value={props.searchData}
        onChange={() => props.eventHandler(searchInput.current.value)}
        ref={searchInput}
      />
      <button onClick={props.searchWeather} className="p-3 bg-rose-600 text-white">Search</button>
    </div>
  )
}

export default Search
