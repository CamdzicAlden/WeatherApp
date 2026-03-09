import http from "http";
import { URLSearchParams } from "url";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT || 5000;
const BASE_URL = "https://api.weatherapi.com/v1";

//Helper template function for api communication
async function fetchAndSend(res, endpoint, queryParams = {}) {
  try {
    const queryString = new URLSearchParams(queryParams).toString();
    //Fetch weatherapi with given data
    const apiResponse = await fetch(
      `${BASE_URL}/${endpoint}?key=${API_KEY}&${queryString}`,
    );

    //Convert data to json
    const data = await apiResponse.json();

    //Write header and return json as a string
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  } catch (err) {
    res.writeHead(500);
    res.end(JSON.stringify({ error: "Error fetching data" }));
  }
}

//Making http server
const server = http.createServer(async (req, res) => {
  //Allow access to data from all origins to prevent CORS
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://weather-app-six-flax-79.vercel.app",
  );

  //Making url object
  const url = new URL(req.url, `http://${req.headers.host}`);

  //Extracting pathname and query from url
  const { pathname, searchParams } = url;

  //If pathname is /currentWeather
  if (pathname === "/currentWeather") {
    //Get lat and lon from query
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");

    //Validate query parameters
    if (!lat || !lon) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Missing lat or lon" }));
      return;
    }

    fetchAndSend(res, "current.json", { q: `${lat},${lon}`, aqi: "yes" });

    //If pathname is /forecastWeather
  } else if (pathname === "/forecastWeather") {
    //Get lat and lon from query
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");
    const days = searchParams.get("days");

    //Validate query parameters
    if (!lat || !lon || !days) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Missing lat or lon" }));
      return;
    }

    fetchAndSend(res, "forecast.json", { q: `${lat},${lon}`, days: `${days}` });

    //If pathname is /astronomy
  } else if (pathname === "/astronomy") {
    //Get lat and lon from query
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");

    //Validate query parameters
    if (!lat || !lon) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Missing lat or lon" }));
      return;
    }

    fetchAndSend(res, "astronomy.json", { q: `${lat},${lon}` });

    //If pathname is /historyWeather
  } else if (pathname === "/historyWeather") {
    //Get lat and lon from query
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");
    const dt = searchParams.get("dt");

    //Validate query parameters
    if (!lat || !lon || !dt) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Missing lat or lon" }));
      return;
    }

    fetchAndSend(res, "history.json", { q: `${lat},${lon}`, dt: `${dt}` });

    //If pathname is /searchCity
  } else if (pathname === "/searchCity") {
    //Get lat and lon from query
    const city = searchParams.get("city");

    //Validate query parameters
    if (!city) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Missing lat or lon" }));
      return;
    }

    fetchAndSend(res, "search.json", { q: `${city}` });
  } else if (pathname === "/locationFromIP") {
    const result = await fetch("https://ipapi.co/json/");
    const data = await result.json();
    //Write header and return json as a string
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Endpoint not found" }));
  }
});

//Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
