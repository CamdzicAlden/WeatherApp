//Api key and base url variable for api
const API_KEY = "246343818a474811b96213159262202";
const BASE_URL = "https://api.weatherapi.com/v1";

//Method for fetching current weather api
export async function fetchCurrentWeather(city) {
  try {
    //Async fetching
    const res = await fetch(
      `https://cors-anywhere.herokuapp.com/${BASE_URL}/current.json?key=${API_KEY}&q=${city}&aqi=yes`,
    );

    //If status is not ok
    if (!res.ok) throw new Error(`API error ${res.status}`);

    //Return json of the result
    return await res.json();
  } catch (err) {
    console.error("fetchCurrentWeather: ", err.message);
  }
}

//Method for fetching forecast weather
export async function fetchForecast(city, days = 6) {
  try {
    //Async fetch
    const res = await fetch(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}`,
    );

    //If status is not ok
    if (!res.ok) throw new Error(`API error ${res.status}`);

    //Return json of the result
    return await res.json();
  } catch (err) {
    console.error("fetchForecast: ", err.message);
  }
}

//Method for fetching astronomy details
export async function fetchAstronomy(city) {
  try {
    //Async fetch
    const res = await fetch(
      `${BASE_URL}/astronomy.json?key=${API_KEY}&q=${city}`,
    );

    //If status is not ok
    if (!res.ok) throw new Error(`API error ${res.status}`);

    //Return json of the result
    return await res.json();
  } catch (err) {
    console.error("fetchAstronomy: ", err.message);
  }
}

//Method for fetching history
export async function fetchHistory(city, dt) {
  try {
    //Async fetch
    const res = await fetch(
      `https://cors-anywhere.herokuapp.com/${BASE_URL}/history.json?key=${API_KEY}&q=${city}&dt=${dt}`,
    );

    //If status is not ok
    if (!res.ok) throw new Error(`API error ${res.status}`);

    //Return json of the result
    return await res.json();
  } catch (err) {
    console.error("fetchHistory: ", err.message);
  }
}
