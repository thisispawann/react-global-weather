import logo from "./logo.svg";
import "./App.css";
import { useState } from 'react';
import Search from "./components/Search";
import Result from "./components/Result";

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Weather App</p>
        </header>
      </div>
      <div className="max-w-4xl mx-auto mt-2 p-3">
        <Search searchData={search} />
        <Result />
      </div>
    </>
  );
}

export default App;
