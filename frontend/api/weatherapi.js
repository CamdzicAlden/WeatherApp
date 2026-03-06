//Method for fetching current weather api
export async function fetchCurrentWeather(location) {
  try {
    //Extracting lat and lon from location object
    const { lat, lon } = location;
    //Async fetching
    const res = await fetch(
      `http://localhost:5000/currentWeather?lat=${lat}&lon=${lon}`,
    );

    //If status is not ok
    if (!res.ok) throw new Error(`Server error ${res.status}`);

    //Return json of the result
    return await res.json();
  } catch (err) {
    console.error("fetchCurrentWeather: ", err.message);
  }
}

//Method for fetching forecast weather
export async function fetchForecast(location, days = 6) {
  try {
    //Extracting lat and lon from location object
    const { lat, lon } = location;
    //Async fetch
    const res = await fetch(
      `http://localhost:5000/forecastWeather?lat=${lat}&lon=${lon}&days=${days}`,
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
      `http://localhost:5000/astronomy?lat=${lat}&lon=${lon}`,
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
      `http://localhost:5000/historyWeather?lat=${lat}&lon=${lon}&dt=${dt}`,
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
    const res = await fetch(`http://localhost:5000/searchCity?city=${city}`);

    //If status is not ok
    if (!res.ok) throw new Error(`Server error ${res.status}`);
    //Return json of the result
    return await res.json();
  } catch (err) {
    console.error("fetchSearch: ", err.message);
  }
}
