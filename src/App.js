import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Search from "./components/Search";
import Result from "./components/Result";
import axios from "axios";
//import { getWeatherData } from "../src/api/weather";

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);
  const [history, setHistory] = useState([]);

  const changeSearch = (value) => {
    setSearch(value);
  };

  const searchWeatherHandler = () => {
    if (search !== "") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3c5bf9c122d9edc43e16e9080b4d3504&units=metrics`
        )
        .then((res) => {
          // not repeated city and add history on response
          if (history.indexOf(search) === -1) {
            setHistory([...history, search]);
          }
          console.log(res.data);
          setWeather(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // const searchWeatherHandler = () => {
  //   if(search !=="") {
  //     getWeatherData().then((res) => {
  //       console.log(res);
  //     })
  //   }
  // }

  const searchHistoryHandler = async (data) => {
    await setSearch(data)
    if (data !== "") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=3c5bf9c122d9edc43e16e9080b4d3504&units=metrics`
        )
        .then((res) => {
          // not repeated city and add history on response
          if (history.indexOf(data) === -1) {
            setHistory([...history, data]);
          }
          setWeather(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Weather App</p>
        </header>
      </div>
      <div className="App max-w-4xl mx-auto mt-2 p-3">
        <Search
          searchData={search}
          eventHandler={changeSearch}
          searchWeather={searchWeatherHandler}
        />
        <Result weatherData={weather} historyData={history} searchHistory={searchHistoryHandler}/>
      </div>
    </>
  );
}

export default App;
