import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import Result from "./components/Result";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Weather App</p>
        </header>
      </div>
      <div className="max-w-4xl mx-auto mt-2 p-3">
        <Search />
        <Result />
      </div>
    </>
  );
}

export default App;
