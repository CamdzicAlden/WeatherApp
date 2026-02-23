const API_KEY = "246343818a474811b96213159262202";
const BASE_URL = "https://api.weatherapi.com/v1";

export async function fetchCurrentWeather(city) {
  const res = await fetch(
    `https://cors-anywhere.herokuapp.com/${BASE_URL}/current.json?key=${API_KEY}&q=${city}&aqi=yes`,
  );

  if (!res.ok) throw new Error("Failed to fetch data");

  const data = await res.json();
  return data;
}

export async function fetchForecast(city, days = 7) {
  const res = await fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}`,
  );

  if (!res.ok) throw new Error("Failed to fetch data");

  const data = await res.json();
  return data;
}

export async function fetchAstronomy(city) {
  const res = await fetch(
    `${BASE_URL}/astronomy.json?key=${API_KEY}&q=${city}`,
  );

  if (!res.ok) throw new Error("Failed to fetch data");

  const data = await res.json();
  return data;
}

export async function fetchHistory(city, dt) {
  const res = await fetch(
    `https://cors-anywhere.herokuapp.com/${BASE_URL}/history.json?key=${API_KEY}&q=${city}&dt=${dt}`,
  );

  if (!res.ok) throw new Error("Failed to fetch data");

  const data = await res.json();
  return data;
}
