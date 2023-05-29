const url = "https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3c5bf9c122d9edc43e16e9080b4d3504&units=metrics";

export const getWeatherData = () => {
  const request = fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json"
    }
  }).then((res) => res.json());
  return request;
};
