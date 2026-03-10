//Method for fetching weatherapi weather
export async function fetchWeatherData(location, dt) {
  try {
    //Extracting lat and lon from location object
    const { lat, lon } = location;
    //Async fetching
    const res = await fetch(
      `https://weatherapp-q5ti.onrender.com/weatherData?lat=${lat}&lon=${lon}&dt=${dt}`,
    );

    //If status is not ok
    if (!res.ok) throw new Error(`Server error ${res.status}`);

    //Return json of the result
    return await res.json();
  } catch (err) {
    console.error("fetchWeatherData: ", err.message);
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

//Method for fetching cities for given search text
export async function fetchSearch(city) {
  try {
    //Async fetch
    const res = await fetch(
      `https://weatherapp-q5ti.onrender.com/searchCity?city=${city}`,
    );

    //If status is not ok
    if (!res.ok) throw new Error(`Server error ${res.status}`);
    //Return json of the result
    return await res.json();
  } catch (err) {
    console.error("fetchSearch: ", err.message);
  }
}
