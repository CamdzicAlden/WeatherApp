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
    return {
      lat: 40.707862584146326,
      lon: -74.00943611212904,
    };
  }
}
