//Method for fetching current weather api
export async function fetchCurrentWeather(location) {
  try {
    //Extracting lat and lon from location object
    const { lat, lon } = location;
    //Async fetching
    const res = await fetch(
      `http://192.168.0.17:5000/currentWeather?lat=${lat}&lon=${lon}`,
    );

    //If status is not ok
    if (!res.ok) throw new Error(`Server error ${res.status}`);

    //Return json of the result
    return await res.json();
  } catch (err) {
    console.error("fetchCurrentWeather: ", err.message);
  }
}

//Method for fetching forecast weather from open meteo
export async function fetchForecastOpenMeteo(location) {
  try {
    //Extracting lat and lon from location object
    const { lat, lon } = location;
    //Async fetch
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max`,
    );

    //If status is not ok
    if (!res.ok) throw new Error(`Server error ${res.status}`);

    //Return json of the result
    return await res.json();
  } catch (err) {
    console.error("fetchForecast: ", err.message);
  }
}

//Method for fetching forecast weather from weatherapi
export async function fetchForecast(location) {
  try {
    //Extracting lat and lon from location object
    const { lat, lon } = location;
    //Async fetch
    const res = await fetch(
      `http://192.168.0.17:5000/forecastWeather?lat=${lat}&lon=${lon}&days=3`,
    );

    //If status is not ok
    if (!res.ok) throw new Error(`Server error ${res.status}`);

    //Return json of the result
    return await res.json();
  } catch (err) {
    console.error("fetchForecast: ", err.message);
  }
}

//Method for fetching astronomy details
export async function fetchAstronomy(location) {
  try {
    //Extracting lat and lon from location object
    const { lat, lon } = location;
    //Async fetch
    const res = await fetch(
      `http://192.168.0.17:5000/astronomy?lat=${lat}&lon=${lon}`,
    );

    //If status is not ok
    if (!res.ok) throw new Error(`Server error ${res.status}`);

    //Return json of the result
    return await res.json();
  } catch (err) {
    console.error("fetchAstronomy: ", err.message);
  }
}

//Method for fetching history
export async function fetchHistory(location, dt) {
  try {
    //Extracting lat and lon from location object
    const { lat, lon } = location;
    //Async fetch
    const res = await fetch(
      `http://192.168.0.17:5000/historyWeather?lat=${lat}&lon=${lon}&dt=${dt}`,
    );

    //If status is not ok
    if (!res.ok) throw new Error(`Server error ${res.status}`);

    //Return json of the result
    return await res.json();
  } catch (err) {
    console.error("fetchHistory: ", err.message);
  }
}

//Method for fetching cities for given search text
export async function fetchSearch(city) {
  try {
    //Async fetch
    const res = await fetch(`http://192.168.0.17:5000/searchCity?city=${city}`);

    //If status is not ok
    if (!res.ok) throw new Error(`Server error ${res.status}`);
    //Return json of the result
    return await res.json();
  } catch (err) {
    console.error("fetchSearch: ", err.message);
  }
}
