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
    // Fallback to IP
    try {
      const res = await fetch("https://ipapi.co/json/");
      const data = await res.json();

      return {
        lat: data.latitude,
        lon: data.longitude,
      };
    } catch {
      console.error(err.message);
    }
  }
}
