//Method for getting user coordinates based on geolocation
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
    // If user declines GPS return New York as default
    return {
      lat: 40.707,
      lon: -74.009,
    };
  }
}
