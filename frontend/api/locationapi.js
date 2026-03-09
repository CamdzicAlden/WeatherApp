//Method for getting user coordinates based on geolocation or IP address
export async function resolveUserLocation() {
  try {
    // Try GPS first
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    return {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    };
  } catch {
    // If user declines GPS
    try {
      //Use ipwho.is api for getting coords from IP
      const res = await fetch("http://ip-api.com/json/");
      const data = await res.json();

      return {
        lat: data.latitude,
        lon: data.longitude,
      };
    } catch (err) {
      console.error(err.message);
    }
  }
}
