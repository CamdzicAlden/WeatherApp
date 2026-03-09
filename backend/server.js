import http from "http";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT || 5000;
const BASE_URL = "https://api.weatherapi.com/v1";

const cache = new Map();

//Making http server
const server = http.createServer(async (req, res) => {
  //Allow access to data from all origins to prevent CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight OPTIONS requests
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  //Making url object
  const url = new URL(req.url, `http://${req.headers.host}`);

  //Extracting pathname and query from url
  const { pathname, searchParams } = url;

  //If pathname is /currentWeather
  if (pathname === "/weatherData") {
    //Get lat and lon from query
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");
    const dt = searchParams.get("dt");

    //Validate query parameters
    if (!lat || !lon || !dt) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Missing lat or lon or dt" }));
      return;
    }

    const key = `${lat},${lon},${dt}`;

    if (cache.has(key)) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(cache.get(key)));
      return;
    }

    try {
      const [current, forecast, astronomy, history] = await Promise.all([
        fetch(
          `${BASE_URL}/current.json?key=${API_KEY}&q=${lat},${lon}&aqi=yes`,
        ).then((r) => r.json()),

        fetch(
          `${BASE_URL}/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=2`,
        ).then((r) => r.json()),

        fetch(`${BASE_URL}/astronomy.json?key=${API_KEY}&q=${lat},${lon}`).then(
          (r) => r.json(),
        ),

        fetch(
          `${BASE_URL}/history.json?key=${API_KEY}&q=${lat},${lon}&dt=${dt}`,
        ).then((r) => r.json()),
      ]);

      const result = {
        current: current.current,
        cityName: current.location.name,
        forecast: forecast.forecast,
        astronomy: astronomy.astronomy.astro,
        history: history.forecast.forecastday,
      };

      cache.set(key, result);
      setTimeout(() => cache.delete(key), 60000);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(result));
    } catch (err) {
      res.writeHead(500);
      res.end(JSON.stringify({ error: "Error fetching weather data" }));
    }

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

    const result = await fetch(
      `${BASE_URL}/search.json?key=${API_KEY}&q=${city}`,
    );
    const data = await result.json();

    //Write header and return json as a string
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));

    //If path name is /locationFromIP
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
