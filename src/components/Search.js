import React from 'react'

function Search() {
  return (
    <div className="flex shadow-xl">
      <input
        type="search"
        className="border border-black w-full p-3 text-2xl"
      />
      <button className="p-3 bg-rose-600 text-white">Search</button>
    </div>
  )
}

export default Search
