import http from "http";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT || 5000;
const BASE_URL = "https://api.weatherapi.com/v1";

//Map for holding cached data on server
const cache = new Map();

//Making http server
const server = http.createServer(async (req, res) => {
  //Allow only this website to access api
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://weather-app-psi-five-97.vercel.app",
  );
  //Only allow those http methods
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  //Allow Content-Type in header
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight (test request that some browsers send)
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  //Making url object
  const url = new URL(req.url, `http://${req.headers.host}`);

  //Extracting pathname and query from url
  const { pathname, searchParams } = url;

  //If pathname is /weatherData
  if (pathname === "/weatherData") {
    //Get lat, lon and dt from query
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");
    const dt = searchParams.get("dt");

    //Validate query parameters
    if (!lat || !lon || !dt) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Missing lat or lon or dt" }));
      return;
    }

    //Key for storing data in cache
    const key = `${lat},${lon},${dt}`;

    //If cache already contains key return data instantly
    if (cache.has(key)) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(cache.get(key)));
      return;
    }

    try {
      //Destructuring result from Promise.all
      const [current, forecast, astronomy, history] = await Promise.all([
        //Fetching current.json
        fetch(
          `${BASE_URL}/current.json?key=${API_KEY}&q=${lat},${lon}&aqi=yes`,
        ).then((r) => r.json()),

        //Fetching forecast.json
        fetch(
          `${BASE_URL}/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=2`,
        ).then((r) => r.json()),

        //Fetching astronomy.json
        fetch(`${BASE_URL}/astronomy.json?key=${API_KEY}&q=${lat},${lon}`).then(
          (r) => r.json(),
        ),

        //Fetching history.json
        fetch(
          `${BASE_URL}/history.json?key=${API_KEY}&q=${lat},${lon}&dt=${dt}`,
        ).then((r) => r.json()),
      ]);

      //Making result object from destructured data
      const result = {
        current: current.current,
        cityName: current.location.name,
        forecast: forecast.forecast,
        astronomy: astronomy.astronomy.astro,
        history: history.forecast.forecastday,
      };

      //Store key and result data in cache
      cache.set(key, result);
      //Start a 60s timeout that will delete cache after
      setTimeout(() => cache.delete(key), 60000);

      //Returning result as string
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(result));
    } catch (err) {
      res.writeHead(500);
      res.end(JSON.stringify({ error: "Error fetching weather data" }));
    }

    //If pathname is /searchCity
  } else if (pathname === "/searchCity") {
    //Get city from query
    const city = searchParams.get("city");

    //Validate query parameters
    if (!city) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Missing city" }));
      return;
    }

    //Fetching search.json
    const result = await fetch(
      `${BASE_URL}/search.json?key=${API_KEY}&q=${city}`,
    );
    const data = await result.json();

    //Write header and return data as string
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));

    //If no endpoint found
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Endpoint not found" }));
  }
});

//Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
